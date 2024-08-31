"use client";
import React, { useContext, useEffect, useState } from "react";
import HorizontalCard from "../card/horizontalCard";
import { getWishlist, removeWishlistItem } from "../axiosRoutes/wishlist";
import { MyContext } from "@/src/context";
import { Alert } from "@mui/material";
import LoadingWishlist from "./loadingWishlist";
import EmptyCart from "../cart/emptyCart";
import { Spin } from "antd";

const wishlist = () => {
  const { user, wishlist, setWishlist, setUser } = useContext(MyContext);
  const [error, setError] = useState(null);
  const [data, setData] = useState(wishlist);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState({ item: null, deleting: false });

  const fetchWishlist = async () => {
    setLoading(true);
    setError(null);
    const data = await getWishlist(user._id);
    if (data.status === 200) {
      setWishlist(data.data.wishlist);
      setUser({ ...user, itemsInWishlist: data.data.wishlist.length });
      setData(data.data.wishlist);
    } else setError(data.msg);
    setLoading(false);
  };
  useEffect(() => {
    if (
      user &&
      user._id &&
      user.itemsInWishlist &&
      (!wishlist || user.itemsInWishlist !== (wishlist && wishlist.length))
    ) {
      fetchWishlist();
    }
  }, [user, wishlist]);

  async function removeItem(item) {
    setDeleting({ item: item._id, deleting: true });
    const data = await removeWishlistItem(user._id, item._id);
    if (data.status === 200) {
      const wish = data.data.wishlist;
      setWishlist(wish);
      setData(wish);
      setUser({ ...user, itemsInWishlist: wish.length });
    }
    setDeleting({ item: null, deleting: false });
  }
  return (
    <>
      {loading ? (
        <LoadingWishlist />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : data && data.length > 0 ? (
        data.map((item, index) => {
          return (
            <Spin
              key={index}
              tip="Removing..."
              spinning={deleting.item === item.product._id && deleting.deleting}
            >
              <HorizontalCard
                item={item.product}
                removeItem={removeItem}
                deleting={deleting.deleting}
              />
            </Spin>
          );
        })
      ) : (
        <div style={{ padding: "30px 0" }}>
          <EmptyCart msg="Your wishlist is currently empty. Start adding items you love!" />
        </div>
      )}
    </>
  );
};

export default wishlist;
