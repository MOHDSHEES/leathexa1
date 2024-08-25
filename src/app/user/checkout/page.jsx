"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import MainLayout from "../../components/layout/mainLayout";
import Addresses from "../../components/checkout/address";
import CheckoutProducts from "../../components/checkout/checkoutProducts";
import { MyContext } from "@/src/context";
import axios from "axios";

export default function Checkout() {
  const { user, cartItems, setCartItems } = useContext(MyContext);
  const [items, setItems] = useState(cartItems);

  useEffect(() => {
    const getCartItems = async () => {
      const { data } = await axios.post("/api/cart/getItems", {
        userId: user._id,
      });
      if (data.status === 200) {
        setItems(data.data);
        setCartItems(data.data);
      }
    };

    getCartItems();
  }, []);
  return (
    <>
      <MainLayout>
        {/* <Navbar navClass="defaultscroll is-sticky"/> */}
        <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
          <div className="container relative">
            <div className="grid grid-cols-1 mt-14">
              <h3 className="text-3xl leading-normal font-semibold">Fashion</h3>
            </div>

            <div className="relative mt-3">
              <ul className="tracking-[0.5px] mb-0 inline-block">
                <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
                  <Link href="/">Cartzio</Link>
                </li>
                <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                  <i className="mdi mdi-chevron-right"></i>
                </li>
                <li
                  className="inline-block uppercase text-[13px] font-bold text-orange-500"
                  aria-current="page"
                >
                  Checkout
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative md:py-24 py-16">
          <div className="container relative">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
              <Addresses />
              <CheckoutProducts items={items} />
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
