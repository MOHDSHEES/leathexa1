export default function discountPrice(price = 1, discount = 0, decimal = 2) {
  if (!discount) return price.toFixed(decimal);
  return (price - (discount / 100) * price).toFixed(decimal);
}
