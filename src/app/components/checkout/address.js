"use client";
import React, { useContext, useState } from "react";
import { Alert, Button } from "@mui/material";
import Address from "../user/address";
import AddressModel from "../model/addressModel";
import { MyContext } from "@/src/context";

const Addresses = () => {
  const { user } = useContext(MyContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="lg:col-span-8">
        <div className="p-6 rounded-md shadow dark:shadow-gray-800">
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
              You haven't added a billing or shipping address yet. Click here to
              add your address.
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
          <h3 className="text-xl leading-normal font-semibold mt-6">Payment</h3>

          <form>
            <div>
              <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                <div className="lg:col-span-12">
                  <div className="block">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                          name="radio-colors"
                          value="1"
                          readOnly
                          defaultChecked
                        />
                        <span className="text-slate-400">Credit card</span>
                      </label>
                    </div>
                  </div>

                  <div className="block mt-2">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                          name="radio-colors"
                          value="1"
                          readOnly
                        />
                        <span className="text-slate-400">Debit Card</span>
                      </label>
                    </div>
                  </div>

                  <div className="block mt-2">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                          name="radio-colors"
                          value="1"
                          readOnly
                        />
                        <span className="text-slate-400">PayPal</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <label className="form-label font-semibold">
                    Account Holder Name :{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                    placeholder="Name:"
                    id="accountname"
                    name="name"
                    required=""
                  />
                </div>

                <div className="lg:col-span-6">
                  <label className="form-label font-semibold">
                    Credit card number : <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                    placeholder="**** **** **** ****"
                    id="cardnumber"
                    name="number"
                    required=""
                  />
                </div>

                <div className="lg:col-span-3">
                  <label className="form-label font-semibold">
                    Expiration : <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                    placeholder=""
                    id="expiration"
                    name="number"
                    required=""
                  />
                </div>

                <div className="lg:col-span-3">
                  <label className="form-label font-semibold">
                    CVV : <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 mt-2"
                    placeholder=""
                    id="cvv"
                    name="number"
                    required=""
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="mt-4">
            <input
              type="submit"
              className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md w-full"
              value="Continue to checkout"
            />
          </div>
        </div>
      </div>
      <AddressModel
        open={open}
        setOpen={setOpen}
        name="Billing"
        newAddress={true}
      />
    </>
  );
};

export default Addresses;
