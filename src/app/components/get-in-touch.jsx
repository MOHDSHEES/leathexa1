import React from "react";
import Link from "next/link";
import {FiPhone} from '../assets/icons/vander'

export default function GetInTouch(){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Have Question ? Get in touch!</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
            
                <div className="mt-6">
                    <Link href="/helpcenter-support" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md me-2 mt-2"><FiPhone className="size-4 me-1"></FiPhone> Contact us</Link>
                </div>
            </div>
        </div>
    )
}