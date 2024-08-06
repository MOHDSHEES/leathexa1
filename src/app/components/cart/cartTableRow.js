import React, { useState } from "react";
import Counter from "./counter";
import Image from "next/image";
import { Skeleton } from "@mui/material";
import { Spin } from "antd";
import Link from "next/link";

const CartTableRow = ({
  removeItem,
  disable,
  setCartItems,
  cartItems,
  item,
}) => {
  const [removing, setRemoving] = useState(false);
  //   console.log(item);
  return (
    <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
      <td className="p-4">
        <button
          disabled={disable}
          onClick={() => removeItem(item, setRemoving)}
          href=""
        >
          <i className="mdi mdi-window-close text-red-600"></i>
        </button>
      </td>
      <td className="p-4">
        <Link href={`/product/${item.product._id}`}>
          <Spin tip="Removing..." spinning={removing}>
            <span className="flex items-center">
              <Image
                src="/images/shop/black-print-t-shirt.jpg"
                width={48}
                height={62}
                className="rounded shadow dark:shadow-gray-800 w-12"
                alt=""
              />
              <span className="ms-3">
                <span className="block font-semibold">{item.product.name}</span>
              </span>
            </span>
          </Spin>
        </Link>
      </td>
      <td className="p-4 text-center">
        Color:{" "}
        <button
          style={{ background: item.variant.color }}
          className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800  inline-flex align-middle "
          title={item.variant.color}
        ></button>
        {" , "} Size: {" " + item.variant.size}
      </td>
      <td className="p-4 text-center">$ {item.product.price}</td>
      <td className="p-4 text-center">$ {item.product.discount} %</td>
      <td className="p-4 text-center">
        {disable ? (
          <Skeleton variant="rounded" height={20} />
        ) : (
          <Counter
            qtn={item.quantity ? item.quantity : 1}
            total=""
            item={item}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        )}
      </td>
      <td className="p-4  text-end">
        ${" "}
        {(
          (item.product.price -
            item.product.price * (item.product.discount / 100)) *
          item.quantity
        ).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartTableRow;
