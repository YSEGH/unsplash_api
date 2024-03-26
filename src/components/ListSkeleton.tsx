import { gridStyle, skeletonStyle } from "@/style/ListSkeletonStyle";
import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

type Props = {};

const ListSkeleton = ({}: Props) => {
  return (
    <Box
      width={1}
      paddingX={{ md: 4, sm: 2, xs: 2 }}
      paddingBottom={2}
      boxSizing={"border-box"}
    >
      <Grid
        container
        width={1}
        spacing={{ md: 2, sm: 2, xs: 1 }}
        sx={gridStyle}
      >
        {Array.from(Array(30).keys()).map((item) => (
          <Grid key={item} item md={4} sm={6} xs={12} height={350}>
            <Skeleton
              sx={skeletonStyle}
              variant="rectangular"
              width={"100%"}
              height={"100%"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListSkeleton;
