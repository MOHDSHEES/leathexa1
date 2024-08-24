import React, { Suspense } from "react";
import ProductsPage from "../../components/products/productsPage";
import BreadCrumb from "../../components/breadCrumb";
import MainLayout from "../../components/layout/mainLayout";
import Loading from "../../components/productView/loadingProduct";

export default async function CategoriesProducts({ params, searchParams }) {
  return (
    <MainLayout>
      <BreadCrumb />
      <Suspense fallback={<Loading />}>
        <ProductsPage params={params} searchParams={searchParams} />
      </Suspense>
    </MainLayout>
  );
}
