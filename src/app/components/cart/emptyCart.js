import React from "react";
import { Empty, Typography } from "antd";
import { Button } from "@mui/material";
import Link from "next/link";
const EmptyCart = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <Typography.Text>
        Looks like your cart is empty. Start shopping to fill it up!
      </Typography.Text>
    }
  >
    <Link href="/">
      <Button variant="outlined">Shop Now</Button>
    </Link>
  </Empty>
);
export default EmptyCart;
