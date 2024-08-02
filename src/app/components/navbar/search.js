import React from "react";
import { FiSearch } from "../../assets/icons/vander";

const NavSearch = ({ isOpen, navlight, setIsOpen }) => {
  return (
    <>
      <button
        data-dropdown-toggle="dropdown"
        className="dropdown-toggle align-middle inline-flex search-dropdown"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {navlight === true ? (
          <>
            <FiSearch className="size-5 dark-icon"></FiSearch>
            <FiSearch className="size-5 white-icon text-white"></FiSearch>
          </>
        ) : (
          <FiSearch className="size-5"></FiSearch>
        )}
      </button>
      {isOpen && (
        <div
          className={`dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800`}
        >
          <div className="relative">
            <FiSearch className="absolute size-4 top-[9px] end-3"></FiSearch>
            <input
              type="text"
              className="h-9 px-3 pe-10 w-full border-gray-100 dark:border-gray-800 focus:ring-0 outline-none bg-white dark:bg-slate-900"
              name="s"
              id="searchItem"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavSearch;
