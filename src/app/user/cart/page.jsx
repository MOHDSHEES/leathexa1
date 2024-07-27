import React from "react";
// import Link from "next/link";
import MainLayout from "../../components/layout/mainLayout";
// import { MyContext } from "@/src/context";
// import axios from "axios";
// import { closeMessage } from "../../components/functions/message";
// import { Skeleton } from "@mui/material";
// import EmptyCart from "../../components/cart/emptyCart";
// import CartTable from "../../components/cart/cartTable";
import Cart from "../../components/cart/cart";

export const metadata = {
  title: "Cart",
};

export default function ShopCart() {
  // const {
  //   user,
  //   cartItems,
  //   setCartItems,
  //   csrfToken,
  //   messageApi,
  //   setCartLoading,
  //   cartLoading,
  // } = useContext(MyContext);
  // const [total, setTotal] = useState(0);
  // useEffect(() => {
  //   const getCartItems = async () => {
  //     setCartLoading(true);
  //     const { data } = await axios.post("/api/cart/getItems", {
  //       csrfToken: csrfToken,
  //       userId: user._id,
  //     });
  //     if (data.status === 200) {
  //       setCartItems(data.data);
  //     } else {
  //       closeMessage(messageApi, data.msg, "error");
  //     }
  //     setCartLoading(false);
  //   };

  //   if (!cartItems && csrfToken) {
  //     getCartItems();
  //   }
  // }, [cartItems, csrfToken]);

  // useEffect(() => {
  //   const calculateTotalPrice = () => {
  //     if (!cartItems || !cartItems.cartItems) return 0;
  //     return cartItems.cartItems.reduce((total, item) => {
  //       const discountedPrice =
  //         item.product.price -
  //         item.product.price * (item.product.discount / 100);
  //       return total + discountedPrice * item.quantity;
  //     }, 0);
  //   };

  //   setTotal(calculateTotalPrice());
  // }, [cartItems]);

  return (
    <>
      <MainLayout>
        <Cart />
        {/* <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
          <div className="container relative">
            <div className="grid grid-cols-1 mt-14">
              <h3 className="text-3xl leading-normal font-semibold">Fashion</h3>
            </div>

            <div className="relative mt-3">
              <ul className="tracking-[0.5px] mb-0 inline-block">
                <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
                  <Link href="/">Cartzio</Link>
                </li>
                <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                  <i className="mdi mdi-chevron-right"></i>
                </li>
                <li
                  className="inline-block uppercase text-[13px] font-bold text-orange-500"
                  aria-current="page"
                >
                  SHOPCART
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative md:py-24 py-16">
          {cartLoading ? (
            <div className="container relative">
              <div className="grid lg:grid-cols-1">
                <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md">
                  <Skeleton variant="rounded" height={50} />
                </div>
              </div>
            </div>
          ) : cartItems && cartItems._id && cartItems.cartItems.length > 0 ? (
            <CartTable
              cartItems={cartItems}
              total={total}
              setCartItems={setCartItems}
            />
          ) : (
            <EmptyCart />
          )}

        </section> */}
      </MainLayout>
    </>
  );
}
