import axios from "axios";

export default async function addToCart({ userId, details }) {
  const { data } = await axios.post("/api/cart/product/add", {
    userId: userId,
    details: details,
  });
  return data;
}
