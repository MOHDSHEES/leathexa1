import React from "react";
import { FiSearch } from "../../assets/icons/vander";
import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import { Unstable_Grid2 as Grid } from "@mui/material";

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
      {/* {isOpen && (
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
      )} */}
    </>
  );
};

export default NavSearch;

export function SearchInput() {
  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Autocomplete
          //   multiple
          id="product"
          sx={{
            width: "100%",
            "& .MuiAutocomplete-endAdornment": {
              display: "none", // Hide the dropdown indicator
            },
          }}
          // getOptionLabel={
          //   // typeof option === "string"
          //   //   ? option
          //   //   : `${option.shelfName} (${
          //   //       option.shelfPath && option.shelfPath.length === 1
          //   //         ? "Parent Shelf"
          //   //         : option.shelfPath && option.shelfPath.length > 0
          //   //         ? option.shelfPath.join(" > ")
          //   //         : "-"
          //       // })`
          // }
          //   filterOptions={(x) => x}
          options={["12", "23"]}
          autoComplete
          includeInputInList
          filterSelectedOptions
          // value={selectedValue}
          // noOptionsText={
          //   loading
          //     ? "Loading..."
          //     : !options.length && inputValue
          //     ? "No shelf found"
          //     : "Start Typing shelf Name"
          // }
          onChange={(event, newValue) => {
            // setSelectedValue(newValue);
            // if (newValue && newValue.retailPrice) {
            //   const discount = parseFloat(state.discount);
            //   const price =
            //     newValue.retailPrice - newValue.retailPrice * (discount / 100);
            //   setState({
            //     ...state,
            //     price: price,
            //     comment: "",
            //     shelf: "",
            //   });
            // } else setState({ ...state, price: 1, comment: "", shelf: "" });
            // setSelectedShelf("");
            // setState({ ...state, comment: "", shelf: "" });
          }}
          onInputChange={(event, newInputValue) => {
            // setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              autoFocus
              label="Search"
              fullWidth
              required
            />
          )}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option}>
                <Grid container alignItems="center">
                  <Grid
                    sx={{
                      wordWrap: "break-word",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {option}
                      {/* {`${option.shelfName} (${
                    option.shelfPath && option.shelfPath.length === 1
                      ? "Parent Shelf"
                      : option.shelfPath && option.shelfPath.length > 0
                      ? option.shelfPath.join(" > ")
                      : "-"
                  })`} */}
                    </Typography>
                  </Grid>
                </Grid>
              </li>
            );
          }}
        />
      </Stack>
    </>
  );
}
