"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { Rating } from "@mui/material";
import { closeMessage, openMessage } from "../functions/message";
import { MyContext } from "@/src/context";
import axios from "axios";

export default function ProductDescription({
  product,
  selectedColor,
  setSelectedColor,
  setSelectedVariantIdx,
}) {
  // const [selectedColor, setSelectedColor] = useState(product.variants[0].color);
  const [selectedSize, setSelectedSize] = useState(
    product.variants[0].sizes[0]
  );
  const [sizes, setSizes] = useState(product.variants[0].sizes);
  // console.log(selectedSize);
  const [adding, setAdding] = useState(false);
  const { messageApi, csrfToken, user, setUser } = useContext(MyContext);
  let [count, setCount] = useState(1);

  const increments = () => {
    setCount(count + 1);
  };
  const decrements = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const setVariant = (variant, idx) => {
    setSelectedVariantIdx(idx);
    setSelectedColor(variant.color);
    setSizes(variant.sizes ? variant.sizes : null);
  };

  async function addToCart() {
    if (!user) {
      closeMessage(messageApi, "Login to Add Product.", "error");
      return;
    }
    setAdding(true);
    openMessage(messageApi, "Adding To Cart...");
    const { data } = await axios.post("/api/cart/product/add", {
      userId: user._id,
      csrfToken: csrfToken,
      details: {
        product: product._id,
        quantity: count,
        variant: {
          color: selectedColor,
          size: selectedSize.size,
        },
      },
    });
    if (data.status === 200) {
      closeMessage(messageApi, "Item Added Successfully", "success");
      setUser({ ...user, itemsInCart: data.data.cartItems.length });
    } else closeMessage(messageApi, data.msg);
    setAdding(false);
  }

  return (
    <div className="sticky top-20">
      <h5 className="text-2xl font-semibold">{product.name}</h5>
      {/* <div className="mt-2"> */}
      <div className="flex  items-center mt-2">
        <span className="text-slate-400 font-semibold me-1">
          {selectedSize && selectedSize.price
            ? (
                selectedSize.price -
                (selectedSize.price * product.discount) / 100
              ).toFixed(2)
            : (
                product.price -
                (product.price * product.discount) / 100
              ).toFixed(2)}
          <del className="text-red-600" style={{ marginLeft: "5px" }}>
            {selectedSize && selectedSize.price
              ? selectedSize.price
              : product.price}
          </del>
        </span>

        <Rating
          name="half-rating-read"
          sx={{ marginLeft: "10px" }}
          defaultValue={product.ratings}
          precision={0.2}
          size="small"
          readOnly
        />
        {/* <ul className="list-none inline-block text-orange-400">
          <li className="inline">
            <i className="mdi mdi-star text-lg"></i>
          </li>
          <li className="inline">
            <i className="mdi mdi-star text-lg"></i>
          </li>
          <li className="inline">
            <i className="mdi mdi-star text-lg"></i>
          </li>
          <li className="inline">
            <i className="mdi mdi-star text-lg"></i>
          </li>
          <li className="inline">
            <i className="mdi mdi-star text-lg"></i>
          </li>
          <li className="inline text-slate-400 font-semibold">4.8 (45)</li>
        </ul> */}
      </div>

      <div className="mt-4">
        <h5 className="text-lg font-semibold">Overview :</h5>
        <p className="text-slate-400 mt-2">{product.description}</p>

        {/* <ul className="list-none text-slate-400 mt-4">
          <li className="mb-1 flex ms-0">
            <i className="mdi mdi-check-circle-outline text-orange-500 text-xl me-2"></i>{" "}
            Digital Marketing Solutions for Tomorrow
          </li>
          <li className="mb-1 flex ms-0">
            <i className="mdi mdi-check-circle-outline text-orange-500 text-xl me-2"></i>{" "}
            Our Talented & Experienced Marketing Agency
          </li>
          <li className="mb-1 flex ms-0">
            <i className="mdi mdi-check-circle-outline text-orange-500 text-xl me-2"></i>{" "}
            Create your own skin to match your brand
          </li>
        </ul> */}
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
        <div className="flex items-center">
          <h5 className="text-lg font-semibold me-2">Colors:</h5>
          <div className="space-x-2">
            {product.variants.map((variant, idx) => {
              return (
                <button
                  key={idx}
                  //   href=""
                  onClick={() => setVariant(variant, idx)}
                  style={{ background: variant.color }}
                  className={`size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800  inline-flex align-middle ${
                    ((!selectedColor && idx === 0) ||
                      selectedColor === variant.color) &&
                    "ring-orange-500 dark:ring-orange-500"
                  }`}
                  title={variant.color}
                ></button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center">
          <h5 className="text-lg font-semibold me-2">Size:</h5>
          <div className="space-x-1">
            {sizes &&
              sizes.length > 0 &&
              sizes.map((sz, idx) => {
                const size = sz.size;
                return (
                  <button
                    key={size + idx}
                    onClick={() => setSelectedSize(sz)}
                    href=""
                    className={`size-9 inline-flex items-center justify-center tracking-wide 
                    align-middle text-base text-center rounded-md  hover:bg-orange-500
                     text-orange-500 hover:text-white  ${
                       selectedSize.size === size
                         ? "text-white bg-orange-500"
                         : "bg-orange-500/5 "
                     }`}
                  >
                    {size}
                  </button>
                );
              })}
          </div>
        </div>

        <div className="flex items-center">
          <h5 className="text-lg font-semibold me-2">Quantity:</h5>
          <div className="qty-icons ms-3 space-x-0.5">
            <button
              onClick={() => decrements()}
              className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white minus"
            >
              -
            </button>
            <input
              min="1"
              name="quantity"
              value={count}
              onChange={() => {}}
              type="number"
              className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white pointer-events-none w-16 ps-4 quantity"
            />
            <button
              onClick={() => increments()}
              className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white plus"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 space-x-1">
        <Link
          href=""
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-orange-500 text-white rounded-md mt-2"
        >
          Shop Now
        </Link>
        <button
          onClick={addToCart}
          disabled={adding}
          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
