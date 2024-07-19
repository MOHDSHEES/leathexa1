import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import GetInTouch from "../components/get-in-touch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Faq from "../components/faq";
import ScrollToTop from "../components/scroll-to-top";

export default function HelpcenterFaq(){
    return(
        <>
        <Navbar navClass="defaultscroll is-sticky" navlight={true}/>
            <section className="relative table w-full py-36 bg-[url('/images/hero/pages.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">Frequently Asked Questions</h3>

                    </div>
                </div>
                
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Cartzio</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/helpcenter">Helpcenter</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">FAQs</li>
                    </ul>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
            <Faq/>

            <GetInTouch/>
        </section>
        <Footer/>
        <Switcher/>
        <ScrollToTop/>
        </>
    )
}