import dbConnect from "@/lib/mongoose";
import userModel from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    if (req.method === "POST") {
      const newUser = await new userModel(data.state).save();

      return NextResponse.json({ status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ status: 500, msg: error.message });
  }
}
