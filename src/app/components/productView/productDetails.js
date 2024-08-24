"use client";
import React, { useEffect, useState } from "react";
import ProductImages from "./productImages";
import ProductDescription from "./product-description";

const ProductDetails = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.variants[0].color);
  const [productImages, setProductImages] = useState(
    product.variants[0].images
  );
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  useEffect(() => {
    setProductImages(product.variants[selectedVariantIdx].images);
  }, [selectedVariantIdx]);

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
