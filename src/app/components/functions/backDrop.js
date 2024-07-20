"use client";
import Backdrop from "@mui/material/Backdrop";
import { Spin } from "antd";

const BackdropComponent = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: 999 }}
      open={open}
      // onClick={handleClose}
    >
      <Spin className="white" tip="" size="large"></Spin>
      {/* <CircularProgress color="inherit" /> */}
    </Backdrop>
  );
};

export default BackdropComponent;
