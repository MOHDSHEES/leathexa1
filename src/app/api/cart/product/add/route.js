import { verifyCsrfToken } from "@/lib/csrfToken";
import dbConnect from "@/lib/mongoose";
import Cart from "@/models/cartModel";
import userModel from "@/models/userModels";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(req);
  // Check if the user is authenticated
  const data = await req.json();
  if (!verifyCsrfToken(req)) {
    return NextResponse.json({ status: 403, msg: "Invalid CSRF token" });
  }
  if (!session || !session.user)
    return NextResponse.json({ status: 501, msg: "Not Authorized" });
  try {
    await dbConnect();
    const { details } = data;

    if (req.method === "POST") {
      let cart = await Cart.findOne({ user: data.userId });

      if (!cart) {
        // If no cart exists, create a new one
        cart = new Cart({
          user: data.userId,
          cartItems: [
            {
              ...details,
              addedAt: Date.now(), // Set timestamp when adding item
              updatedAt: Date.now(), // Set timestamp when adding item
            },
          ],
        });
      } else {
        // Check if item with same product, color, and size exists
        const existingItemIndex = cart.cartItems.findIndex(
          (item) =>
            item.product.toString() === details.product &&
            item.variant.color === details.variant.color &&
            item.variant.size === details.variant.size
        );

        if (existingItemIndex > -1) {
          return NextResponse.json({
            status: 202,
            msg: "Item Already present",
          });
          // cart.cartItems[existingItemIndex].quantity += details.quantity;
        } else {
          // Item does not exist, add to cartItems
          cart.cartItems.push({
            ...details,
            addedAt: Date.now(), // Set timestamp when adding item
            updatedAt: Date.now(), // Set timestamp when adding item
          });
        }
      }

      // Save the cart
      const savedCart = await cart.save();

      if (savedCart) {
        await userModel.updateOne(
          { _id: data.userId },
          {
            $inc: {
              itemsInCart: 1,
            },
          }
        );
        return NextResponse.json({ status: 200, data: savedCart });

        //   const cart = await Cart.findOneAndUpdate(
        //     { user: data.userId },
        //     {
        //       $addToSet: { cartItems: data.details },
        //     },
        //     {
        //       new: true,
        //       upsert: true,
        //     }
        //   );
        //   if (cart) {
        //     await userModel.updateOne(
        //         { _id: data.userId },
        //         {
        //           $inc: {
        //             itemsInCart: 1,
        //           },
        //         }
        //       );
        //     return NextResponse.json({ status: 200, data: cart });
      } else {
        return NextResponse.json({
          status: 500,
          msg: "Something Went Wrong.",
        });
      }
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, msg: error });
  }
}
