"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductImages({ images }) {
  return (
    <ul className="product-imgs flex list-none">
      {/* w-5/6 */}
      <li className="img-display shadow dark:shadow-gray-800 m-px ">
        <div className="img-showcase flex w-full duration-500">
          <Swiper
            modules={[Autoplay, Pagination]}
            speed={1000}
            spaceBetween={30}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {images.map((item, index) => {
              return (
                // <Link href="#" key={index} scroll={false}>
                <SwiperSlide key={index}>
                  <div
                    className="flex justify-center items-center"
                    style={{ height: "100%" }}
                  >
                    <Image
                      src={item}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="min-w-full"
                      alt=""
                      // onClick={() => imageShow(index)}
                    />
                  </div>
                </SwiperSlide>
                // </Link>
              );
            })}
          </Swiper>
        </div>
      </li>
    </ul>
  );
}
