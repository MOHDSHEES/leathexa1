import { verifyCsrfToken } from "@/lib/csrfToken";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/productModel";
import Review from "@/models/reviewModel";
// import userModel from "@/models/userModels";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(req);
  const data = await req.json();
  if (!verifyCsrfToken(data.csrfToken)) {
    return NextResponse.json({ status: 403, msg: "Invalid CSRF token" });
  }
  // Check if the user is authenticated
  if (!session || !session.user)
    return NextResponse.json({ status: 501, msg: "Not Authorized" });

  try {
    await dbConnect();
    if (req.method === "POST") {
      const review = await new Review(data.state).save();
      if (review) {
        const product = await Product.findById(data.state.product);
        if (!product) {
          throw new Error("Product not found");
        }

        // Calculate the new average rating
        const totalRatings = product.ratings * product.numRatings;
        const updatedNumRatings = product.numRatings + 1;
        const updatedRatings =
          (totalRatings + data.state.rating) / updatedNumRatings;

        // Update the product with the new average rating and number of reviews
        product.ratings = updatedRatings;
        product.numRatings = updatedNumRatings;
        if (data.state.review) product.numReviews = product.numReviews + 1;

        // Save the updated product document
        await product.save();

        return NextResponse.json({ status: 200, data: review });
      } else {
        return NextResponse.json({
          status: 500,
          msg: "Something went wrong.",
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
