"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/card";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton, Stack } from "@mui/material";

const BestSeller = () => {
  const [data, setData] = useState(null);
  //   console.log(data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getDetails = async () => {
      const { data } = await axios.post("/api/product/get");
      if (data.status === 200) setData(data.data);
      setLoading(false);
    };

    getDetails();
  }, []);
  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid items-end md:grid-cols-2 mb-6">
        <div className="md:text-start text-center">
          <h5 className="font-semibold text-3xl leading-normal mb-4">
            Best Seller
          </h5>
          <p className="text-slate-400 max-w-xl">Top sale in this week</p>
        </div>

        <div className="md:text-end hidden md:block">
          <Link
            href="/shop-grid"
            className="text-slate-400 hover:text-orange-500"
          >
            See More Items <i className="mdi mdi-arrow-right"></i>
          </Link>
        </div>
      </div>
      {/* {loading ? (
        <Stack gap={2} direction="row">
          <Skeleton variant="rounded" width={260} height={400} />
          <Skeleton variant="rounded" width={260} height={400} />
          <Skeleton variant="rounded" width={260} height={400} />
          <Skeleton variant="rounded" width={260} height={400} />
        </Stack>
      ) : ( */}

      <div className="custom-swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={4.2}
          // navigation
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {loading
            ? [...Array(4)].map((_, index) => (
                <SwiperSlide key={index}>
                  <Skeleton variant="rounded" height={400} />
                </SwiperSlide>
              ))
            : data &&
              data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card item={item} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
      {/* )} */}
      <div className="grid grid-cols-1 mt-6">
        <div className="text-center md:hidden block">
          <Link
            href="/shop-grid"
            className="text-slate-400 hover:text-orange-500"
          >
            See More Items <i className="mdi mdi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
