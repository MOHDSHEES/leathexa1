"use client";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { useSession } from "next-auth/react";
import BackdropComponent from "./app/components/functions/backDrop";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children, initialUser }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [user, setUser] = useState(initialUser);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [backDropOpen, setBackDropOpen] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const [cartLoading, setCartLoading] = useState(true);
  const [wishlist, setWishlist] = useState(null);

  // const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const fetchCsrfToken = async () => {
      await axios.post("/api/getCsrfToken");
    };
    fetchCsrfToken();
  }, []);

  useEffect(() => {
    // Check if a session ID exists in cookies
    let sessionId = Cookies.get("sessionId");

    if (!sessionId) {
      // Generate a new session ID
      sessionId = uuidv4();
      // Store the session ID in a cookie that lasts for a day
      Cookies.set("sessionId", sessionId, { expires: 1 });
    }

    // The session ID is now available in cookies and can be used for tracking
  }, []);
  // async function getUser() {
  //   flag = 0;
  //   const response = await axios.post("/api/user/getDetails", {
  //     email: data.user.email,
  //   });
  //   if (response && response.data && response.data.status === 200) {
  //     setUser(response.data.data);
  //   } else {
  //     signOut();
  //   }
  //   setLoading(false);
  // }

  const { status } = useSession();
  // let flag = 1;
  useEffect(() => {
    // if (data && data.user && !user) {
    //   setLoading(true);

    //   // setUser(data.user);
    //   if (flag) {
    //     getUser();
    //   }
    //   setLoading(false);
    // }
    // else
    if (status !== "loading") {
      setLoading(false);
    }
  }, [status]);

  return (
    <MyContext.Provider
      value={{
        messageApi,
        user,
        setUser,
        loading,
        backDropOpen,
        setBackDropOpen,
        isAdmin,
        setIsAdmin,
        // csrfToken,
        // setCsrfToken,
        cartItems,
        setCartItems,
        setCartLoading,
        cartLoading,
        wishlist,
        setWishlist,
      }}
    >
      {contextHolder} {children}
      <BackdropComponent open={backDropOpen} />
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
