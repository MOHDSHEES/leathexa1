import React from "react";
import Link from "next/link";
import Image from "next/image";

import BackToHome from "../components/back-to-home";
import Switcher from "../components/switcher";

export default function Signup(){
    return(
        <>
       <section className="md:h-screen py-36 flex items-center bg-orange-500/10 dark:bg-orange-500/20 bg-[url('/images/hero/bg-shape.png')] bg-center bg-no-repeat bg-cover">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                            <div className="relative md:shrink-0">
                                <Image src='/images/signup.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="h-full w-full object-cover md:h-[44rem]" alt=""/>
                            </div>

                            <div className="p-8 lg:px-20">
                                <div className="text-center">
                                    <Link href="/">
                                        <Image src='/images/logo-dark.png' width={114} height={22} className="mx-auto block dark:hidden" alt=""/>
                                        <Image src='/images/logo-light.png' width={114} height={22} className="mx-auto hidden dark:block" alt=""/>
                                    </Link>
                                </div>

                                <form className="text-start lg:py-20 py-8">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="RegisterName">Your Name:</label>
                                            <input id="RegisterName" type="text" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Harry"/>
                                        </div>
        
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="name@example.com"/>
                                        </div>
        
                                        <div className="mb-4">
                                            <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                            <input id="LoginPassword" type="password" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Password:"/>
                                        </div>
        
                                        <div className="mb-4">
                                            <div className="flex items-center w-full mb-0">
                                                <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&C"/>
                                                <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">I Accept <Link href="" className="text-orange-500">Terms And Condition</Link></label>
                                            </div>
                                        </div>
        
                                        <div className="mb-4">
                                            <button type="submit" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md w-full"><Link href="/signup-success">Register</Link></button>
                                        </div>
        
                                        <div className="text-center">
                                            <span className="text-slate-400 me-2">Already have an account ? </span> <Link href="/login" className="text-black dark:text-white font-bold inline-block">Sign in</Link>
                                        </div>
                                    </div>
                                </form>

                                <div className="text-center">
                                    <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Cartzio. Develop  with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <BackToHome/>
        <Switcher/>
        </>
    )
}