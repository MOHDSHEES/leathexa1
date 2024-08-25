import dbConnect from "@/lib/mongoose";
import userModel from "@/models/userModels";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { verifyCsrfToken } from "@/lib/csrfToken";

export async function POST(req) {
  const session = await getServerSession(req);
  // Check if the user is authenticated
  const data = await req.json();
  if (!session || !session.user)
    return NextResponse.json({ status: 501, msg: "Not Authorized" });
  if (!verifyCsrfToken(req)) {
    return NextResponse.json({ status: 403, msg: "Invalid CSRF token" });
  }
  try {
    await dbConnect();

    const user = await userModel.findOne({ email: data.email, status: true });
    if (!user && !user.email) {
      return NextResponse.json({
        status: 500,
        msg: "User not found. Try again later.",
      });
    }
    const isMatch = await bcrypt.compare(data.oldPassword, user.password);

    if (!isMatch)
      return NextResponse.json({
        status: 500,
        msg: "Incorrect Old Password.",
      });
    if (req.method === "POST") {
      const resu = await userModel.findOneAndUpdate(
        { email: data.email, status: true },
        data.details,
        { new: true }
      );
      if (resu) {
        return NextResponse.json({ status: 200 });
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
    return NextResponse.json({ status: 500, msg: error });
  }
}
