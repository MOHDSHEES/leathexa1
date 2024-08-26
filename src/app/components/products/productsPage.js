import React from "react";
import Product from "@/models/productModel";
import dbConnect from "@/lib/mongoose";
import Products from "./products";
import EmptyPage from "./emptyPage";

async function getProducts(params, limit, page = 1) {
  await dbConnect();
  const skip = (page - 1) * limit;
  const totalCount = await Product.countDocuments(params);
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
    .skip(skip)
    .limit(limit);
  return { data: JSON.parse(JSON.stringify(data)), total: totalCount };
}

export default async function ProductsPage({ params, searchParams }) {
  const limit = 4;
  const page = parseInt(searchParams.page) || 1;
  const category = params.category;
  const filteredUrl = {
    color: [],
    category: [],
    size: [],
    discount: null,
  };
  if (["mens", "womens"].includes(params.category)) {
    const filter = {
      gender: category,
    };
    if (searchParams.discount) {
      (filter.discount = {
        $gte: parseFloat(searchParams.discount.replace("%", "")),
      }),
        (filteredUrl.discount = searchParams.discount);
    }
    if (searchParams.color) {
      const colors = searchParams.color.split(",");
      filter["variants.color"] = { $in: colors };
      filteredUrl.color = colors;
    }
    if (searchParams.size) {
      const sizes = searchParams.size.split(",");
      filter["variants.sizes.size"] = { $in: sizes };
      filteredUrl.size = sizes;
    }
    if (searchParams.category) {
      const categories = searchParams.category.split(",");
      filter.category = { $in: categories };
      filteredUrl.category = categories;
    }
    const { data, total } = await getProducts(filter, limit, page);
    return (
      <Products
        data={data}
        category={category}
        total={total}
        limit={limit}
        filteredUrl={filteredUrl}
        page={page}
      />
    );
  }

  return <EmptyPage size="min-h-screen" />;
}
