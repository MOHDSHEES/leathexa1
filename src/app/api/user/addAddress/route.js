import { verifyCsrfToken } from "@/lib/csrfToken";
import dbConnect from "@/lib/mongoose";
import userModel from "@/models/userModels";
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

    if (req.method === "POST") {
      if (data.checked) {
        const resu = await userModel
          .findOneAndUpdate(
            { _id: data.userId, status: true },
            { billingAddress: data.details, shippingAddress: data.details },
            {
              new: true,
            }
          )
          .select("-password");
        if (resu) {
          return NextResponse.json({ status: 200, data: resu });
        } else {
          return NextResponse.json({
            status: 500,
            msg: "Something Went Wrong.",
          });
        }
      } else {
        let query = null;
        if (data.name === "Billing") query = { billingAddress: data.details };
        else {
          query = { shippingAddress: data.details };
        }
        const resu = await userModel
          .findOneAndUpdate({ _id: data.userId, status: true }, query, {
            new: true,
          })
          .select("-password");
        if (resu) {
          return NextResponse.json({ status: 200, data: resu });
        } else {
          return NextResponse.json({
            status: 500,
            msg: "Something Went Wrong.",
          });
        }
      }
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }
  } catch (error) {
    return NextResponse.json({ status: 500, msg: error });
  }
}
