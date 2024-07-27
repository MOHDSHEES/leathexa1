import { verifyCsrfToken } from "@/lib/csrfToken";
import dbConnect from "@/lib/mongoose";
import Cart from "@/models/cartModel";
import Product from "@/models/productModel";
import userModel from "@/models/userModels";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(req);
  // Check if the user is authenticated
  const data = await req.json();
  if (!verifyCsrfToken(data.csrfToken)) {
    return NextResponse.json({ status: 403, msg: "Invalid CSRF token" });
  }
  if (!session && !session.user)
    return NextResponse.json({ status: 501, msg: "Not Authorized" });
  try {
    await dbConnect();
    // console.log(data);

    if (req.method === "POST") {
      const cart = await Cart.findOneAndUpdate(
        { _id: data.cartId },
        { $pull: { cartItems: { product: data.productId } } },
        { new: true }
      ).populate({
        model: Product,
        path: "cartItems.product",
        select: {
          name: 1,
          price: 1,
          status: 1,
          discount: 1,
          images: { $slice: 1 },
        },
      });
      if (cart) {
        await userModel.updateOne(
          { _id: data.userId },
          {
            $inc: {
              itemsInCart: -1,
            },
          }
        );
        return NextResponse.json({
          status: 200,
          data: cart,
        });
      } else NextResponse.json({ status: 500, msg: "something went wrong" });
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: 500, msg: error });
  }
}
