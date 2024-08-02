import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarLogo = ({ navlight }) => {
  return (
    <>
      {navlight === true ? (
        <Link className="logo" href="/">
          <span className="inline-block dark:hidden">
            <Image
              src="/images/logo/lx-logo-white.png"
              width={200}
              height={60.6}
              className="l-dark"
              alt=""
            />
            <Image
              src="/images/logo/lx-logo-white.png"
              width={200}
              height={60.6}
              className="l-light"
              alt=""
            />
          </span>
          <Image
            src="/images/logo/lx-logo-black.png"
            width={200}
            height={60.6}
            className="hidden dark:inline-block"
            alt=""
          />
        </Link>
      ) : (
        <Link className="logo" href="/">
          <div className="navlogo-container">
            {/* h-[22px] */}
            <Image
              src="/images/logo/lx-logo-black.png"
              width={200}
              // layout="responsive"
              height={60.6}
              className="inline-block dark:hidden "
              alt=""
            />
            <Image
              src="/images/logo/lx-logo-white.png"
              width={200}
              height={60.6}
              className=" hidden dark:inline-block "
              alt=""
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default NavbarLogo;
