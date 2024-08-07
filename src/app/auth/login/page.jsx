"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Spin } from "antd";
import LoginComponent from "../../components/authComponents/LoginComponent";
import { useSearchParams } from "next/navigation";

export default function LoginWrapper() {
  return (
    <Suspense fallback={<Loader />}>
      <Login />
    </Suspense>
  );
}

function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const callBackUrl = searchParams.get("callbackUrl");

  useEffect(() => {
    if (session && session.user) {
      setLoading(true);
      const url = callBackUrl ? callBackUrl : "/";
      router.replace(url, undefined, {
        onComplete: () => setLoading(false),
      });
      // router.replace(url).finally(() => setLoading(false));
    } else if (status === "unauthenticated") {
      setLoading(false);
    }
  }, [session]);

  if (loading) return <Loader />;

  if (!session || !session.user) {
    return (
      <div>
        <LoginComponent />
      </div>
    );
  }

  return null; // If user is authenticated, return null
}

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spin tip="" size="large"></Spin>
    </div>
  );
}
