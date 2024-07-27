"use client";
import FeaturedCollection from "./components/homePage/feature-collection";
import HeroSlider from "./components/homePage/hero-slider";
import Navbar from "./components/navbar";
import Tagline from "./components/tagline";
import Cta from "./components/homePage/cta/cta";
import Switcher from "./components/switcher";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";
import NewArrival from "./components/homePage/newArrival";
import BestSeller from "./components/homePage/bestSeller";
import Client from "./components/homePage/client";
import CtaOne from "./components/homePage/cta/cta-one";

export default function Home() {
  return (
    <>
      <Tagline />
      <Navbar navClass="defaultscroll is-sticky tagline-height" />
      <HeroSlider />
      <section className="relative md:py-24 py-16">
        <FeaturedCollection />

        <NewArrival />
        <Cta />
        {/* <BestSeller /> */}
        <CtaOne />
        <Client />
      </section>

      <Footer />
      <Switcher />
      <ScrollToTop />
    </>
  );
}
