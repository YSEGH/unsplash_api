import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { SearchBarContext, searchContextType } from "@/contexts/SearchContext";
import { PhotosContext, photosContextType } from "@/contexts/PhotosContext";
type Props = {};

const ResetButton = ({}: Props) => {
  const {
    setSearchColor,
    setSearchOrientation,
    setSearchQuery,
    setErrorSearch,
  } = useContext<searchContextType>(SearchBarContext);
  const { getPhotos } = useContext<photosContextType>(PhotosContext);

  const onClickHandler = () => {
    setSearchColor(null);
    setSearchOrientation(null);
    setSearchQuery("");
    setErrorSearch(false);
    getPhotos({ page: 1 }, true);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      height={66}
      width={{ md: "fit-content", sm: 1, xs: 1 }}
      padding={"4px"}
      boxSizing={"border-box"}
      marginLeft={{ md: 2, sm: 0, xs: 0 }}
      paddingX={{ md: 0, sm: 2, xs: 2 }}
    >
      <Button
        sx={{
          outline: "none",
          height: { md: 60, sm: 50, xs: 50 },
          width: { md: 60, sm: 1, xs: 1 },
          minWidth: 0,
          border: "1px solid #b58cff",
          borderRadius: 16,
          color: "#fff",
          padding: 0,
          "&:hover": {
            backgroundColor: "#8555dc",
            border: "1px solid #8555dc",
            svg: {
              fill: "#fff",
            },
          },
        }}
        onClick={onClickHandler}
      >
        <RestartAltIcon sx={{ fill: "#b58cff" }} />
      </Button>
    </Box>
  );
};

export default ResetButton;
