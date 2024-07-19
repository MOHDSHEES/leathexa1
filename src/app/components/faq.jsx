'use client'
import React, { useState } from "react";
import { Link } from "react-scroll";

import { faqData } from "../data/data";

import {FiChevronUp} from '../assets/icons/vander'

export default function Faq(){
    let [activeIndex, setActiveIndex] = useState(1)
    let [activeIndex2, setActiveIndex2] = useState(1)
    let [activeIndex3, setActiveIndex3] = useState(1)
    let [activeIndex4, setActiveIndex4] = useState(1)

    return(
        <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                <div className="lg:col-span-4 md:col-span-5">
                    <div className="rounded-md shadow dark:shadow-gray-800 p-6 sticky top-20">
                        <ul className="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                            <li className="navbar-item p-0"><Link to="tech" spy={true} activeClass="active" smooth={true}
                                duration={500} className="text-base font-medium navbar-link">Buying Questions</Link></li>
                            <li className="navbar-item mt-3 p-0 ms-0"><Link spy={true} activeClass="active" smooth={true} duration={500} to="general" className="text-base font-medium navbar-link">General Questions</Link></li>
                            <li className="navbar-item mt-3 p-0 ms-0"><Link spy={true} activeClass="active" smooth={true} duration={500} to="payment" className="text-base font-medium navbar-link">Payments Questions</Link></li>
                            <li className="navbar-item mt-3 p-0 ms-0"><Link spy={true} activeClass="active" smooth={true} duration={500} to="support" className="text-base font-medium navbar-link">Support Questions</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-8 md:col-span-7">
                    <div id="tech">
                        <h5 className="text-2xl font-semibold">Buying Product</h5>

                        <div className="mt-6">
                            {faqData.map((item,index)=>{
                                return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-orange-500' : '' }`} onClick={()=>setActiveIndex(item.id)}>
                                                <span>{item.title}</span>
                                                <FiChevronUp className={`size-4 shrink-0 ${activeIndex === item.id ? '' :'rotate-180'}`}/>
                                            </button>
                                        </h2>
                                        <div className={ item.id === activeIndex ? '' : 'hidden' }>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div id="general" className="mt-8">
                        <h5 className="text-2xl font-semibold">General Questions</h5>

                        <div className="mt-6">
                            {faqData.map((item,index)=>{
                                return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${item.id === activeIndex2 ? 'bg-gray-50 dark:bg-slate-800 text-orange-500' : '' }`} onClick={()=>setActiveIndex2(item.id)}>
                                                <span>{item.title}</span>
                                                <FiChevronUp className={`size-4 shrink-0 ${activeIndex2 === item.id ? '' :'rotate-180'}`}/>
                                            </button>
                                        </h2>
                                        <div className={ item.id === activeIndex2 ? '' : 'hidden' }>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div id="payment" className="mt-8">
                        <h5 className="text-2xl font-semibold">Payments Questions</h5>

                        <div className="mt-6">
                            {faqData.map((item,index)=>{
                                return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${item.id === activeIndex4 ? 'bg-gray-50 dark:bg-slate-800 text-orange-500' : '' }`} onClick={()=>setActiveIndex4(item.id)}>
                                                <span>{item.title}</span>
                                                <FiChevronUp className={`size-4 shrink-0 ${activeIndex4 === item.id ? '' :'rotate-180'}`}/>
                                            </button>
                                        </h2>
                                        <div className={ item.id === activeIndex4 ? '' : 'hidden' }>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div id="support" className="mt-8">
                        <h5 className="text-2xl font-semibold">Support Questions</h5>

                        <div className="mt-6">
                            {faqData.map((item,index)=>{
                                return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${item.id === activeIndex3 ? 'bg-gray-50 dark:bg-slate-800 text-orange-500' : '' }`} onClick={()=>setActiveIndex3(item.id)}>
                                                <span>{item.title}</span>
                                                <FiChevronUp className={`size-4 shrink-0 ${activeIndex3 === item.id ? '' :'rotate-180'}`}/>
                                            </button>
                                        </h2>
                                        <div className={ item.id === activeIndex3 ? '' : 'hidden' }>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}