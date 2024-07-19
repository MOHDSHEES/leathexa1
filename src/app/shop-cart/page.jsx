import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import MobileApp from "../components/mobile-app";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Counter from "../components/counter";

import { cartData } from "../data/data";
import ScrollToTop from "../components/scroll-to-top";

export default function ShopCart(){
    return(
        <>
         <Navbar navClass="defaultscroll is-sticky"/>
        <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Fashion</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><Link href="/">Cartzio</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold text-orange-500" aria-current="page">SHOPCART</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-1">
                    <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                        <table className="w-full text-start">
                            <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                <tr>
                                    <th scope="col" className="p-4 w-4"></th>
                                    <th scope="col" className="text-start p-4 min-w-[220px]">Product</th>
                                    <th scope="col" className="p-4 w-24 min-w-[100px]">Price</th>
                                    <th scope="col" className="p-4 w-56 min-w-[220px]">Qty</th>
                                    <th scope="col" className="p-4 w-24 min-w-[100px]">Total($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData.map((item,index) =>{
                                    return(
                                        <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800" key={index}>
                                            <td className="p-4"><Link href=""><i className="mdi mdi-window-close text-red-600"></i></Link></td>
                                            <td className="p-4">
                                                <span className="flex items-center">
                                                    <Image src={item.image} width={48} height={62} className="rounded shadow dark:shadow-gray-800 w-12" alt=""/>
                                                    <span className="ms-3">
                                                        <span className="block font-semibold">{item.name}</span>
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="p-4 text-center">$ {item.price}</td>
                                            <td className="p-4 text-center">
                                                <Counter qtn={item.qtn} total="" />
                                            </td>
                                            <td className="p-4  text-end">$ {item.price * item.qtn}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                        <div className="lg:col-span-9 md:order-1 order-3">
                            <div className="space-x-1">
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-orange-500 text-white rounded-md mt-2">Shop Now</Link>
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white mt-2">Add to Cart</Link>
                            </div>
                        </div>

                        <div className="lg:col-span-3 md:order-2 order-1">
                            <ul className="list-none shadow dark:shadow-gray-800 rounded-md">
                                <li className="flex justify-between p-4">
                                    <span className="font-semibold text-lg">Subtotal :</span>
                                    <span className="text-slate-400">$ 1500</span>
                                </li>
                                <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                                    <span className="font-semibold text-lg">Taxes :</span>
                                    <span className="text-slate-400">$ 150</span>
                                </li>
                                <li className="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
                                    <span className="font-semibold text-lg">Total :</span>
                                    <span className="font-semibold">$ 1650</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <MobileApp/>
        </section>
        <Footer/>
        <Switcher/>
        <ScrollToTop/>
        </>
    )
}