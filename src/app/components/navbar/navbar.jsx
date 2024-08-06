"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiHeart } from "../../assets/icons/vander";
import Cart from "./cart";
import User from "./user";
import NavbarLogo from "./navbarLogo";
import NavSearch from "./search";
import PoliciesDropdown from "./policiesDropdown";

export default function Navbar({ navClass, navlight }) {
  let [scrolling, setScrolling] = useState(false);
  let [isToggle, setToggle] = useState(false);
  let [menu, setMenu] = useState("");
  let [subMenu, setSubMenu] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  let [cartMenu, setCartMenu] = useState(false);
  let [userMenu, setUserMenu] = useState(false);
  let dropdownRef = useRef(null);
  let cartRef = useRef(null);
  let userRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 50;
      setScrolling(isScrolling);
    };
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const cartOutsideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartMenu(false);
      }
    };
    const userOutsideClick = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("click", cartOutsideClick);
    window.addEventListener("click", userOutsideClick);

    let current = window.location.pathname;
    setMenu(current);
    setSubMenu(current);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("click", cartOutsideClick);
      window.removeEventListener("click", userOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setToggle(!isToggle);
  };

  return (
    <nav id="topnav" className={`${navClass} ${scrolling ? "nav-sticky" : ""}`}>
      <div className="container relative">
        <NavbarLogo navlight={navlight} />

        <div className="menu-extras">
          <div className="menu-item">
            <Link
              href="#"
              className={`navbar-toggle ${isToggle ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        <ul className="buy-button list-none mb-0">
          <li
            className="dropdown inline-block relative pe-1 nav-item"
            ref={dropdownRef}
          >
            <NavSearch
              navlight={navlight}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          </li>

          <li
            className="dropdown inline-block relative ps-0.5 nav-item"
            ref={cartRef}
          >
            <Cart cartMenu={cartMenu} setCartMenu={setCartMenu} />
          </li>

          <li className="inline-block ps-0.5 nav-item">
            <Link
              href="#"
              className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 text-white"
            >
              <FiHeart data-feather="heart" className="h-4 w-4"></FiHeart>
            </Link>
          </li>

          <li
            className="dropdown inline-block relative ps-0.5 nav-item"
            ref={userRef}
          >
            <User userMenu={userMenu} setUserMenu={setUserMenu} />
          </li>
        </ul>
        {/* first  */}
        <div
          id="navigation"
          style={{ display: isToggle === true ? "block" : "none" }}
        >
          <ul
            className={`navigation-menu ${
              navlight === true ? "nav-light" : ""
            }`}
          >
            <li
              // style={{ marginLeft: "3px", marginRight: "3px" }}
              className={`${menu === "/products/mens" ? "active" : ""}`}
            >
              <Link href="/products/mens" className="sub-menu-item">
                Mens
              </Link>
            </li>
            <li className={`${menu === "/products/womens" ? "active" : ""}`}>
              <Link href="/products/womens" className="sub-menu-item">
                Womens
              </Link>
            </li>
            <li className={`${menu === "/sale" ? "active" : ""}`}>
              <Link href="/sale" className="sub-menu-item">
                Custom
              </Link>
            </li>
            <PoliciesDropdown
              menu={menu}
              setMenu={setMenu}
              subMenu={subMenu}
              setSubMenu={setSubMenu}
            />
            <li className={`${menu === "/contact" ? "active" : ""}`}>
              <Link href="/contact" className="sub-menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
