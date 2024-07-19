'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductViewTwo(){
    let [activeImage, setActiveImage] = useState(1)
    let image = [
        {
            id:1,
            image:'/images/shop/mens-jecket.jpg'
        },
        {
            id:2,
            image:'/images/shop/mens-jecket-3.jpg'
        },
        {
            id:3,
            image:'/images/shop/mens-jecket-left.jpg'
        },
        {
            id:4,
            image:'/images/shop/mens-jecket-back.jpg'
        },
        {
            id:5,
            image:'/images/shop/mens-jecket-4.jpg'
        },
    ]

    const imageShow = (index) =>{
        setActiveImage(index)
    }
    return(
        <ul className="product-imgs flex list-none">
            <li className="w-1/6">
                <ul className="img-select list-none">
                    {image.map((item,index)=>{
                        return(
                            <li className="p-px" key={index}>
                                <Link href="#" scroll={false}>
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-800 w-full h-auto" alt="" onClick={()=>imageShow(item.id)}/>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </li>

            <li className="img-display shadow dark:shadow-gray-800 m-px w-5/6">
                <div className="img-showcase flex w-full duration-500">
                    {activeImage === 1 && (
                        <Image src='/images/shop/mens-jecket.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="min-w-full" alt=""/>
                    )}
                    {activeImage === 2 && (
                        <Image src='/images/shop/mens-jecket-3.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="min-w-full" alt=""/>
                    )}
                    {activeImage === 3 && (
                        <Image src='/images/shop/mens-jecket-left.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="min-w-full" alt=""/>
                    )}
                    {activeImage === 4 && (
                        <Image src='/images/shop/mens-jecket-back.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="min-w-full" alt=""/>
                    )}
                    {activeImage === 5 && (
                        <Image src='/images/shop/mens-jecket-4.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="min-w-full" alt=""/>
                    )}
                </div>
            </li>
        </ul>
    )
}