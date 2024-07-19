import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";
import ScrollToTop from "@/app/components/scroll-to-top";

import { blogData, social } from "../../data/data";
import {FiCalendar, FiClock} from '../../assets/icons/vander'

export default function BlogDetail({params}){
    let id = params.id
    let data = blogData.find((blog) => blog.id === parseInt(id))
    return(
        <>
        <Navbar navClass="defaultscroll is-sticky" navlight={true}/>
        <section className="relative table w-full items-center py-36 bg-[url('/images/hero/pages.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">{data?.title}</h3>

                    <ul className="list-none mt-6">
                        <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Author :</span> <span className="block">Cartzio</span></li>
                        <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Date :</span> <span className="block">{data?.date}</span></li>
                        <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Time :</span> <span className="block">8 Min Read</span></li>
                    </ul>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Cartzio</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Blog Detail</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">

                            <Image src={data?.image} width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto'}} alt=""/>

                            <div className="p-6">
                                <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                <p className="text-slate-400 italic border-x-4 border-orange-500 rounded-ss-xl rounded-ee-xl mt-3 p-3">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                <p className="text-slate-400 mt-3">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                            <form className="mt-8">
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-left">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :"/>
                                        </div>
                                    </div>
    
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-left">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-left">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="mt-3 w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 h-28" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md w-full">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6">
                        <div className="sticky top-20">
                            <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                            <div className="text-center mt-8">
                                <Image src='/images/client/05.jpg' width={80} height={80} className="h-20 w-20 mx-auto rounded-full shadow mb-4" alt=""/>

                                <Link href="" className="text-lg font-medium hover:text-orange-500 transition-all duration-500 ease-in-out h5">Cristina Romsey</Link>
                                <p className="text-slate-400">Content Writer</p>
                            </div>

                            <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                            <ul className="list-none text-center mt-8 space-x-0.5">
                                {social.map((item,index)=>{
                                    let Icon = item
                                    return(
                                        <li className="inline" key={index}><Link href="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-500 hover:text-white hover:bg-orange-500"><Icon className="h-4 w-4"></Icon></Link></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 mb-6 text-center">
                    <h3 className="font-semibold text-3xl leading-normal">Related Blogs</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 pt-6">
                    {blogData.slice(0,3).map((item,index)=>{
                        return(
                            <div className="group relative overflow-hidden" key={index}>
                                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="group-hover:scale-110 duration-500" alt=""/>
                                </div>

                                <div className="mt-6">
                                    <div className="flex mb-4">
                                        <span className="flex items-center text-slate-400 text-sm"><FiCalendar className="size-4 text-slate-900 dark:text-white me-1.5"></FiCalendar>{item.date}</span>
                                        <span className="flex items-center text-slate-400 text-sm ms-3"><FiClock className="size-4 text-slate-900 dark:text-white me-1.5"></FiClock>5 min read</span>
                                    </div>

                                    <Link href="/blog-detail" className="title text-lg font-semibold hover:text-orange-500 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-2">{item.desc}</p>

                                    <div className="mt-3">
                                        <span className="text-slate-400">by <Link href="" className="text-slate-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-500 font-medium">Cartzio</Link></span>
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