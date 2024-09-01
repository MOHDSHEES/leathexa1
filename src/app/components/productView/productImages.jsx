"use client";
import React, { useState } from "react";
// import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

export default function ProductImages({ images }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Handler for zoom in
  const handleZoomIn = () => {
    if (swiperInstance?.autoplay) {
      swiperInstance.autoplay.stop(); // Pause autoplay on zoom in
    }
  };

  // Handler for zoom out
  const handleZoomOut = () => {
    if (swiperInstance?.autoplay) {
      swiperInstance.autoplay.start(); // Resume autoplay on zoom out
    }
  };
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
            onSwiper={(swiper) => setSwiperInstance(swiper)}
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
                    <InnerImageZoom
                      src={item}
                      // zoomPreload={true}
                      style={{ width: "100%", height: "auto" }}
                      className=" d min-w-full"
                      // hideHint={true}
                      afterZoomIn={handleZoomIn} // Pause autoplay on zoom in
                      afterZoomOut={handleZoomOut}
                      hasSpacer={true}
                    />
                    {/* <Image
          src={item}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="min-w-full"
          alt=""
          // onClick={() => imageShow(index)}
        /> */}
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
