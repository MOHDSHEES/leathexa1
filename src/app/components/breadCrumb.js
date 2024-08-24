import Link from "next/link";
import React from "react";

const BreadCrumb = () => {
  return (
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
              Shop Grid
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
