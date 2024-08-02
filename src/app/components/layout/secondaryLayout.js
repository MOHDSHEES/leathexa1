import React from "react";
import Navbar from "../navbar/navbar";
import ScrollToTop from "../scroll-to-top";
import Footer from "../footer";

const SecondaryLayout = ({ children }) => {
  return (
    <>
      <Navbar navClass="defaultscroll is-sticky" navlight={true} />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default SecondaryLayout;
