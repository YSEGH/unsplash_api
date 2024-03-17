import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarContext } from "@/contexts/SearchContext";
import { PhotosContext } from "@/contexts/PhotosContext";

type Props = {};

export interface SearchParams {
  page: number;
  query?: string;
  color?: string;
  orientation?: string;
}

const SubmitButton = ({}: Props) => {
  const { searchColor, searchOrientation, searchQuery } =
    useContext(SearchBarContext);
  const { getPhotosBySearch, getPhotos } = useContext(PhotosContext);

  const onClickHandler = () => {
    let params: SearchParams = {
      page: 1,
    };
    if (searchQuery) {
      params.query = searchQuery;

      if (searchOrientation) {
        params.orientation = searchOrientation;
      }

      if (searchColor) {
        params.color = searchColor;
      }

      console.log(params);
      getPhotosBySearch(params, true);
      return;
    }
    getPhotos(params, true);
  };

  return (
    <Box
      width={66}
      height={1}
      sx={{ padding: "4px" }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-end"}
    >
      <Button
        sx={{
          outline: "none",
          height: 60,
          width: 60,
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
      >
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SubmitButton;
