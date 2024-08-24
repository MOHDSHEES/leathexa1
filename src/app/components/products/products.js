"use client";
import React, { useCallback, useEffect, useState } from "react";
import Card from "../card/card";
import { Box, IconButton, Pagination, Skeleton } from "@mui/material";
import FilterDrawer from "./filterDrawer";
import FilterListIcon from "@mui/icons-material/FilterList";
import axios from "axios";
import ProductsNotFound from "./productsNotFound";
import { usePathname, useSearchParams } from "next/navigation";

const Products = ({
  data,
  category,
  total,
  limit,
  filteredUrl,
  page: currentPage,
}) => {
  const [products, setProducts] = useState(data);
  const [totalProducts, setTotalProducts] = useState(total);
  const [loading, setLoading] = useState(false);
  const [disabledPagination, setDisabledPagination] = useState(false);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(currentPage);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setProducts(data);
    setTotalProducts(total);
  }, [data]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange = (event, value) => {
    setPage(value);
    window.history.replaceState(
      null,
      "",
      `${pathname}?${createQueryString("page", value)}`
    );
    getFilteredData(null, value);
  };

  async function getFilteredData(filter, pageValue) {
    setDisabledPagination(true);
    setLoading(true);
    setPage(pageValue);
    const { data } = await axios.post("/api/product/filteredData", {
      filter: filter,
      gender: category,
      page: pageValue ? pageValue : page,
      limit: limit,
    });
    // console.log(data);
    if (data.status === 200) {
      setProducts(data.data);
      if (data.totalCount) setTotalProducts(data.totalCount);
    }
    setDisabledPagination(false);
    setLoading(false);
  }

  //   console.log(products);
  return (
    // <MainLayout>
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-6">
          {/* <Filter category={category} /> */}
          <div className="lg:col-span-12 md:col-span-12">
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold">
                Showing{" "}
                {loading ? " ..." : products.length + (page - 1) * limit} of{" "}
                {totalProducts} items
              </span>

              <div className="flex items-center" style={{ marginLeft: "auto" }}>
                <IconButton
                  className="dark:text-white"
                  onClick={toggleDrawer(true)}
                  aria-label="Filter"
                >
                  <FilterListIcon />
                </IconButton>
                {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
              </div>
              {/* <div className="md:flex items-center">
                  <label className="font-semibold md:me-2">Sort by:</label>
                  <select className="form-select form-input md:w-36 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                    <option defaultValue="">Featured</option>
                    <option defaultValue="">Sale</option>
                    <option defaultValue="">Alfa A-Z</option>
                    <option defaultValue="">Alfa Z-A</option>
                    <option defaultValue="">Price Low-High</option>
                    <option defaultValue="">Price High-Low</option>
                  </select>
                </div> */}
            </div>
            {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-6"> */}
            {loading ? (
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-6">
                {[...Array(4)].map((_, index) => (
                  <Skeleton key={index} variant="rounded" height={400} />
                ))}
              </div>
            ) : totalProducts ? (
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-6">
                {products.map((item, index) => {
                  return <Card item={item} key={index} />;
                })}
              </div>
            ) : (
              <ProductsNotFound />
            )}
            {/* </div> */}
            {!!totalProducts && totalProducts > limit && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Pagination
                  count={Math.ceil(totalProducts / limit)}
                  page={page}
                  disabled={disabledPagination}
                  onChange={handleChange}
                  className="dark:text-white"
                  sx={{
                    ".MuiPaginationItem-root": {
                      color: "inherit", // This will inherit the color from Tailwind
                    },
                    "& .MuiPaginationItem-root.Mui-selected": {
                      color: "white", // Selected page number text color
                      backgroundColor: "primary.main",
                    },
                  }}
                  // disabled={disabledPagination}
                />
              </Box>
            )}
          </div>
        </div>
      </div>
      <FilterDrawer
        open={open}
        setOpen={setOpen}
        category={category}
        getFilteredData={getFilteredData}
        page={page}
        setPage={setPage}
        filteredUrl={filteredUrl}
      />
    </section>
    // </MainLayout>
  );
};

export default Products;
