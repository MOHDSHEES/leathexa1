// lib/csrfToken.js
import csrf from "csrf";

const tokens = new csrf();
const csrfSecret = process.env.CSRF_SECRET;
export const generateCsrfToken = () => tokens.create(csrfSecret);

export const verifyCsrfToken = (token) => tokens.verify(csrfSecret, token);
