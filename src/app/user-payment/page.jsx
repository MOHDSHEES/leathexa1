import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import Usertab from "../components/user-tab";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import AddPaymentBtn from "../components/add-payment-btn";
import ScrollToTop from "../components/scroll-to-top";

import { paymentMethod } from "../data/data";

import {FiTrash2} from '../assets/icons/vander'

export default function UserPayment(){
    return(
        <>
        <Navbar navClass="defaultscroll is-sticky"/>
        <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
            <div className="md:container container-fluid relative">
                <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-[url('/images/hero/pages.jpg')] bg-center bg-no-repeat bg-cover"></div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="md:flex">
                    <Usertab/>

                    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
                        <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <div className="p-6 md:flex justify-between items-center border-b border-gray-100 dark:border-gray-700">
                                <div className="mb-4 md:mb-0">
                                    <h5 className="text-xl font-semibold">Current Plan</h5>
                                </div>
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md">Switch to Annual Plan</Link>
                            </div>

                            <div className="p-6">
                                <h5 className="text-2xl font-semibold">$18/Monthly</h5>
                                <p className="text-slate-400 mt-2">Your next monthly charge of $18 will be applied to your primary payment method on July 20, 2022.</p>
                            </div>
                        </div>

                        <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-xl font-semibold">Payment Methods</h5>
                                <p className="text-slate-400 mt-2">Primary payment method is used by default</p>
                            </div>

                            <div className="px-6">
                                <ul>
                                    {paymentMethod.map((item,index) =>{
                                        return(
                                            <li className="flex justify-between items-center py-6 border-t border-gray-100 dark:border-gray-700" key={index}>
                                                <div className="flex items-center">
                                                    <Image src={item.image} width={48} height={30} className="rounded shadow dark:shadow-gray-800 w-12" alt=""/>

                                                    <div className="ms-3">
                                                        <p className="font-semibold">{item.name}</p>
                                                        <p className="text-slate-400 text-sm">{item.expires}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <Link href="" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white rounded-full"><FiTrash2 className="h-4 w-4"></FiTrash2></Link>
                                                </div>
                                            </li>
                                        )
                                    })}

                                    <AddPaymentBtn/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        <ScrollToTop/>
        </>
    )
}