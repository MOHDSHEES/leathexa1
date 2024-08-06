"use client";
import { Button } from "@mui/material";
import { Empty, Typography } from "antd";
import Link from "next/link";
import React from "react";

const EmptyProduct = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={
          <Typography.Text>
            The product you are looking for does not exist or the URL is
            incorrect.
          </Typography.Text>
        }
      >
        <Link href="/">
          <Button variant="outlined">Home Page</Button>
        </Link>
      </Empty>
    </div>
  );
};

export default EmptyProduct;
