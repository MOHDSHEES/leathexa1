// import { verifyCsrfToken } from "@/lib/csrfToken";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/productModel";
// import userModel from "@/models/userModels";
// import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  // const session = await getServerSession(req);
  const data = await req.json();

  const { filter, page, limit, gender } = data;
  // // Check if the user is authenticated
  // if (!session || !session.user)
  //   return NextResponse.json({ status: 501, msg: "Not Authorized" });
  const skip = (page - 1) * limit;
  try {
    await dbConnect();
    if (req.method === "POST") {
      const query = { gender: gender };
      if (filter && filter.discount) {
        query.discount = { $gte: parseFloat(filter.discount.replace("%", "")) };
      }
      // Filter by color
      if (filter && filter.color && filter.color.length > 0) {
        query["variants.color"] = { $in: filter.color };
      }

      // Filter by category
      if (filter && filter.category && filter.category.length > 0) {
        query.category = { $in: filter.category };
      }

      // Filter by size
      if (filter && filter.size && filter.size.length > 0) {
        query["variants.sizes.size"] = { $in: filter.size };
      }
      // Fetch products based on the constructed query
      let totalCount = null;
      if (page === 1) totalCount = await Product.countDocuments(query);
      const products = await Product.find(query)
        .sort({ createdAt: 1 })
        .skip(skip) // Sort by ascending order of creation date
        .limit(limit);

      if (products) {
        return NextResponse.json({
          status: 200,
          data: products,
          totalCount: totalCount,
        });
      } else {
        return NextResponse.json({
          status: 500,
          msg: "Oops! No data found.",
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
