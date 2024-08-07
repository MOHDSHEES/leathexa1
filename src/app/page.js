"use client";
import FeaturedCollection from "./components/homePage/feature-collection";
import Navbar from "./components/navbar/navbar";
import Tagline from "./components/tagline";
import Cta from "./components/homePage/cta/cta";
import Switcher from "./components/switcher";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";
import NewArrival from "./components/homePage/newArrival";
import BestSeller from "./components/homePage/bestSeller";
import Client from "./components/homePage/client";
import CtaOne from "./components/homePage/cta/cta-one";
import HomePageCarousel from "./components/homePage/HomePageCarousel";

export default function Home() {
  return (
    <>
      <Tagline />
      <Navbar navClass="defaultscroll is-sticky tagline-height" />
      <HomePageCarousel />
      <section className="relative md:py-24 py-16">
        <FeaturedCollection />
        <NewArrival />
        <Cta />
        <BestSeller />
        <CtaOne />
        <Client />
      </section>

      <Footer />
      <Switcher />
      <ScrollToTop />
    </>
  );
}
