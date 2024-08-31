import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiTrash2 } from "../../assets/icons/vander";
import discountPrice from "../functions/discountPrice";

const HorizontalCard = ({ item, removeItem, deleting }) => {
  return (
    <li className="flex justify-between items-center py-6 border-t first-of-type:border-0 border-gray-100 dark:border-gray-700">
      <div className="flex items-center">
        <Image
          src={item.images[0]}
          width={64}
          height={83}
          className="rounded shadow dark:shadow-gray-800 w-16"
          alt=""
        />

        <div className="ms-4">
          <Link
            href={`/product/${item._id}`}
            className="font-semibold hover:text-orange-500"
          >
            {item.name}
          </Link>
          <p className="text-green-600 text-sm mt-1">
            {discountPrice(item.price, item.discount)}{" "}
            <del className="text-red-600">{item.price}</del>
          </p>
        </div>
      </div>

      <div>
        <button
          disabled={deleting}
          onClick={() => removeItem(item)}
          className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white rounded-full"
        >
          <FiTrash2 className="h-4 w-4"></FiTrash2>
        </button>
      </div>
    </li>
  );
};

export default HorizontalCard;
