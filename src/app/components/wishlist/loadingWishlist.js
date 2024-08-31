import { Skeleton, Stack } from "@mui/material";
import React from "react";

const LoadingWishlist = () => {
  return (
    <Stack sx={{ pt: 2, pb: 2 }} spacing={1}>
      <Skeleton variant="rounded" height={100} />
      <Skeleton variant="rounded" height={100} />
    </Stack>
  );
};

export default LoadingWishlist;
