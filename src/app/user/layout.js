"use client";

import { MyContext } from "@/src/context";
import { Box } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { closeMessage } from "../components/functions/message";
import { Spin } from "antd";

export default function userLayout({ children }) {
  const { messageApi, user } = useContext(MyContext);
  const { status } = useSession();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (status !== "loading" && user) {
      setLoading(false);
    }
  }, [status, user]);

  useEffect(() => {
    if (status === "unauthenticated") {
      closeMessage(messageApi, "Token Expired", "error");
      signOut();
    }
  }, [status]);

  if (loading)
    return (
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src="/images/logo/loading.gif"
            alt="Loading..."
          />
          {/* <Spin tip="" size="large"></Spin> */}
        </Box>
      </div>
    );

  return <>{children}</>;
}
