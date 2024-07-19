'use client'
import React, { useState } from "react";
import Link from "next/link";
import {FiX} from '../assets/icons/vander'

export default function ContactModal(){
    let [modal, setModal] = useState(false)

    return(
        <>
        <div className="mt-5">
            <Link href="#" scroll={false} onClick={()=>setModal(true)}
            data-type="iframe" className="video-play-icon read-more lightbox text-orange-500 font-medium">View on Google map</Link>
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
