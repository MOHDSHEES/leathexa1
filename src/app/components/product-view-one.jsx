'use client'
import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image"

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

export default function ProductViewOne(){
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const images = [
        '/images/shop/mens-jecket.jpg',
        '/images/shop/mens-jecket-3.jpg',
        '/images/shop/mens-jecket-left.jpg',
        '/images/shop/mens-jecket-back.jpg',
        '/images/shop/mens-jecket-4.jpg'
    ];
    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }

    return(
        <div className="lg:col-span-5">
            <div className="grid md:grid-cols-12 gap-3">
                <div className="md:col-span-12">
                    <Link href="#" onClick={() => handleCLick(0)} className="lightbox duration-500 group-hover:scale-105" title="">
                        <Image src='/images/shop/mens-jecket.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-700" alt=""/>
                    </Link>
                </div>
                <div className="md:col-span-6">
                    <Link href="#" onClick={() => handleCLick(1)} className="lightbox duration-500 group-hover:scale-105" title="">
                        <Image src='/images/shop/mens-jecket-3.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-700" alt=""/>
                    </Link>
                </div>
                <div className="md:col-span-6">
                    <Link href="#" onClick={() => handleCLick(2)} className="lightbox duration-500 group-hover:scale-105" title="">
                        <Image src='/images/shop/mens-jecket-left.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-700" alt=""/>
                    </Link>
                </div>
                <div className="md:col-span-12">
                    <Link href="#" onClick={() => handleCLick(3)} className="lightbox duration-500 group-hover:scale-105" title="">
                        <Image src='/images/shop/mens-jecket-back.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-700" alt=""/>
                    </Link>
                </div>
                <div className="md:col-span-12">
                    <Link href="#" onClick={() => handleCLick(4)} className="lightbox duration-500 group-hover:scale-105" title="">
                        <Image src='/images/shop/mens-jecket-4.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-700" alt=""/>
                    </Link>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setOpen( false )}
                    onMovePrevRequest={() =>
                        setActiveIndex((photoIndex + images.length - 1) % images.length,
                        )
                    }
                    onMoveNextRequest={() =>
                        setActiveIndex((photoIndex + 1) % images.length,
                        )
                    }
                />
            )}
        </div>
    )
}