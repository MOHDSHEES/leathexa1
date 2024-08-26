import axios from "axios";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export default async function addToCart({ userId, details }) {
  const { data } = await axios.post("/api/cart/product/add", {
    userId: userId,
    details: details,
  });
  return data;
}

export async function userActivityAnalytics(
  userId,
  type = "add_to_cart",
  productObj,
  details
) {
  let storedSessionId = Cookies.get("sessionId");

  if (!storedSessionId) {
    storedSessionId = uuidv4();
    Cookies.set("sessionId", storedSessionId, { expires: 1 });
  }
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_ANALYTICS_URL}/userActivity/addAnalytics`,
    {
      user: userId,
      type: type,
      sessionId: storedSessionId,
      ...productObj,
      ...details,
    }
  );
  return data;
}
