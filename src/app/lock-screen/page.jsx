import React from "react";
import Link from "next/link";
import Image from "next/image"

import Switcher from "../components/switcher";
import BackToHome from "../components/back-to-home"

export default function LockScreen(){
    return(
        <>
        <section className="md:h-screen py-36 flex items-center bg-[url('/images/hero/pages.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="container relative">
                    <div className="flex justify-center">
                        <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <div className="text-center">
                                <Image src='/images/client/16.jpg' width={112} height={112} className="mx-auto h-28 w-28 rounded-full shadow dark:shadow-gray-800" alt=""/>
                                <h5 className="mb-6 mt-4 text-xl font-semibold">Jesus Zamora</h5>
                            </div>
                            <form>
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                        <input id="LoginPassword" type="password" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" required="" placeholder="Password:"/>
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <div className="flex items-center mb-0">
                                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe"/>
                                            <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                        </div>
                                        <p className="text-slate-400 mb-0"><Link href="/forgot-password" className="text-slate-400">Forgot password ?</Link></p>
                                    </div>

                                    <div className="">
                                        <input type="submit" className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-md w-full" value="Login / Sign in"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher/>
            <BackToHome/>
        </>
    )
}