import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import Usertab from "../components/user-tab";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ScrollToTop from "../components/scroll-to-top";

import {FiEdit, FiMapPin, FiPhone} from '../assets/icons/vander'

export default function UserBilling(){
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
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <h6 className="text-slate-400 mb-0">The following addresses will be used on the checkout page by default.</h6>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                                <div className="">
                                    <div className="flex items-center mb-4 justify-between">
                                        <h5 className="text-xl font-medium">Billing Address:</h5>
                                        <Link href="#" className="text-orange-500 text-lg"><FiEdit className="size-4"></FiEdit></Link>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-lg font-medium mb-2">Jesus Zamora</p>

                                        <ul className="list-none">
                                            <li className="flex ms-0">
                                                <FiMapPin className="size-4 me-2 mt-1"></FiMapPin>
                                                <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br/> Houston, USA 485</p>
                                            </li>

                                            <li className="flex ms-0 mt-1">
                                                <FiPhone className="size-4 me-2 mt-1"></FiPhone>
                                                <p className="text-slate-400">+123 897 5468</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="">
                                    <div className="flex items-center mb-4 justify-between">
                                        <h5 className="text-xl font-medium">Shipping Address:</h5>
                                        <Link href="#" className="text-orange-500 text-lg"><FiEdit className="size-4"></FiEdit></Link>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-lg font-medium mb-2">Jesus Zamora</p>

                                        <ul className="list-none">
                                            <li className="flex ms-0">
                                                <FiMapPin className="size-4 me-2 mt-1"></FiMapPin>
                                                <p className="text-slate-400">C/54 Northwest Freeway, Suite 558, <br/> Houston, USA 485</p>
                                            </li>

                                            <li className="flex ms-0 mt-1">
                                                <FiPhone className="size-4 me-2 mt-1"></FiPhone>
                                                <p className="text-slate-400">+123 897 5468</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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