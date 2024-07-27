"use client";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { signOut, useSession } from "next-auth/react";
import BackdropComponent from "./app/components/functions/backDrop";

// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [backDropOpen, setBackDropOpen] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const [cartLoading, setCartLoading] = useState(true);

  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const { data } = await axios.post("/api/getCsrfToken");
      setCsrfToken(data.token);
    };
    fetchCsrfToken();
  }, []);

  async function getUser() {
    flag = 0;
    const response = await axios.post("/api/user/getDetails", {
      email: data.user.email,
    });
    if (response && response.data && response.data.status === 200) {
      setUser(response.data.data);
    } else {
      signOut();
    }
    setLoading(false);
  }

  const { data, status } = useSession();
  let flag = 1;
  useEffect(() => {
    if (data && data.user && !user) {
      setLoading(true);

      // setUser(data.user);
      if (flag) {
        getUser();
      }
      setLoading(false);
    } else if (status !== "loading") {
      setLoading(false);
    }
  }, [data]);

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
        csrfToken,
        setCsrfToken,
        cartItems,
        setCartItems,
        setCartLoading,
        cartLoading,
      }}
    >
      {contextHolder} {children}
      <BackdropComponent open={backDropOpen} />
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
