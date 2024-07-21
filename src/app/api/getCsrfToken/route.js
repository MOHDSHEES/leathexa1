import { generateCsrfToken } from "@/lib/csrfToken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const csrfToken = generateCsrfToken();
    return NextResponse.json({ status: 200, token: csrfToken });
  } catch (error) {
    return NextResponse.json({ status: 500, msg: error });
  }
}
