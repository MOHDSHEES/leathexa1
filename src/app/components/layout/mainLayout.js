import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import ScrollToTop from "../scroll-to-top";
import Switcher from "../switcher";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar navClass="defaultscroll is-sticky" />
      {children}
      <Footer />
      <Switcher />
      {/* <BackToHome/> */}
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
