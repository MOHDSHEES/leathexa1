import React, { Suspense } from "react";
import Link from "next/link";
import Tagline from "../../components/tagline";
import ProductDetail from "../../components/productView/product-detail";
import Navbar from "../../components/navbar/navbar";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/productModel";
import ProductImages from "../../components/productView/productImages";
import ProductReviewTab from "../../components/productView/productReview/product-review-tab";
import NewArrivalItem from "../../components/productView/newArrival";
import Footer from "../../components/footer";
import EmptyProduct from "../../components/productView/emptyProduct";
import Loading from "../../components/productView/loadingProduct";

async function getDetails(params) {
  await dbConnect();
  try {
    const data = await Product.findOne({ _id: params.id });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return null;
  }
}

export default async function ProductDetails({ params }) {
  const product = await getDetails(params);
  if (!product) return <EmptyProduct />;
  return (
    <>
      <Tagline />
      <Navbar navClass="defaultscroll is-sticky tagline-height" />
      {/* <MainLayout> */}

      <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">
              Mens Brown Jecket
            </h3>
          </div>

          <div className="relative mt-3">
            <ul className="tracking-[0.5px] mb-0 inline-block">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
                <Link href="/">Cartzio</Link>
              </li>
              <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
                <Link href="/shop-grid">Store</Link>
              </li>
              <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold text-orange-500"
                aria-current="page"
              >
                Mens Brown Jecket
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Suspense fallback={<Loading />}>
        <section className="relative md:py-24 py-16">
          <div className="container relative">
            {/* items-center */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-start ">
              <div className="">
                <ProductImages images={product.images} />
              </div>

              <ProductDetail product={product} />
            </div>

            <ProductReviewTab product={product} />
          </div>

          <NewArrivalItem />
        </section>
      </Suspense>
      {/* </MainLayout> */}
      <Footer />
    </>
  );
}
