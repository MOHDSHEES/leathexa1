import dbConnect from "@/lib/mongoose";
import Review from "@/models/reviewModel";
import userModel from "@/models/userModels";
// import userModel from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  try {
    await dbConnect();
    if (req.method === "POST") {
      const { page = 1, limit = 10 } = data;
      const skip = (page - 1) * limit;
      let userReviews = null;
      if (page === 1) {
        const user = await Review.find({
          product: data.product,
          user: data.userId,
          review: { $ne: "" },
        })
          .sort({ createdAt: -1 })
          .limit(8)
          .populate({
            path: "user",
            model: userModel,
            select: { name: 1 },
          });
        userReviews = user;
      }
      const reviews = await Review.find({
        product: data.product,
        review: { $ne: "" },
        user: { $ne: data.userId },
      })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate({
          path: "user",
          model: userModel,
          select: { name: 1 },
        });
      if (reviews) {
        if (userReviews)
          return NextResponse.json({
            status: 200,
            data: [...userReviews, ...reviews],
          });
        return NextResponse.json({ status: 200, data: reviews });
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
    console.log(error);
    return NextResponse.json({ status: 500, msg: error });
  }
}
