import { generateCsrfToken } from "@/lib/csrfToken";
import { NextResponse } from "next/server";
import cookie from "cookie";

export async function POST(req) {
  try {
    const csrfToken = generateCsrfToken();
    const response = NextResponse.json({ status: 200, msg: "CSRF token set" });
    response.headers.set(
      "Set-Cookie",
      cookie.serialize("csrf-token", csrfToken, {
        httpOnly: true, // Ensures the cookie is not accessible via JavaScript
        secure: process.env.NODE_ENV === "production", // Use secure flag in production
        sameSite: "Strict", // Mitigate CSRF risks
        path: "/", // Make it available throughout the app
        maxAge: 60 * 60, // Optional: Set cookie expiration time (e.g., 1 hour)
      })
    );
    return response;
    // return NextResponse.json({ status: 200, token: csrfToken });
  } catch (error) {
    return NextResponse.json({ status: 500, msg: error });
  }
}
