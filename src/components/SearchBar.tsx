"use client";

import { Box, Skeleton, Typography } from "@mui/material";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";
import { useMediaQuery } from "@mui/material";
import { SearchBarContext } from "@/contexts/SearchContext";
import { useContext, useEffect, useState } from "react";

const SearchBar = () => {
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
          sx={{
            borderRadius: 60,
            display: { md: "block", sm: "none", xs: "none" },
          }}
        />
        <Skeleton
          variant="circular"
          sx={{
            width: { md: 66, sm: 50, xs: 50 },
            height: { md: 66, sm: 50, xs: 50 },
          }}
        />
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

export default SearchBar;
