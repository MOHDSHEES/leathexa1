import { verifyCsrfToken } from "@/lib/csrfToken";
import dbConnect from "@/lib/mongoose";
import Cart from "@/models/cartModel";
import userModel from "@/models/userModels";
import Wishlist from "@/models/wishlistModel";
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
    const { product } = data;

    if (req.method === "POST") {
      let wishlist = await Wishlist.findOne({ user: data.userId });

      if (!wishlist) {
        // If no wishlist exists, create a new one
        wishlist = new Wishlist({
          user: data.userId,
          wishlist: [
            {
              product: product,
              addedAt: Date.now(), // Set timestamp when adding item
            },
          ],
        });
      } else {
        // Check if item already exists
        const existingItemIndex = wishlist.wishlist.findIndex(
          (item) => item.product.toString() === product
        );

        if (existingItemIndex > -1) {
          return NextResponse.json({
            status: 202,
            msg: "Item Already present",
          });
        } else {
          // Item does not exist, add to wishlist
          wishlist.wishlist.push({
            product: product,
            addedAt: Date.now(), // Set timestamp when adding item
          });
        }
      }

      // Save the wishlist
      const savedWishlist = await wishlist.save();

      if (savedWishlist) {
        await userModel.updateOne(
          { _id: data.userId },
          {
            $inc: {
              itemsInWishlist: 1,
            },
          }
        );
        return NextResponse.json({ status: 200, data: savedWishlist });
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
