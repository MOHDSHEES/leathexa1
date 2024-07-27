"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Counter({ qtn, cartItems, setCartItems, item }) {
  let [count, setCount] = useState(qtn);
  // const [disable, setDisable] = useState(false);
  const [saveCount, setSaveCount] = useState(qtn);
  useEffect(() => {
    setCount(qtn);
  }, [qtn]);
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    filter(newCount);
  };
  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      filter(newCount);
    }
  };

  const filter = (newCount) => {
    // setDisable(true);
    setSaveCount(newCount);
    // const updatedItems = cartItems.cartItems.map((prd) => {
    //   if (prd._id === item._id) return { ...prd, quantity: newCount };
    //   return prd;
    // });
    // setCartItems({ ...cartItems, cartItems: updatedItems });
    // setUpdateFlag(1);
    // setSaveCount(newCount);
    // setDisable(false);
  };

  useEffect(() => {
    const handleSave = async () => {
      try {
        const { data } = await axios.post("/api/cart/product/updateQty", {
          _id: cartItems._id,
          productId: item._id,
          quantity: count,
        });
        if (data.status === 200) setCartItems(data.data);
      } catch (error) {
        console.error("Failed to save cart item quantity", error);
      }
      //  finally {
      //   setDisable(false);
      // }
    };

    const timer = setTimeout(() => {
      if (saveCount !== qtn) {
        handleSave();
      }
    }, 700); // Delay in milliseconds (e.g., 500ms)

    return () => clearTimeout(timer);
  }, [saveCount]);

  return (
    <>
      <div className="qty-icons">
        <button
          // disabled={disable}
          onClick={() => decrement()}
          className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white minus"
        >
          -
        </button>
        <input
          min="1"
          name="quantity"
          value={count}
          type="number"
          readOnly
          className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white pointer-events-none w-16 ps-4 quantity mx-1"
        />
        <button
          // disabled={disable}
          onClick={() => increment()}
          className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white plus"
        >
          +
        </button>
      </div>
    </>
  );
}
