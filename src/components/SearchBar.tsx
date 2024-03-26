"use client";

import { Box, Skeleton, Typography } from "@mui/material";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";
import { useMediaQuery } from "@mui/material";
import { SearchBarContext } from "@/contexts/SearchContext";
import { memo, useContext, useEffect, useState } from "react";
import {
  circularSkeletonStyle,
  roundedSkeletonStyle,
} from "@/style/SearchBarStyle";

const SearchBar = ({}) => {
  const [loading, setLoading] = useState(true);
  const { errorSearch } = useContext(SearchBarContext);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  useEffect(() => {
    setLoading(false);
    return () => {};
  }, []);

  if (loading) {
    return (
      <Box
        paddingX={0}
        paddingY={3}
        marginBottom={2}
        display={"flex"}
        justifyContent={"center"}
        gap={2}
        boxShadow={"rgb(0 0 0/8%) 0 1px 0"}
      >
        <Skeleton
          variant="rounded"
          width={600}
          height={66}
          sx={roundedSkeletonStyle}
        />
        <Skeleton variant="circular" sx={circularSkeletonStyle} />
      </Box>
    );
  }

  return (
    <Box
      paddingX={0}
      paddingY={3}
      marginBottom={2}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      boxShadow={"rgb(0 0 0/8%) 0 1px 0"}
    >
      {isMobile ? <MobileSearchBar /> : <DesktopSearchBar />}
      {errorSearch && (
        <Box height={20} marginTop={2}>
          <Typography
            color={"red"}
            textAlign={"center"}
            fontSize={14}
            fontWeight={200}
          >
            Merci de saisir un mot clé.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default memo(SearchBar);
