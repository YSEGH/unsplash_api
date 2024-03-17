"use client";

import { Box } from "@mui/material";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";
import { useMediaQuery } from "@mui/material";

const SearchBar = () => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <Box
      paddingX={4}
      paddingY={3}
      marginBottom={2}
      display={"flex"}
      justifyContent={"center"}
      boxShadow={"rgb(0 0 0/8%) 0 1px 0"}
    >
      {isMobile ? <MobileSearchBar /> : <DesktopSearchBar />}
    </Box>
  );
};

export default SearchBar;
