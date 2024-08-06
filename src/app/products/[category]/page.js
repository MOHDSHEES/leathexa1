import React from "react";
import Product from "@/models/productModel";
import dbConnect from "@/lib/mongoose";
import Products from "../../components/products/products";

async function getProducts(params) {
  await dbConnect();
  const data = await Product.find(params, {
    name: 1,
    price: 1,
    status: 1,
    discount: 1,
    ratings: 1,
    variants: 1,
    tags: 1,
    images: { $slice: 1 },
  })
    .sort({ createdAt: -1 })
    .limit(15);
  return JSON.parse(JSON.stringify(data));
}

export default async function CategoriesProducts({ params }) {
  // searchParams
  // const { category } = searchParams;
  const products = await getProducts({ gender: params.category });
  // const params = useSearchParams();
  // console.log(products);
  return <>{<Products data={products} />}</>;
}
