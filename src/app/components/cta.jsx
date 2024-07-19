import React from "react";
import Link from "next/link";

export default function Cta(){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1">
                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800 py-20 px-4 md:px-10 bg-orange-600 bg-[url('/images/hero/bg2.png')] bg-no-repeat bg-cover">
                    <div className="absolute inset-0 bg-[url('/images/hero/bg-shape.png')] bg-center bg-no-repeat bg-cover"></div>
                    <div className="grid md:grid-cols-2 grid-cols-1 items-end gap-6 relative z-1">
                        <h3 className="text-4xl leading-normal tracking-wide font-bold text-white">Sale Outlet <br/> Up to 75% Off</h3>
                        <div className="md:text-end">
                            <Link href="/sale" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-orange-500 rounded-md">Offer Grab Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}