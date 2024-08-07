import React from "react";
// import ProductImages from "./productImages";
import ProductReviewTab from "./productReview/product-review-tab";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/productModel";
import NewArrivalItem from "./newArrival";
// import ProductDescription from "./product-description";
import EmptyProduct from "./emptyProduct";
import ProductDetails from "./productDetails";

async function getDetails(params) {
  await dbConnect();
  try {
    const data = await Product.findOne({ _id: params.id });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return null;
  }
}
export default async function ProductView({ params }) {
  const product = await getDetails(params);
  //   console.log(product);
  if (!product) return <EmptyProduct />;
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <ProductDetails product={product} />
        {/* items-center */}
        {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-start ">
          <div className="">
            <ProductImages images={product.images} />
          </div>

          <ProductDescription product={product} />
        </div> */}

        <ProductReviewTab product={product} />
      </div>

      <NewArrivalItem />
    </section>
  );
}
