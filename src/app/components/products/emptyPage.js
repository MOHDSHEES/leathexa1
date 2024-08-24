"use client";
import { Button } from "@mui/material";
import { Empty, Typography } from "antd";
import Link from "next/link";
import React from "react";
const { Title } = Typography;

const EmptyPage = ({ size }) => {
  return (
    <div
      style={{ textAlign: "center" }}
      className={`flex items-center justify-center ${size}`}
    >
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={
          <>
            <Title level={3}>404 - Page Not Found</Title>
            <Typography.Text>
              Oops! It looks like the page you're looking for doesn’t exist.
              <br />
              Please check the URL or use the navigation to find what you’re
              looking for.
            </Typography.Text>
          </>
        }
      >
        <Link href="/">
          <Button variant="outlined">Home</Button>
        </Link>
      </Empty>
    </div>
  );
};

export default EmptyPage;
