import { Box, Button, CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarContext, searchContextType } from "@/contexts/SearchContext";
import { PhotosContext, photosContextType } from "@/contexts/PhotosContext";
import { REQUEST_STATUS } from "@/hooks/usePhotos";

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
      sx={{ padding: { md: "4px", sm: "0 16px", xs: "0 16px" } }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      boxSizing={"border-box"}
    >
      <Button
        sx={{
          outline: "none",
          height: { md: 60, sm: 50, xs: 50 },
          width: { md: 60, sm: 1, xs: 1 },
          minWidth: 0,
          backgroundColor: "#b58cff",
          borderRadius: 16,
          color: "#fff",
          padding: 0,
          "&:hover": {
            backgroundColor: "#8555dc",
          },
        }}
        onClick={onClickHandler}
        disabled={requestStatus === REQUEST_STATUS.LOADING}
      >
        {requestStatus === REQUEST_STATUS.LOADING ? (
          <CircularProgress sx={{ color: "#fff" }} size={20} />
        ) : (
          <SearchIcon sx={{ color: "#fff" }} />
        )}
      </Button>
    </Box>
  );
};

export default SubmitButton;
