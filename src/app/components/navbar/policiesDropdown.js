import Link from "next/link";
import React from "react";

const PoliciesDropdown = ({ menu, setMenu, setSubMenu, subMenu }) => {
  return (
    <li
      className={`has-submenu parent-menu-item ${
        [
          "/",
          "/index-fashion-two",
          "/index-fashion-three",
          "/index-fashion-four",
          "/index-item",
        ].includes(menu)
          ? "active"
          : ""
      }`}
    >
      <Link
        href="#"
        onClick={() =>
          setSubMenu(setMenu === "/index-item" ? "" : "/index-item")
        }
      >
        Policies
      </Link>
      <span className="menu-arrow"></span>
      <ul
        className={`submenu ${
          [
            "/",
            "/index-fashion-two",
            "/index-fashion-three",
            "/index-fashion-four",
            "/index-item",
          ].includes(subMenu)
            ? "open"
            : ""
        }`}
      >
        <li className={`ms-0 ${menu === "/" ? "active" : ""}`}>
          <Link href="/" className="sub-menu-item">
            Fashion One
          </Link>
        </li>
        <li className={`ms-0 ${menu === "/index-fashion-two" ? "active" : ""}`}>
          <Link href="/index-fashion-two" className="sub-menu-item">
            Fashion Two
          </Link>
        </li>
        <li
          className={`ms-0 ${menu === "/index-fashion-three" ? "active" : ""}`}
        >
          <Link href="/index-fashion-three" className="sub-menu-item">
            Fashion Three
          </Link>
        </li>
        <li
          className={`ms-0 ${menu === "/index-fashion-four" ? "active" : ""}`}
        >
          <Link href="/index-fashion-four" className="sub-menu-item">
            Fashion Four
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default PoliciesDropdown;
