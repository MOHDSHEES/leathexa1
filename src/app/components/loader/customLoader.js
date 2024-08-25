import React from "react";

const CustomLoader = () => {
  return (
    <div
      style={{
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
    </div>
  );
};

export default CustomLoader;
