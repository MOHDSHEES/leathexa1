import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Get the token from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Check if the request is for a protected route
  const protectedPaths = ["/shop-cart", "/use"];
  const isProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  // If the user is not authenticated and is trying to access a protected route, redirect to the sign-in page
  if (isProtected && !token) {
    // const signInUrl = new URL("/auth/login", req.url);
    // return NextResponse.redirect(signInUrl);
    const signInUrl = new URL("/auth/login", req.url);
    signInUrl.searchParams.set("callbackUrl", req.nextUrl.href);
    return NextResponse.redirect(signInUrl);
  }

  // Continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/shop-cart", "/user/:path*"], // List all the protected routes here
};
