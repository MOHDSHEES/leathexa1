'use client'
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';
import Image from "next/image";

export default function ProductViewThree(){
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
    return(
        <div className="tiny-single-item">
            <TinySlider settings={settings}>
                {image.map((item,index)=>{
                    return(
                        <div className="tiny-slide" key={index}>
                            <div className="m-0.5">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-700" alt=""/>
                            </div>
                        </div>
                    )
                })}
            </TinySlider>
        </div>
    )
}