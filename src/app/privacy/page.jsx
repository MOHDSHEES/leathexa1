import React from "react";
import Link from "next/link";
import Navbar from '../components/navbar';
import {termsData} from '../data/data'
import Footer from '../components/footer'
import Switcher from '../components/switcher'
import ScrollToTop from "../components/scroll-to-top";

export default function Privacy(){
    return(
        <>
        <Navbar/>
        <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-semibold">Privacy Policy</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><Link href="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><Link href="">Utility</Link></li>
                    <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold text-orange-500" aria-current="page">Privacy</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <h5 className="text-xl font-semibold mb-4">Overview :</h5>
                            <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                            <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
                            <p className="text-slate-400">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                        
                            <h5 className="text-xl font-semibold mb-4 mt-8">We use your information to :</h5>
                            <ul className="list-none text-slate-400 mt-4">
                                {termsData.map((item,index)=>{
                                    return(
                                        <li className="flex mt-2 ms-0" key={index}><i className="mdi mdi-chevron-right text-orange-500 text-lg align-middle me-2"></i>{item}</li>
                                    )
                                })}
                            </ul>

                            <h5 className="text-xl font-semibold mb-4 mt-8">Information Provided Voluntarily :</h5>
                            <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>

                            <div className="mt-8">
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-md">Print</Link>
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