"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import LoginComponent from "../../components/authComponents/LoginComponent";
import { useSearchParams } from "next/navigation";
import CustomLoader from "../../components/loader/customLoader";
// import axios from "axios";
import { MyContext } from "@/src/context";
// import { closeMessage } from "../../components/functions/message";

export default function LoginWrapper() {
  return (
    <Suspense fallback={<CustomLoader />}>
      <Login />
    </Suspense>
  );
}

function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { setUser, messageApi, user } = useContext(MyContext);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const callBackUrl = searchParams.get("callbackUrl");

  // const fetchUserData = async () => {
  //   if (session && session.user) {
  //     setLoading(true);
  //     try {
  //       // Make a secure API call to get the user data
  //       const { data } = await axios.post("/api/user/getDetails", {
  //         email: data.user.email,
  //       });
  //       if (data.status === 200) setUserData(data.data);
  //       else {
  //         closeMessage(
  //           messageApi,
  //           "Something Went Wrong. Login Again",
  //           "error"
  //         );
  //         signOut();
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch user data", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };

  useEffect(() => {
    if (session && session.user) {
      setLoading(true);
      // if (!user) fetchUserData();
      setUser(session.user);
      const url = callBackUrl ? callBackUrl : "/";
      router.replace(url, undefined, {
        onComplete: () => setLoading(false),
      });
      // router.replace(url).finally(() => setLoading(false));
    } else if (status === "unauthenticated") {
      setLoading(false);
    }
  }, [session]);

  if (loading) return <CustomLoader />;

  if (!session || !session.user) {
    return (
      <div>
        <LoginComponent />
      </div>
    );
  }

  return null; // If user is authenticated, return null
}

// function Loader() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <Spin tip="" size="large"></Spin>
//     </div>
//   );
// }
