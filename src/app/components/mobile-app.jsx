import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiSmartphone} from '../assets/icons/vander'

export default function MobileApp(){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                <div className="lg:col-span-5 md:col-span-6">
                    <Image src='/images/envelope.svg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="mx-auto d-block" alt=""/>
                </div>

                <div className="lg:col-span-7 md:col-span-6">
                    <span className="bg-orange-500/5 text-orange-500 text-xs font-bold px-2.5 py-0.5 rounded h-5">Mobile Apps</span>
                    <h4 className="font-semibold text-3xl leading-normal my-4">Available for your <br/> Smartphones</h4>
                    <p className="text-slate-400 max-w-xl mb-0">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                    <div className="my-5">
                        <Link href=""><Image src='/images/app.png' width={167} height={50} className="m-1 inline-block" alt=""/></Link>

                        <Link href=""><Image src='/images/playstore.png' width={167} height={50} className="m-1 inline-block" alt=""/></Link>
                    </div>

                    <div className="inline-block">
                        <div className="pt-4 flex items-center border-t border-gray-100 dark:border-gray-800">
                            <FiSmartphone className="me-2 text-orange-500 h-10 w-10"></FiSmartphone>
                            <div className="content">
                                <h6 className="text-base font-medium">Install app now on your cellphones</h6>
                                <Link href="" className="text-orange-500">Learn More <i className="mdi mdi-arrow-right"></i></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}