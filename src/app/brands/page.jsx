import React from "react";
import Link from "next/link";
import { brand } from "../data/data";
import MainLayout from "../components/layout/mainLayout";

export default function Brands() {
  return (
    <>
      <MainLayout>
        <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
          <div className="container relative">
            <div className="grid grid-cols-1 text-center mt-14">
              <h3 className="text-3xl leading-normal font-semibold">
                Our Brands
              </h3>
            </div>
          </div>

          <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
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
                Brands
              </li>
            </ul>
          </div>
        </section>

        <section className="relative md:py-24 py-16">
          <div className="container relative">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {brand.map((item, index) => {
                return (
                  <div className="" key={index}>
                    <ul className="list-none space-y-2">
                      {item.name.map((el, index) => {
                        return (
                          <li key={index} className="ms-0">
                            <Link href="" className="text-slate-400 text-lg">
                              <i className="mdi mdi-shopping-outline text-orange-500 me-2"></i>
                              {el}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
