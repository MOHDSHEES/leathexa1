import React from "react";
import MainLayout from "../../components/layout/mainLayout";
import Cart from "../../components/cart/cart";

export const metadata = {
  title: "Cart",
};

export default function ShopCart() {
  return (
    <>
      <MainLayout>
        <Cart />
      </MainLayout>
    </>
  );
}
