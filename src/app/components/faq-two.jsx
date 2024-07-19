'use client'
import React, { useState } from "react";

import {FiChevronUp} from '../assets/icons/vander';

import {faqData} from '../data/data';

export default function FaqTwo(){
    let [activeIndex, setActiveIndex] = useState(1)
    return(
        <>
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
        </>
    )
}