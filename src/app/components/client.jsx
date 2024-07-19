'use client'
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { clientData } from "../data/data";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

export default function Client(){
    const settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
      };
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 justify-center text-center mb-6">
                <h5 className="font-semibold text-3xl leading-normal mb-4">Customer Reviews</h5>
                <p className="text-slate-400 max-w-xl mx-auto">Customers love our products and we always strive to please them all.</p>
            </div>

            <div className="flex justify-center relative mt-20">
                <div className="relative lg:w-1/3 md:w-1/2 w-full">
                    <div className="absolute -top-20 md:-start-24 -start-0">
                        <i className="mdi mdi-format-quote-open text-9xl opacity-5"></i>
                    </div>

                    <div className="absolute bottom-28 md:-end-24 -end-0">
                        <i className="mdi mdi-format-quote-close text-9xl opacity-5"></i>
                    </div>

                    <div className="tiny-single-item">
                        <TinySlider settings={settings}>
                            {clientData.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="text-center">
                                            <p className="text-lg text-slate-400 italic">{item.desc}</p>

                                            <div className="text-center mt-5">
                                                <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                </ul>

                                                <Image src={item.image} width={56} height={56} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt=""/>
                                                <h6 className="mt-2 font-medium">{item.name}</h6>
                                                <span className="text-slate-400 text-sm">{item.possition}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>
    )
}