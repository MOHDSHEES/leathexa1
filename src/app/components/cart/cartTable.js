import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Counter from "./counter";
import { MyContext } from "@/src/context";
import { closeMessage } from "../functions/message";
import axios from "axios";
import CartTableRow from "./cartTableRow";

const CartTable = ({ cartItems, total, setCartItems }) => {
  const { csrfToken, messageApi, user, setUser } = useContext(MyContext);
  const [disable, setDisable] = useState(false);
  async function removeItem(item, setRemoving) {
    setRemoving(true);
    setDisable(true);
    const { data } = await axios.post("/api/cart/product/remove", {
      csrfToken: csrfToken,
      cartId: cartItems._id,
      productId: item.product._id,
      variant: item.variant,
      userId: user._id,
    });
    if (data.status === 200) {
      closeMessage(messageApi, "Successfully Removed", "success");
      setCartItems(data.data);
      setUser({ ...user, itemsInCart: data.data.cartItems.length });
    } else {
      closeMessage(messageApi, data.msg, "error");
    }
    setDisable(false);
    setRemoving(false);
  }
  //   console.log("cartItems", cartItems);
  return (
    <div className="container relative">
      <div className="grid lg:grid-cols-1">
        <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
          <table className="w-full text-start">
            <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
              <tr>
                <th scope="col" className="p-4 w-4"></th>
                <th scope="col" className="text-start p-4 min-w-[220px]">
                  Product
                </th>
                <th scope="col" className="text-start p-4 min-w-[220px]">
                  Variant
                </th>
                <th scope="col" className="p-4 w-24 min-w-[100px]">
                  Price
                </th>
                <th scope="col" className="p-4 w-24 min-w-[100px]">
                  Discount
                </th>
                <th scope="col" className="p-4 w-56 min-w-[220px]">
                  Qty
                </th>
                <th scope="col" className="p-4 w-24 min-w-[100px]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.cartItems.map((item, index) => {
                return (
                  <CartTableRow
                    key={index}
                    item={item}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    disable={disable}
                    removeItem={removeItem}
                  />
                  //   <tr
                  //     className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800"
                  //     key={index}
                  //   >
                  //     <td className="p-4">
                  //       <button
                  //         disabled={disable}
                  //         onClick={() => removeItem(item)}
                  //         href=""
                  //       >
                  //         <i className="mdi mdi-window-close text-red-600"></i>
                  //       </button>
                  //     </td>
                  //     <td className="p-4">
                  //       <span className="flex items-center">
                  //         <Image
                  //           src="/images/shop/black-print-t-shirt.jpg"
                  //           width={48}
                  //           height={62}
                  //           className="rounded shadow dark:shadow-gray-800 w-12"
                  //           alt=""
                  //         />
                  //         <span className="ms-3">
                  //           <span className="block font-semibold">
                  //             {item.product.name}
                  //           </span>
                  //         </span>
                  //       </span>
                  //     </td>
                  //     <td className="p-4 text-center">$ {item.product.price}</td>
                  //     <td className="p-4 text-center">
                  //       $ {item.product.discount} %
                  //     </td>
                  //     <td className="p-4 text-center">
                  //       <Counter
                  //         qtn={item.quantity ? item.quantity : 1}
                  //         total=""
                  //         item={item}
                  //         setCartItems={setCartItems}
                  //         cartItems={cartItems}
                  //       />
                  //     </td>
                  //     <td className="p-4  text-end">
                  //       ${" "}
                  //       {(
                  //         (item.product.price -
                  //           item.product.price * (item.product.discount / 100)) *
                  //         item.quantity
                  //       ).toFixed(2)}
                  //     </td>
                  //   </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          <div className="lg:col-span-9 md:order-1 order-3">
            <div className="space-x-1">
              <Link
                disabled={disable}
                href="/user/checkout"
                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-orange-500 text-white rounded-md mt-2"
              >
                Shop Now
              </Link>
              {/* <Link
                  href=""
                  className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white mt-2"
                >
                  Add to Cart
                </Link> */}
            </div>
          </div>

          <div className="lg:col-span-3 md:order-2 order-1">
            <ul className="list-none shadow dark:shadow-gray-800 rounded-md">
              <li className="flex justify-between p-4">
                <span className="font-semibold text-lg">Subtotal :</span>
                <span className="text-slate-400">$ {total.toFixed(2)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
