"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductImages({ images }) {
  let [activeImage, setActiveImage] = useState(0);

  const imageShow = (index) => {
    setActiveImage(index);
  };
  return (
    <ul className="product-imgs flex list-none">
      <li className="w-1/6">
        <ul className="img-select list-none">
          {images.map((item, index) => {
            return (
              <li className="p-px" key={index}>
                <Link href="#" scroll={false}>
                  <Image
                    src={item}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="shadow dark:shadow-gray-800 w-full h-auto"
                    alt=""
                    onClick={() => imageShow(index)}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </li>

      <li className="img-display shadow dark:shadow-gray-800 m-px w-5/6">
        <div className="img-showcase flex w-full duration-500">
          <Image
            src={images[activeImage]}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="min-w-full"
            alt=""
          />
          {/* {activeImage === 1 && (
            <Image
              src="/images/shop/mens-jecket.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="min-w-full"
              alt=""
            />
          )} */}
          {/* {activeImage === 2 && (
            <Image
              src="/images/shop/mens-jecket-3.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="min-w-full"
              alt=""
            />
          )} */}
          {/* {activeImage === 3 && (
            <Image
              src="/images/shop/mens-jecket-left.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="min-w-full"
              alt=""
            />
          )} */}
          {/* {activeImage === 4 && (
            <Image
              src="/images/shop/mens-jecket-back.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="min-w-full"
              alt=""
            />
          )} */}
          {/* {activeImage === 5 && (
            <Image
              src="/images/shop/mens-jecket-4.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="min-w-full"
              alt=""
            />
          )} */}
        </div>
      </li>
    </ul>
  );
}
