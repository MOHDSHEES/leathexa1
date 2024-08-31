import React from "react";
import { Empty, Typography } from "antd";
import { Button } from "@mui/material";
import Link from "next/link";
const EmptyCart = ({ msg, redirect = "/" }) => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={<Typography.Text>{msg}</Typography.Text>}
  >
    <Link href={redirect}>
      <Button variant="outlined">Shop Now</Button>
    </Link>
  </Empty>
);
export default EmptyCart;
