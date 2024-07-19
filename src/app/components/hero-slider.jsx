'use client'
import React from "react"
import Link from "next/link"

import { Carousel } from 'react-responsive-carousel';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'

export default function HeroSlider(){
    return(
        <section className="swiper-slider-hero relative block h-screen" id="home">
            <div className="swiper-container absolute end-0 top-0 w-full h-full">
                <Carousel className="swiper-wrapper h-full" autoPlay={true} infiniteLoop={true} interval={3000} transitionTime={1500} showThumbs={false}>
                    <div className="swiper-slide flex items-center overflow-hidden h-screen">
                        <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image bg-red-600/5 flex items-center bg-[url('/images/hero/bg1.png')] md:bg-top bg-center bg-no-repeat bg-cover;">
                            <div className="container relative">
                                <div className="grid md:grid-cols-2 grid-cols-1 text-start">
                                    <div>
                                        <span className="uppercase font-semibold text-lg">New Collection</span>
                                        <h4 className="md:text-6xl text-4xl md:leading-normal leading-normal font-bold my-3">The Gift Suite</h4>
                                        <p className="text-lg">Our latest collection of essential basics.</p>
                
                                        <div className="mt-6">
                                            <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-slate-900 dark:bg-orange-500 text-white rounded-md">Shop Now <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide flex items-center overflow-hidden">
                        <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image bg-blue-600/5 flex items-center bg-[url('/images/hero/bg2.png')] md:bg-top bg-center bg-no-repeat bg-cover;">
                            <div className="container relative">
                                <div className="grid md:grid-cols-2 grid-cols-1 text-start">
                                    <div>
                                        <span className="uppercase font-semibold text-lg">Christmas Sale 2023</span>
                                        <h4 className="md:text-6xl text-4xl md:leading-normal leading-normal font-bold my-3">End of Season Sale</h4>
                                        <p className="text-lg">Our latest collection of essential basics.</p>
                
                                        <div className="mt-6">
                                            <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-slate-900 dark:bg-orange-500 text-white rounded-md">View Collection <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </Carousel>

                <div className="swiper-pagination"></div>
            </div>
        </section>
    )
}