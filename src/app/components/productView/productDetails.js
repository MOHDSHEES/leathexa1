"use client";
import React, { useContext, useEffect, useState } from "react";
import ProductImages from "./productImages";
import ProductDescription from "./product-description";
import { MyContext } from "@/src/context";
import userActivityAnalytics from "../axiosRoutes/userActivityAnalytics";

const ProductDetails = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.variants[0].color);
  const { user } = useContext(MyContext);
  const [productImages, setProductImages] = useState(
    product.variants[0].images
  );
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  useEffect(() => {
    setProductImages(product.variants[selectedVariantIdx].images);
  }, [selectedVariantIdx]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      userActivityAnalytics(
        user && user._id ? user._id : null,
        "product_view",
        {
          product: product._id,
        }
      );
    }, 2000); // 2 seconds delay

    // Clean up the timeout if component unmounts or rerenders
    return () => clearTimeout(debounceTimeout);
  }, []);

  return (
    <div className="grid md:grid-cols-9 grid-cols-1 gap-6 items-start ">
      <div className="md:col-span-4">
        <ProductImages images={productImages} selectedColor={selectedColor} />
      </div>
      <div className="md:col-span-5" style={{ height: "100%" }}>
        <ProductDescription
          product={product}
          selectedColor={selectedColor}
          setSelectedVariantIdx={setSelectedVariantIdx}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
