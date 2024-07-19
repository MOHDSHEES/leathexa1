import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Store from "../components/store";
import ScrollToTop from "../components/scroll-to-top";

export default function OurStore(){
    return(
        <>
        <Navbar navClass="defaultscroll is-sticky"/>
        <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Our Store</h3>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><Link href="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold text-orange-500" aria-current="page">Stores</li>
                </ul>
            </div>
        </section>
        <Store/>
        <Footer/>
        <Switcher/>
        <ScrollToTop/>
        </>
    )
}