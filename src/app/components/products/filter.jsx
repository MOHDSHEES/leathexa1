import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { FiSearch } from "../../assets/icons/vander";
import {
  categoriesFilter,
  colorFilter,
  genders,
  sizeFilter,
} from "../../data/filters";
import { Button, Chip, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Filter({ category, setOpen, filter, applyFilter }) {
  const [filterTemp, setFilterTemp] = useState(filter);

  useEffect(() => {
    setFilterTemp(filter);
  }, [filter]);

  function onChangeFilter(name, value) {
    setFilterTemp((prevState) => {
      const updatedArray = prevState[name].includes(value)
        ? prevState[name].filter((item) => item !== value) // Remove the value if it already exists
        : [...prevState[name], value]; // Add the value if it doesn't exist

      return {
        ...prevState,
        [name]: updatedArray,
      };
    });
  }

  function handleClose() {
    setOpen(false);
    setFilterTemp(filter);
  }
  return (
    // <div className="lg:col-span-3 md:col-span-4">
    //   <div className="rounded shadow dark:shadow-gray-800 p-4 sticky top-20">
    <div className="p-6">
      <div className="flex items-center">
        <h5 className="text-xl font-medium dark:text-white">Filter</h5>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={handleClose}
          aria-label="close"
          className="dark:text-white"
        >
          <CloseIcon />
        </IconButton>
      </div>

      {/* <form className="mt-4">
          <div>
            <label htmlFor="searchname" className="font-medium">
              Search:
            </label>
            <div className="relative mt-2">
              <FiSearch className="absolute size-4 top-[9px] end-4"></FiSearch>
              <input
                type="text"
                className="h-9 pe-10 rounded px-3 border border-gray-100 dark:border-gray-800 focus:ring-0 outline-none bg-white dark:bg-slate-900"
                name="s"
                id="searchItem"
                placeholder="Search..."
              />
            </div>
          </div>
        </form> */}
      <div className="mt-4">
        <h5 className="font-medium dark:text-white">Gender:</h5>
        <ul className="list-none mt-2 space-x-1">
          {genders.map((item, index) => {
            return (
              <li className="inline" key={index}>
                <Link href={`/products/${item}`}>
                  <Chip
                    color={category === item ? "primary" : "default"}
                    label={item}
                    variant="outlined"
                    className={`dark:text-white ${
                      category === item && "dark:border-orange-500"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4">
        <h5 className="font-medium dark:text-white">Colors:</h5>
        <ul className="list-none mt-2 space-x-1">
          {colorFilter.map((item, index) => {
            return (
              <li
                onClick={() => onChangeFilter("color", item)}
                key={index}
                className="inline"
              >
                <button
                  style={{ background: item }}
                  className={`size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 inline-flex align-middle ${
                    filterTemp.color.includes(item) &&
                    "ring-orange-500 dark:ring-white"
                  }`}
                  title={item}
                ></button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4">
        <h5 className="font-medium dark:text-white">Category:</h5>
        <ul className="list-none mt-2">
          {categoriesFilter.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => onChangeFilter("category", item)}
                className="ms-0"
              >
                <button
                  className={`hover:text-black dark:hover:text-orange-500 ${
                    filterTemp.category.includes(item)
                      ? "text-orange-500 dark:text-orange-500"
                      : "text-slate-400 dark:text-gray-100"
                  }`}
                >
                  <i className="mdi mdi-shopping-outline text-orange-500 me-2"></i>
                  {/* <ArrowRightIcon /> */}
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4">
        <h5 className="font-medium dark:text-white">Sizes:</h5>
        <ul className="list-none mt-2 space-x-1">
          {sizeFilter.map((item, index) => {
            return (
              <li
                onClick={() => onChangeFilter("size", item)}
                className="inline"
                key={index}
              >
                <button
                  className={`w-10 h-7 inline-flex items-center justify-center 
                tracking-wide align-middle text-base text-center rounded-md border border-gray-100 
                dark:border-gray-800   hover:border-slate-900 
                dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 
                dark:hover:bg-slate-100 ${
                  filterTemp.size.includes(item)
                    ? "text-white bg-orange-500"
                    : "text-slate-900 dark:text-gray-50"
                }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <Button
        sx={{ width: "100%", mt: 3 }}
        variant="contained"
        className="c-primary-btn"
        onClick={() => applyFilter(filterTemp)}
      >
        Apply
      </Button>
    </div>
  );
}
