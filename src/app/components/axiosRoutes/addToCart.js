import axios from "axios";

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
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_ANALYTICS_URL}/userActivity/addAnalytics`,
    {
      user: userId,
      type: type,
      ...productObj,
      ...details,
    }
  );
  return data;
}
