import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { SearchBarContext, searchContextType } from "@/contexts/SearchContext";
import { PhotosContext, photosContextType } from "@/contexts/PhotosContext";
import { buttonStyle, iconStyle } from "@/style/ResetButtonStyle";
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
      <Button sx={buttonStyle} onClick={onClickHandler}>
        <RestartAltIcon sx={iconStyle} />
      </Button>
    </Box>
  );
};

export default ResetButton;
