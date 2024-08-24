import axios from "axios";

export default async function createOrderId(amount, currency = "INR") {
  try {
    const { data } = await axios.post("/api/order/createOrder", {
      amount: parseFloat(amount),
      currency: currency,
    });
    //  const response = await fetch('/api/order', {
    //   method: 'POST',
    //   headers: {
    //    'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //    amount: parseFloat(amount)*100,
    //   })
    //  });

    if (data.status === 200) {
      return data.orderId;
    }
    throw new Error("Something Went Wrong");
    //  const data = await response.json();
  } catch (error) {
    return error;
  }
}
