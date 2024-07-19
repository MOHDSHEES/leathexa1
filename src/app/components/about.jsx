'use client'
import React, { useState } from "react";
import Link from "next/link"
import Image from "next/image";

import {FiPhone, FiMapPin, FiX} from "../assets/icons/vander"

export default function About(){
    let [modal, setModal] = useState(false)
    return(
        <>
        <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                <div className="lg:col-span-5 md:col-span-6">
                    <Image src='/images/ab1.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded-t-full shadow-md dark:shadow-gray-800" alt=""/>
                </div>

                <div className="lg:col-span-7 md:col-span-6">
                    <div className="lg:ms-8">
                        <h6 className="text-orange-500 font-semibold uppercase text-lg">Our Shop</h6>
                        <h5 className="font-semibold text-3xl leading-normal my-4">Focusing on Quality <br/> Material, Good Design</h5>
                        <p className="text-slate-400 max-w-xl">Donec non interdum nisl. Sed ut est ac lacus sodales convallis. Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum magna porttitor porttitor suscipit. Praesent sit amet consequat eros. Quisque ullamcorper ornare vulputate. Nam sodales sem id diam sollicitudin, id lobortis tellus tincidunt.</p>

                        <div className="flex items-center mt-6">
                            <FiPhone className="w-6 h-6 me-4"></FiPhone>
                            <div className="">
                                <h5 className="title font-bold mb-0">Phone</h5>
                                <Link href="tel:+152534-468-854" className="tracking-wide text-orange-500">+152 534-468-854</Link>
                            </div>
                        </div>
                        
                        <div className="flex items-center mt-6">
                            <FiMapPin className="w-6 h-6 me-4"></FiMapPin>
                            <div className="">
                                <h5 className="title font-bold mb-0">Location</h5>
                                <Link href="#" scroll={false} onClick={()=>setModal(true)} className="text-orange-500" >View on Google map</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {modal && (
            <div className="w-full h-screen bg-slate-900/80 fixed top-0 left-0 bottom-0 right-0 z-999 flex items-center justify-center">
                <div className="w-full h-full px-5 md:px-40 md-py-20 py-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55431.05581015953!2d-95.461302!3d29.735948000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c36647a52ab1%3A0x70a301678672cb!2sBriargrove%20Park%2C%20Houston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1710322657489!5m2!1sen!2sin" width="100%" height="100%" title="myfram"  loading="lazy"></iframe>
                </div>
                <button className="text-slate-400 absolute top-[20px] right-[20px]" onClick={()=>setModal(false)}>
                    <FiX className="size-5"/>
                </button>
            </div>
        )}
        </>
    )
}