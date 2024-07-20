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

  async function getUser() {
    flag = 0;
    const { data: da } = await axios.post("/api/user/getDetails", {
      email: data.user.email,
    });
    if (da && da.status === 200) {
      setUser(da.data);
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

      setUser(data.user);
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
      }}
    >
      {contextHolder} {children}
      <BackdropComponent open={backDropOpen} />
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
