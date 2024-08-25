import { Badge, Skeleton, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MyContext } from "@/src/context";
import { closeMessage } from "../functions/message";
import axios from "axios";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 6,
    top: 0,
    border: `1px solid ${theme.palette.background.paper}`,
    background: red[500],
    padding: "0 4px",
    color: "white",
  },
}));

const Cart = ({ cartMenu, setCartMenu }) => {
  const {
    user,
    cartItems,
    setCartItems,
    messageApi,
    csrfToken,
    setCartLoading,
    loading,
  } = useContext(MyContext);

  const [total, setTotal] = useState(0);
  const getCartItems = async () => {
    setCartLoading(true);
    const { data } = await axios.post("/api/cart/getItems", {
      csrfToken: csrfToken,
      userId: user._id,
    });
    if (data.status === 200) {
      setCartItems(data.data);
    } else {
      closeMessage(messageApi, data.msg, "error");
    }
    setCartLoading(false);
  };

  //   let flag = 1;
  const cartMenuHandler = () => {
    if (user) setCartMenu(!cartMenu);
  };

  useEffect(() => {
    if (
      (!cartItems ||
        user.itemsInCart !==
          (cartItems.cartItems && cartItems.cartItems.length)) &&
      csrfToken &&
      cartMenu &&
      user
    ) {
      getCartItems();
    }
  }, [cartItems, csrfToken, cartMenu, user]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (!cartItems || !cartItems.cartItems) return 0;
      return cartItems.cartItems.reduce((total, item) => {
        const discountedPrice =
          item.product.price -
          item.product.price * (item.product.discount / 100);
        return total + discountedPrice * item.quantity;
      }, 0);
    };

    setTotal(calculateTotalPrice());
  }, [cartItems]);

  //   console.log(cartItems);
  return (
    <>
      {loading ? (
        <Skeleton
          className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 border border-orange-500 text-white"
          variant="circular"
          width={34}
          height={34}
        />
      ) : (
        <StyledBadge
          badgeContent={user && user.itemsInCart ? user.itemsInCart : 0}
        >
          <button
            data-dropdown-toggle="dropdown"
            className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 border border-orange-500 text-white"
            type="button"
            onClick={cartMenuHandler}
          >
            <ShoppingCartIcon className="h-4 w-4" />
          </button>
        </StyledBadge>
      )}
      {/* <StyledBadge
        badgeContent={user && user.itemsInCart ? user.itemsInCart : 0}
      >
        <button
          data-dropdown-toggle="dropdown"
          className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 border border-orange-500 text-white"
          type="button"
          onClick={cartMenuHandler}
        >
          <ShoppingCartIcon className="h-4 w-4" />
        </button>
      </StyledBadge> */}
      {cartMenu && (
        <div className="dropdown-menu fixed sm:absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
          {user && !user.itemsInCart ? (
            <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
              <div style={{ textAlign: "center", margin: "10px 0px" }}>
                Cart is Empty
              </div>
              <li className="py-1.5 px-4 ms-0">
                <span className="text-center block">
                  <Link
                    href="/user/cart"
                    className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white me-1"
                  >
                    View Cart
                  </Link>
                </span>
                {/* <p className="text-sm text-slate-400 mt-1">*T&C Apply</p> */}
              </li>
            </ul>
          ) : (
            <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
              {user && user.itemsInCart > 0 && !cartItems ? (
                <Stack spacing={1}>
                  {Array.from(
                    { length: user.itemsInCart <= 4 ? user.itemsInCart : 4 },
                    (_, index) => (
                      <li className="m-1" key={index}>
                        <Skeleton variant="rounded" height={60} />
                      </li>
                    )
                  )}
                </Stack>
              ) : (
                // <Stack spacing={1}>
                //   <Skeleton variant="rounded" height={60} />
                //   <Skeleton variant="rounded" height={60} />
                // </Stack>
                cartItems &&
                cartItems.cartItems &&
                cartItems.cartItems.length > 0 &&
                cartItems.cartItems.slice(0, 4).map((item, idx) => {
                  const netPrice = (
                    item.product.price -
                    (item.product.price * item.product.discount) / 100
                  ).toFixed(2);
                  return (
                    <li className="ms-0" key={idx}>
                      <Link
                        href={`/product/${item.product._id}`}
                        className="flex items-center justify-between py-1.5 px-4"
                      >
                        <span className="flex items-center">
                          <Image
                            src="/images/shop/trendy-shirt.jpg"
                            width={36}
                            height={46}
                            className="rounded shadow dark:shadow-gray-800 w-9"
                            alt=""
                          />
                          <span className="ms-3">
                            <span className="block font-semibold">
                              {item.product.name}
                            </span>
                            <span className="block text-sm text-slate-400">
                              {netPrice} X {item.quantity}
                            </span>
                          </span>
                        </span>

                        <span className="font-semibold">
                          {netPrice * item.quantity}
                        </span>
                      </Link>
                    </li>
                  );
                })
              )}

              <li className="border-t border-gray-100 dark:border-gray-800 my-2 ms-0"></li>

              <li className="flex items-center justify-between py-1.5 px-4 ms-0">
                <h6 className="font-semibold mb-0">Total($):</h6>
                <h6 className="font-semibold mb-0">{total.toFixed(2)}</h6>
              </li>

              <li className="py-1.5 px-4 ms-0">
                <span className="text-center block">
                  <Link
                    href="/user/cart"
                    className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white me-1"
                  >
                    View Cart
                  </Link>

                  <Link
                    href="#"
                    className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white"
                  >
                    Checkout
                  </Link>
                </span>
                <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
