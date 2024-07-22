"use client";
import React, { useContext, useState } from "react";

// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import ScrollToTop from "../components/scroll-to-top";
import Usertab from "../../components/user/user-tab";
import Switcher from "../../components/switcher";
import Address from "../../components/user/address";
import { MyContext } from "@/src/context";
import { Alert, Button } from "@mui/material";
import AddressModel from "../../components/model/addressModel";

export default function UserBilling() {
  const { user } = useContext(MyContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Navbar navClass="defaultscroll is-sticky"/> */}
      <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
        <div className="md:container container-fluid relative">
          <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-700 h-52 bg-[url('/images/hero/pages.jpg')] bg-center bg-no-repeat bg-cover"></div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="md:flex">
            <Usertab />

            <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                <h6 className="text-slate-400 mb-0">
                  The following addresses will be used on the checkout page by
                  default.
                </h6>
                {user && user.billingAddress ? (
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    <Address
                      name="Billing"
                      address={user.billingAddress}
                      userName={user.name}
                    />
                    <Address
                      name="Shipping"
                      address={user.shippingAddress}
                      userName={user.name}
                    />
                  </div>
                ) : (
                  <Alert sx={{ mt: 2 }} severity="info">
                    You haven't added a billing or shipping address yet. Click
                    here to add your address.
                    <br />
                    <Button
                      onClick={() => setOpen(true)}
                      sx={{ mt: 1 }}
                      variant="outlined"
                    >
                      Add Address
                    </Button>
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddressModel
        open={open}
        setOpen={setOpen}
        name="Billing"
        newAddress={true}
      />
      {/* <Footer/> */}
      <Switcher />
      {/* <ScrollToTop/> */}
    </>
  );
}
