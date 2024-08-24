import Link from "next/link";
import React, { useEffect, useState } from "react";
import trimText from "../functions/trimText";
import createOrderId from "../functions/razorpay/getOrderId";
import { Button, Skeleton, Stack } from "@mui/material";

const CheckoutProducts = ({ items }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (!items || !items.cartItems) return 0;
      return items.cartItems.reduce((total, item) => {
        const discountedPrice =
          item.product.price -
          item.product.price * (item.product.discount / 100);
        return total + discountedPrice * item.quantity;
      }, 0);
    };

    setTotal(calculateTotalPrice());
  }, [items]);

  async function paymentHandler(e) {
    e.preventDefault();
    try {
      const orderId = await createOrderId(total.toFixed(2), "INR");
      console.log(orderId);
      //   const options = {
      //     key: process.env.key_id,
      //     amount: parseFloat(amount) * 100,
      //     currency: currency,
      //     name: "name",
      //     description: "description",
      //     order_id: orderId,
      //     handler: async function (response) {
      //       const data = {
      //         orderCreationId: orderId,
      //         razorpayPaymentId: response.razorpay_payment_id,
      //         razorpayOrderId: response.razorpay_order_id,
      //         razorpaySignature: response.razorpay_signature,
      //       };

      //       //   const result = await fetch('/api/verify', {
      //       //    method: 'POST',
      //       //    body: JSON.stringify(data),
      //       //    headers: { 'Content-Type': 'application/json' },
      //       //   });
      //       //   const res = await result.json();
      //       if (res.isOk) alert("payment succeed");
      //       else {
      //         alert(res.message);
      //       }
      //     },
      //     prefill: {
      //       name: name,
      //       email: email,
      //     },
      //     theme: {
      //       color: "#3399cc",
      //     },
      //   };
      //   const paymentObject = new window.Razorpay(options);
      //   paymentObject.on("payment.failed", function (response) {
      //     alert(response.error.description);
      //   });
      //   paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="lg:col-span-4 ">
      <div className="p-6 rounded-md shadow dark:shadow-gray-800 sticky top-20">
        <div className="flex justify-between items-center">
          <h5 className="text-lg font-semibold">Your Cart</h5>

          <Link
            href="#"
            className="bg-orange-500 flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5"
          >
            {items && items.cartItems ? items.cartItems.length : 1}
          </Link>
        </div>

        <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
          {!items || !items.cartItems ? (
            <Stack gap={1} sx={{ padding: "10px" }}>
              <Skeleton variant="rounded" height={60} />
              <Skeleton variant="rounded" height={60} />
            </Stack>
          ) : (
            items.cartItems.map((item, index) => {
              const product = item.product;
              return (
                <div
                  key={index}
                  className="p-3 flex justify-between items-center"
                >
                  <div>
                    <h5 className="font-semibold">
                      {trimText(product.name, 20)}
                    </h5>
                    <p className="text-sm text-slate-400">
                      Qty: {item.quantity}, Size: {item.variant.size}, Color:{" "}
                      {item.variant.color}
                    </p>
                  </div>

                  <p className="text-slate-400 font-semibold">
                    {(
                      product.price -
                      (product.price * product.discount) / 100
                    ).toFixed(2)}
                  </p>
                </div>
              );
            })
          )}

          {/* <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 text-green-600">
            <div>
              <h5 className="font-semibold">Promo code</h5>
              <p className="text-sm text-green-600">EXAMPLECODE</p>
            </div>

            <p className="text-red-600 font-semibold">-$ 10</p>
          </div> */}
          <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
            <div>
              <h5 className="font-semibold">Total (USD)</h5>
            </div>

            <p className="font-semibold">$ {total.toFixed(2)}</p>
          </div>

          <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 text-green-600">
            <button
              onClick={paymentHandler}
              className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md w-full"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* <div className="subcribe-form mt-6">
          <div className="relative max-w-xl">
            <input
              type="email"
              id="subcribe"
              name="email"
              className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
              placeholder="Promo code"
            />
            <button
              type="submit"
              className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-orange-500 text-white rounded-full"
            >
              Redeem
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CheckoutProducts;
