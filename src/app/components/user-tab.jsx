"use client";
import React, { useState, useEffect, useContext } from "react";

import Link from "next/link";

import {
  FiAirplay,
  FiEdit,
  FiCreditCard,
  FiFileText,
  FiShare2,
  FiBell,
  FiSettings,
  FiLogOut,
} from "../assets/icons/vander";
import { MyContext } from "@/src/context";
import { Avatar, Skeleton } from "@mui/material";
import { signOut } from "next-auth/react";

export default function Usertab() {
  const { user, setBackDropOpen } = useContext(MyContext);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrent(window.location.pathname);
    }
  }, []);

  const logout = () => {
    setBackDropOpen(true);
    signOut();
  };
  return (
    <div className="lg:w-1/4 md:w-1/3 md:px-3">
      <div className="relative md:-mt-48 -mt-32">
        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
          <div className="profile-pic text-center mb-5">
            {/* <input
              id="pro-img"
              name="profile-image"
              type="file"
              className="hidden"
              onChange={(e) => handleChange(e)}
            /> */}
            <div>
              <div className="relative h-28 w-28 mx-auto">
                {!user ? (
                  <Skeleton variant="circular" height={100} />
                ) : (
                  <Avatar
                    sx={{
                      bgcolor: "green",
                      height: "100px",
                      width: "100%",
                      fontSize: "40px",
                    }}
                  >
                    {user && user.name ? user.name.slice(0, 1) : "A"}
                  </Avatar>
                  //   <Image
                  //     src={file}
                  //     width={0}
                  //     height={0}
                  //     sizes="100vw"
                  //     style={{ width: "100%", height: "auto" }}
                  //     className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                  //     id="profile-image"
                  //     alt=""
                  //   />
                )}
                {/* <label
                  className="absolute inset-0 cursor-pointer"
                  htmlFor="pro-img"
                ></label> */}
              </div>

              <div className="mt-4">
                {!user ? (
                  <Skeleton variant="rounded" height={50} />
                ) : (
                  <>
                    <h5 className="text-lg font-semibold">
                      {user && user.name ? user.name : "Name"}
                    </h5>
                    <p className="text-slate-400">
                      {user && user.name ? user.email : "email"}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-700">
            <ul className="list-none sidebar-nav mb-0 pb-0" id="navmenu-nav">
              <li
                className={`navbar-item account-menu ms-0 ${
                  current === "/user/account" ? "active" : ""
                }`}
              >
                <Link
                  href="/user-account"
                  className="navbar-link text-slate-400 flex items-center py-2 rounded"
                >
                  <span className="me-2 mb-0">
                    <FiAirplay className="size-4"></FiAirplay>
                  </span>
                  <h6 className="mb-0 font-medium">Account</h6>
                </Link>
              </li>

              <li
                className={`navbar-item account-menu ms-0 ${
                  current === "/user-billing" ? "active" : ""
                }`}
              >
                <Link
                  href="/user-billing"
                  className="navbar-link text-slate-400 flex items-center py-2 rounded"
                >
                  <span className="me-2 mb-0">
                    <FiEdit className="size-4"></FiEdit>
                  </span>
                  <h6 className="mb-0 font-medium">Billing Info</h6>
                </Link>
              </li>

              <li
                className={`navbar-item account-menu ms-0 ${
                  current === "/user-payment" ? "active" : ""
                }`}
              >
                <Link
                  href="/user-payment"
                  className="navbar-link text-slate-400 flex items-center py-2 rounded"
                >
                  <span className="me-2 mb-0">
                    <FiCreditCard className="size-4"></FiCreditCard>
                  </span>
                  <h6 className="mb-0 font-medium">Payment</h6>
                </Link>
              </li>

              <li
                className={`navbar-item account-menu ms-0 ${
                  current === "/user-invoice" ? "active" : ""
                }`}
              >
                <Link
                  href="/user-invoice"
                  className="navbar-link text-slate-400 flex items-center py-2 rounded"
                >
                  <span className="me-2 mb-0">
                    <FiFileText className="size-4"></FiFileText>
                  </span>
                  <h6 className="mb-0 font-medium">Invoice</h6>
                </Link>
              </li>

              <li
                className={`navbar-item account-menu ms-0 ${
                  current === "/user-social" ? "active" : ""
                }`}
              >
                <Link
                  href="/user-social"
                  className="navbar-link text-slate-400 flex items-center py-2 rounded"
                >
                  <span className="me-2 mb-0">
                    <FiShare2 className="size-4"></FiShare2>
                  </span>
                  <h6 className="mb-0 font-medium">Social Profile</h6>
                </Link>
              </li>

              <li
                className={`navbar-item account-menu ms-0 ${
                  current === "/user-notification" ? "active" : ""
                }`}
              >
                <Link
                  href="/user-notification"
                  className="navbar-link text-slate-400 flex items-center py-2 rounded"
                >
                  <span className="me-2 mb-0">
                    <FiBell className="size-4"></FiBell>
                  </span>
                  <h6 className="mb-0 font-medium">Notifications</h6>
                </Link>
              </li>

              <li
                className={`navbar-item account-menu ms-0 ${
                  current === "/user-setting" ? "active" : ""
                }`}
              >
                <Link
                  href="/user-setting"
                  className="navbar-link text-slate-400 flex items-center py-2 rounded"
                >
                  <span className="me-2 mb-0">
                    <FiSettings className="size-4"></FiSettings>
                  </span>
                  <h6 className="mb-0 font-medium">Settings</h6>
                </Link>
              </li>

              <li
                className={`navbar-item account-menu ms-0`}
                // ${ current === "/lock-screen" ? "active" : ""  }
              >
                <button
                  onClick={logout}
                  className="navbar-link text-slate-400 flex items-center py-2 rounded"
                >
                  <span className="me-2 mb-0">
                    <FiLogOut className="size-4"></FiLogOut>
                  </span>
                  <h6 className="mb-0 font-medium">Sign Out</h6>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
