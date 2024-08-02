import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { newProduct } from "../../data/data";
// import Image from "next/image";
// import { FiHeart, FiEye, FiBookmark } from "../../assets/icons/vander";
import axios from "axios";
import Card from "../card/card";

const BestSeller = () => {
  const [data, setData] = useState(null);
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

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
        {loading
          ? "Loading..."
          : data.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
      </div>
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
