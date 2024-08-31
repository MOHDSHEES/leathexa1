import { verifyCsrfToken } from "@/lib/csrfToken";
import dbConnect from "@/lib/mongoose";
import Cart from "@/models/cartModel";
import Product from "@/models/productModel";
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
    // console.log(data);

    if (req.method === "POST") {
      let wishlist = await Wishlist.findOne(
        { user: data.userId },
        { user: 0 }
      ).populate({
        model: Product,
        path: "wishlist.product",
        select: {
          name: 1,
          price: 1,
          status: 1,
          discount: 1,
          images: { $slice: 1 },
        },
      });
      // console.log(cart);
      if (wishlist) {
        return NextResponse.json({
          status: 200,
          data: wishlist,
        });
      } else {
        return NextResponse.json({
          status: 200,
          data: {},
        });
      }
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: 500, msg: error });
  }
}
