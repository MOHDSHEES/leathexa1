import { verifyCsrfToken } from "@/lib/csrfToken";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/productModel";
import userModel from "@/models/userModels";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(req);
  // const data = await req.json();
  // Check if the user is authenticated
  if (!session && !session.user)
    return NextResponse.json({ status: 501, msg: "Not Authorized" });

  try {
    await dbConnect();
    if (req.method === "POST") {
      const resu = await Product.find({});
      if (resu) {
        return NextResponse.json({ status: 200, data: resu });
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
    return NextResponse.json({ status: 500, msg: error });
  }
}
