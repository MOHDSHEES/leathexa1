import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiHeart, FiEye, FiBookmark } from "../../assets/icons/vander";
import { Rating } from "@mui/material";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="group">
      <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
        <Image
          src="/images/shop/black-print-t-shirt.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="group-hover:scale-110 duration-500"
          alt=""
        />

        <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
          <Link
            href="/shop-cart"
            className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md"
          >
            Add to Cart
          </Link>
        </div>

        <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
          <li>
            <Link
              href="#"
              className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
            >
              <FiHeart className="size-4"></FiHeart>
            </Link>
          </li>
          <li className="mt-1 ms-0">
            <Link
              href="/shop-item-detail"
              className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
            >
              <FiEye className="size-4"></FiEye>
            </Link>
          </li>
          <li className="mt-1 ms-0">
            <Link
              href="#"
              className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
            >
              <FiBookmark className="size-4"></FiBookmark>
            </Link>
          </li>
        </ul>

        <ul className="list-none absolute top-[10px] start-4">
          {item.offer === true && (
            <li>
              <Link
                href="#"
                className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
              >
                {item.tag}
              </Link>
            </li>
          )}
          {item.tag === "New" && (
            <li>
              <Link
                href="#"
                className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
              >
                {item.tag}
              </Link>
            </li>
          )}
          {item.tag === "Featured" && (
            <li>
              <Link
                href="#"
                className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
              >
                {item.tag}
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="mt-4">
        <Link
          href={`/product-detail-one/${item.id}`}
          className="hover:text-orange-500 text-lg font-medium"
        >
          {item.name}
        </Link>
        <div className="flex justify-between items-center mt-1">
          <p>
            {(item.price - (item.discount / 100) * item.price).toFixed(2)}{" "}
            <del className="text-slate-400">{item.price}</del>
          </p>
          {/* <ul className="font-medium text-amber-400 list-none"> */}
          <Rating
            name="half-rating-read"
            defaultValue={item.ratings}
            precision={0.2}
            size="small"
            readOnly
          />
          {/* <li className="inline">
              <i className="mdi mdi-star"></i>
            </li>
            <li className="inline">
              <i className="mdi mdi-star"></i>
            </li>
            <li className="inline">
              <i className="mdi mdi-star"></i>
            </li>
            <li className="inline">
              <i className="mdi mdi-star"></i>
            </li>
            <li className="inline">
              <i className="mdi mdi-star"></i>
            </li> */}
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
