"use client";
import React from "react";
import { Spin } from "antd";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spin tip="Loading..." size="large" />
    </div>
  );
}

export default Loading;
