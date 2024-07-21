import dbConnect from "@/lib/mongoose";
import userModel from "@/models/userModels";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(req);
  // Check if the user is authenticated
  if (session && session.user && session.user.name) {
    try {
      await dbConnect();
      const data = await req.json();
      if (req.method === "POST") {
        const resu = await userModel.findOne(
          { email: data.email, status: true },
          { password: 0 }
        );
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
  } else return NextResponse.json({ status: 501, msg: "Not Authorized" });
}
