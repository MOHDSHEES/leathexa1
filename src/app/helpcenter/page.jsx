import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import FaqAbout from "../components/faq-about";
import GetInTouch from "../components/get-in-touch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ScrollToTop from "../components/scroll-to-top";

import {FiHelpCircle} from '../assets/icons/vander'

export default function Helpcenter(){
    return(
        <>
       <Navbar navClass="defaultscroll is-sticky" navlight={true}/>

        <section className="relative table w-full py-36 bg-[url('/images/hero/pages.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-6 text-4xl leading-normal tracking-wider font-semibold text-white">Hello ! <br/> How can we help you?</h3>

                    <div className="text-center subcribe-form mt-4 pt-2">
                        <form className="relative mx-auto max-w-xl">
                            <input type="text" id="help" name="name" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700" placeholder="Search your questions or topic..."/>
                            <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-orange-500 text-white rounded-full">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Helpcenter</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <FaqAbout/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Get Started</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-6">
                    <div className="flex">
                        <FiHelpCircle className="fea icon-ex-md text-orange-500 me-3 size-5 mt-1"></FiHelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-xl font-semibold">How our <span className="text-orange-500">Cartzio</span> work ?</h5>
                            <p className="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        </div>
                    </div>
                    
                    <div className="flex">
                        <FiHelpCircle className="fea icon-ex-md text-orange-500 me-3 size-5 mt-1"></FiHelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-xl font-semibold"> What is the main process open account ?</h5>
                            <p className="text-slate-400">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                        </div>
                    </div>
                    
                    <div className="flex">
                        <FiHelpCircle className="fea icon-ex-md text-orange-500 me-3 size-5 mt-1"></FiHelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-xl font-semibold"> How to make unlimited data entry ?</h5>
                            <p className="text-slate-400">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                        </div>
                    </div>
                    
                    <div className="flex">
                        <FiHelpCircle className="fea icon-ex-md text-orange-500 me-3 size-5 mt-1"></FiHelpCircle>
                        <div className="flex-1">
                            <h5 className="mb-2 text-xl font-semibold"> Is <span className="text-orange-500">Cartzio</span> safer to use with my account ?</h5>
                            <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                        </div>
                    </div>
                </div>
            </div>

        <GetInTouch/>
        </section>
        <Footer/>
        <Switcher/>
        <ScrollToTop/>
        </>
    )
}