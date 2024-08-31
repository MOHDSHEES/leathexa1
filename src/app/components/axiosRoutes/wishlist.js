import axios from "axios";
export default async function addToWishlist({ userId, product }) {
  const { data } = await axios.post("/api/wishlist/product/add", {
    userId: userId,
    product: product,
  });
  return data;
}

export async function getWishlist(userId) {
  const { data } = await axios.post("/api/wishlist/product/get", {
    userId: userId,
  });
  return data;
}

export async function removeWishlistItem(userId, product) {
  const { data } = await axios.post("/api/wishlist/product/remove", {
    userId: userId,
    product: product,
  });
  return data;
}
