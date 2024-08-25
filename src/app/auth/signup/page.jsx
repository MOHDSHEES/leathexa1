"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SignUpComponent from "../../components/authComponents/signUpComponent";
import { useSession } from "next-auth/react";
import { Spin } from "antd";
import CustomLoader from "../../components/loader/customLoader";
// import Switcher from "../components/switcher";

export default function Signup() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  // if (session) {
  //   router.replace("/");
  // }
  useEffect(() => {
    if (session && session.user) {
      setLoading(true);
      router.replace("/", undefined, {
        onComplete: () => setLoading(false),
      });
    } else if (status === "unauthenticated") {
      setLoading(false);
    }
  }, [session]);
  if (loading)
    return (
      <CustomLoader />
      // <div
      //   style={{
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     height: "100vh",
      //   }}
      // >
      //   <Spin tip="" size="large"></Spin>
      // </div>
    );
  if (!session || !session.user) {
    return (
      <div>
        <SignUpComponent />
      </div>
    );
  }
}
