// lib/csrfToken.js
import csrf from "csrf";
import cookie from "cookie";

const tokens = new csrf();
const csrfSecret = process.env.CSRF_SECRET;
export const generateCsrfToken = () => {
  return tokens.create(csrfSecret);
};

export const verifyCsrfToken = (req) => {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const csrfTokenFromCookie = cookies["csrf-token"];
  return tokens.verify(csrfSecret, csrfTokenFromCookie);
};
