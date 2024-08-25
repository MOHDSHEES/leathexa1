import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Filter from "./filter";

export default function FilterDrawer({
  open,
  setOpen,
  category,
  getFilteredData,
  filteredUrl,
  setPage,
}) {
  //   const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = useState({
    filteredUrl,
  });
  useEffect(() => {
    setFilter(filteredUrl);
  }, [filteredUrl]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function applyFilter(filterTemp) {
    setFilter(filterTemp);
    setOpen(false);
    updateUrlWithParams(filterTemp);
    getFilteredData(filterTemp, 1);
  }

  const updateUrlWithParams = (filter) => {
    const queryParams = {};

    // Add filter values to query parameters if they exist
    if (filter.color.length > 0) {
      queryParams.color = filter.color.join(",");
    }
    if (filter.category.length > 0) {
      queryParams.category = filter.category.join(",");
    }
    if (filter.size.length > 0) {
      queryParams.size = filter.size.join(",");
    }
    setPage(1);
    queryParams.page = 1;
    const queryParam = new URLSearchParams(queryParams).toString();
    // Update the URL without refreshing the page
    window.history.replaceState(
      null,
      "",
      `/products/${category}?${queryParam}`
    );
  };
  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box
          sx={{ width: 310 }}
          role="presentation"
          className="dark:bg-slate-800"
          //   onClick={toggleDrawer(false)}
        >
          <Filter
            category={category}
            setOpen={setOpen}
            filter={filter}
            setFilter={setFilter}
            applyFilter={applyFilter}
          />
        </Box>
      </Drawer>
    </div>
  );
}
