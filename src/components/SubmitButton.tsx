import { Box, Button, CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarContext, searchContextType } from "@/contexts/SearchContext";
import { PhotosContext, photosContextType } from "@/contexts/PhotosContext";
import { REQUEST_STATUS } from "@/hooks/usePhotos";
import { boxStyle, buttonStyle, iconStyle } from "@/style/SubmitButtonStyle";

type Props = { cb?: (() => void) | null };

export interface SearchParams {
  page: number;
  query?: string;
  color?: string;
  orientation?: string;
}

const SubmitButton = ({ cb = null }: Props) => {
  const { searchColor, searchOrientation, searchQuery, setErrorSearch } =
    useContext<searchContextType>(SearchBarContext);
  const { getPhotosBySearch, requestStatus } =
    useContext<photosContextType>(PhotosContext);

  const onClickHandler = () => {
    let params: SearchParams = {
      page: 1,
    };

    if (!searchQuery) {
      setErrorSearch(true);
      return;
    }
    if (searchQuery) {
      params.query = searchQuery;

      if (searchOrientation) {
        params.orientation = searchOrientation.name;
      }

      if (searchColor) {
        params.color = searchColor.name;
      }
      getPhotosBySearch(params, true);
      if (cb) {
        cb();
      }
      return;
    }
    if (cb) {
      cb();
    }
  };

  return (
    <Box
      width={{ md: 66, sm: 1, xs: 1 }}
      height={{ md: 1, sm: "fit-content", xs: "fit-content" }}
      sx={boxStyle}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      boxSizing={"border-box"}
    >
      <Button
        sx={buttonStyle}
        onClick={onClickHandler}
        disabled={requestStatus === REQUEST_STATUS.LOADING}
      >
        {requestStatus === REQUEST_STATUS.LOADING ? (
          <CircularProgress sx={iconStyle} size={20} />
        ) : (
          <SearchIcon sx={iconStyle} />
        )}
      </Button>
    </Box>
  );
};

export default SubmitButton;
