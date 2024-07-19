import React from "react";
import Link from "next/link";
import Image from "next/image"

import Navbar from "./components/navbar";
import Tagline from "./components/tagline";
import CtaOne from "./components/cta-one";
import Footer from "./components/footer";
import Switcher from "./components/switcher";

import ScrollToTop from "./components/scroll-to-top";
import {collections, newProduct} from './data/data'
import {FiHeart, FiEye, FiBookmark} from './assets/icons/vander'

export default function Home() {
  return (
    <>
    <Tagline/>
    <Navbar navClass="defaultscroll is-sticky tagline-height"/>
    <section className="relative md:flex table w-full items-center md:h-screen py-36 bg-emerald-500/5 md:bg-top bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/hero/bg3.png')"}}>
      <div className="container relative">
        <div className="grid grid-cols-1 justify-center">
            <div className="text-center">
                <span className="uppercase font-semibold text-lg">New Collection</span>
                <h4 className="md:text-6xl text-4xl md:leading-normal leading-normal font-bold my-3">The Gift Suite</h4>
                <p className="text-lg">Our latest collection of essential basics.</p>

                <div className="mt-6">
                    <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-slate-900 dark:bg-orange-500 text-white rounded-md">Shop Now <i className="mdi mdi-arrow-right"></i></Link>
                </div>
            </div>
        </div>
      </div>
    </section>

    <section className="relative md:py-24 py-16">
        <div className="container relative">
            <div className="grid grid-cols-1 justify-center text-center mb-6">
                <h5 className="font-semibold text-3xl leading-normal mb-4">Shop The Collections</h5>
                <p className="text-slate-400 max-w-xl mx-auto">Shop the latest products from the most popular collections</p>
            </div>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 pt-6 gap-6">
                {collections.map((item,index)=>{
                    return(
                        <Link href="" className="text-center hover:text-orange-500" key={index}>
                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded-full shadow dark:shadow-gray-800" alt=""/>
                            <span className="text-xl font-medium mt-3 block">{item.name}</span>
                        </Link>
                    )
                })}
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 justify-center text-center mb-6">
                <h5 className="font-semibold text-3xl leading-normal mb-4">New Arrival Products</h5>
                <p className="text-slate-400 max-w-xl mx-auto">Shop the latest products from the most popular collections</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
                {newProduct.slice(0,12).map((item, index)=>{
                    return(
                        <div className="group" key={index}>
                            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="group-hover:scale-110 duration-500" alt=""/>
        
                                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                    <Link href="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                </div>
        
                                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                                    <li><Link href="#" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiHeart className="size-4"></FiHeart></Link></li>
                                    <li className="mt-1 ms-0"><Link href="/shop-item-detail" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiEye className="size-4"></FiEye></Link></li>
                                    <li className="mt-1 ms-0"><Link href="#" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiBookmark className="size-4"></FiBookmark></Link></li>
                                </ul>

                                <ul className="list-none absolute top-[10px] start-4">
                                    {item.offer === true && (

                                        <li><Link href="#" className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                    )}
                                    {item.tag === 'New' && (
                                        <li><Link href="#" className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                    )}
                                    {item.tag === 'Featured' && (
                                        <li><Link href="#" className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{item.tag}</Link></li>
                                    )}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <Link href={`/product-detail-one/${item.id}`} className="hover:text-orange-500 text-lg font-medium">{item.name}</Link>
                                <div className="flex justify-between items-center mt-1">
                                    <p>{item.desRate} <del className="text-slate-400">{item.amount}</del></p>
                                    <ul className="font-medium text-amber-400 list-none">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <CtaOne/>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid items-end md:grid-cols-2 mb-6">
                <div className="md:text-start text-center">
                    <h5 className="font-semibold text-3xl leading-normal mb-4">Popular Items</h5>
                    <p className="text-slate-400 max-w-xl">Popular items in this week</p>
                </div>

                <div className="md:text-end hidden md:block">
                    <Link href="/shop-grid" className="text-slate-400 hover:text-orange-500">See More Items <i className="mdi mdi-arrow-right"></i></Link>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
                {newProduct.slice(12,16).map((item, index) =>{
                    return(
                        <div className="group" key={index}>
                            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="group-hover:scale-110 duration-500" alt=""/>
        
                                <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                    <Link href="/shop-cart" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">Add to Cart</Link>
                                </div>
        
                                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                                    <li><Link href="#" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiHeart className="size-4"></FiHeart></Link></li>
                                    <li className="mt-1 ms-0"><Link href="/shop-item-detail" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiEye className="size-4"></FiEye></Link></li>
                                    <li className="mt-1 ms-0"><Link href="#" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><FiBookmark className="size-4"></FiBookmark></Link></li>
                                </ul>

                                <ul className="list-none absolute top-[10px] start-4">
                                    {item.tag !== '' && (
                                        <li><Link href="#" className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">New</Link></li>
                                    )}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <Link href={`/product-detail-one/${item.id}`} className="hover:text-orange-500 text-lg font-medium">{item.name}</Link>
                                <div className="flex justify-between items-center mt-1">
                                    <p>{item.desRate}<del className="text-slate-400">{item.rate}</del></p>
                                    <ul className="font-medium text-amber-400 list-none">
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-cols-1 mt-6">
                <div className="text-center md:hidden block">
                    <Link href="/shop-grid" className="text-slate-400 hover:text-orange-500">See More Items <i className="mdi mdi-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    <Switcher/>
    <ScrollToTop/>
    </>
  );
}
