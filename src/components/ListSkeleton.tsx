import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

type Props = {};

const ListSkeleton = ({}: Props) => {
  return (
    <Box width={1} paddingX={{ md: 4, sm: 0, xs: 0 }} paddingBottom={2}>
      <Grid
        container
        width={1}
        spacing={{ md: 2, sm: 2, xs: 1 }}
        sx={{ paddingLeft: { md: 0, sm: 0, xs: 1 } }}
      >
        {Array.from(Array(30).keys()).map((item) => (
          <Grid key={item} item md={4} sm={3} xs={1} height={350}>
            <Skeleton
              sx={{ backgroundColor: "grey" }}
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