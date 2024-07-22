"use client";
import React, { useContext, useState } from "react";
import AddressModel from "../model/addressModel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";

const Address = ({ name, address, userName }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="">
        <div className="flex items-center mb-4 justify-between">
          <h5 className="text-xl font-medium">{name} Address:</h5>
          <Button
            onClick={() => setOpen(true)}
            className="text-orange-500 text-lg"
          >
            <EditIcon fontSize="small" />
            {/* <FiEdit onClick={() => setOpen(true)} className="size-4"></FiEdit> */}
          </Button>
        </div>
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <p className="text-lg font-medium mb-2">{userName}</p>

          <ul className="list-none">
            <li className="flex ms-0">
              <LocationOnIcon className="size-4 me-2 mt-1" />

              <p className="text-slate-400">
                {address.address} <br /> {address.city}, {address.country},{" "}
                {address.postCode.toUpperCase()}
              </p>
            </li>

            <li className="flex ms-0 mt-1">
              <PhoneIcon className="size-4 me-2 mt-1" />
              <p className="text-slate-400">{address.mobileNo}</p>
            </li>
          </ul>
        </div>
      </div>
      <AddressModel
        open={open}
        setOpen={setOpen}
        name={name}
        address={address}
      />
    </>
  );
};

export default Address;
