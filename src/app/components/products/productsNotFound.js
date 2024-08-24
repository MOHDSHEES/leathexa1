"use client";
import { Button } from "@mui/material";
import { Empty, Typography } from "antd";
import Link from "next/link";
import React from "react";
const { Title } = Typography;

const ProductsNotFound = () => {
  return (
    <div
      style={{ textAlign: "center" }}
      className="flex items-center justify-center"
    >
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={
          <>
            <Title level={3}>Products Not Found</Title>
            <Typography.Text>
              It seems we're having trouble finding products that match your
              search.
              <br />
              Please try adjusting your filters or refining your search terms.
            </Typography.Text>
          </>
        }
      >
        {/* <Link href="/">
          <Button variant="outlined">Home</Button>
        </Link> */}
      </Empty>
    </div>
  );
};

export default ProductsNotFound;
