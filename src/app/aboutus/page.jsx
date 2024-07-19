import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ScrollToTop from "../components/scroll-to-top";

import { FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter,} from "../assets/icons/vander"
import { promiseData, teamData } from "../data/data";
import About from "../components/about";
import Image from "next/image";

export default function AboutUs(){
    return(
        <>
        <Navbar navClass="defaultscroll is-sticky" navlight={true}/>
        <section className="relative table w-full items-center py-36 bg-[url('/images/hero/pages.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-3 text-4xl leading-normal tracking-wider font-semibold text-white">About Us</h3>

                    <p className="text-slate-400 text-lg max-w-xl mx-auto">Believe in Craftsmanship and Luxurious Design.</p>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">About</li>
                </ul>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                        <Image src='/images/ab2.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded-b-full shadow-md dark:shadow-gray-800" alt=""/>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
                        <h6 className="text-orange-500 font-semibold uppercase text-lg">Founder</h6>
                        <h5 className="font-semibold text-3xl leading-normal my-4">Maria J. Rose</h5>
                        <p className="text-slate-400 max-w-xl">Donec non interdum nisl. Sed ut est ac lacus sodales convallis. Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum magna porttitor porttitor suscipit. Praesent sit amet consequat eros. Quisque ullamcorper ornare vulputate. Nam sodales sem id diam sollicitudin, id lobortis tellus tincidunt.</p>

                        <ul className="list-none mt-6 space-x-3">
                            <li className="inline"><Link href="https://dribbble.com/shreethemes" target="_blank" className="inline-flex hover:text-orange-500 dark:hover:text-orange-500"><FiDribbble className="size-5 align-middle" title="dribbble"></FiDribbble></Link></li>
                            <li className="inline"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="inline-flex hover:text-orange-500 dark:hover:text-orange-500"><FiLinkedin className="size-5 align-middle" title="Linkedin"></FiLinkedin></Link></li>
                            <li className="inline"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="inline-flex hover:text-orange-500 dark:hover:text-orange-500"><FiFacebook className="size-5 align-middle" title="facebook"></FiFacebook></Link></li>
                            <li className="inline"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="inline-flex hover:text-orange-500 dark:hover:text-orange-500"><FiInstagram className="size-5 align-middle" title="instagram"></FiInstagram></Link></li>
                            <li className="inline"><Link href="https://twitter.com/shreethemes" target="_blank" className="inline-flex hover:text-orange-500 dark:hover:text-orange-500"><FiTwitter className="size-5 align-middle" title="twitter"></FiTwitter></Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 justify-center text-center mb-4">
                    <h6 className="text-orange-500 font-semibold uppercase text-lg">Our Promise</h6>
                    <h5 className="font-semibold text-3xl leading-normal my-4">We Designed and <br/> Developed Products</h5>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                    {promiseData.map((item,index)=>{
                        return(
                            <div className="p-6 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-md bg-white dark:bg-slate-900" key={index}>
                                <i className={`text-4xl text-orange-500 ${item.icon}`}></i>

                                <div className="content mt-6">
                                    <Link href="" className="title h5 text-xl font-medium hover:text-orange-500">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                    
                                    <div className="mt-4">
                                        <Link href="" className="text-orange-500">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 justify-center text-center mb-4">
                    <h6 className="text-orange-500 font-semibold uppercase text-lg">Our Minds</h6>
                    <h5 className="font-semibold text-3xl leading-normal my-4">Meet Our Team Members</h5>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    {teamData.map((item,index)=>{
                        return(
                            <div className="lg:col-span-3 md:col-span-6" key={index}>
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="" alt=""/>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
                                            <li className="inline"><Link href="" className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"><FiFacebook className="h-4 w-4"></FiFacebook></Link></li>
                                            <li className="inline"><Link href="" className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"><FiInstagram className="h-4 w-4"></FiInstagram></Link></li>
                                            <li className="inline"><Link href="" className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"><FiLinkedin className="h-4 w-4"></FiLinkedin></Link></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link href="" className="text-lg font-semibold hover:text-orange-500 duration-500">{item.name}</Link>
                                        <p className="text-slate-400">{item.possition}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        <ScrollToTop/>
        </>
    )
}