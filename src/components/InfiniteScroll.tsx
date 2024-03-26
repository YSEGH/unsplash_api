import { PhotosContext } from "@/contexts/PhotosContext";
import { SearchBarContext } from "@/contexts/SearchContext";
import { REQUEST_STATUS } from "@/hooks/usePhotos";
import { Box, Typography } from "@mui/material";
import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { SearchParams } from "./SubmitButton";
import { debounce } from "throttle-debounce";
import ListSkeleton from "./ListSkeleton";

type Props = {};

const InfiniteScroll = ({}: Props) => {
  const lastInViewStatus = useRef<boolean>(false);
  const { ref, inView } = useInView({ initialInView: true });
  const { searchColor, searchOrientation, searchQuery } =
    useContext(SearchBarContext);
  const {
    moreContent,
    photos,
    getPhotos,
    page,
    requestStatus,
    getPhotosBySearch,
  } = useContext(PhotosContext);

  const onScrollHandler = useCallback(
    debounce(200, () => {
      if (
        inView &&
        requestStatus !== REQUEST_STATUS.LOADING &&
        !lastInViewStatus.current
      ) {
        let params: SearchParams = { page: page + 1 };

        if (searchQuery) {
          params.query = searchQuery;

          if (searchOrientation) {
            params.orientation = searchOrientation.name;
          }

          if (searchColor) {
            params.color = searchColor.name;
          }
          getPhotosBySearch(params);
        } else {
          getPhotos(params);
        }
      }

      if (lastInViewStatus.current !== inView) {
        lastInViewStatus.current = inView;
      }
    }),
    [
      getPhotos,
      getPhotosBySearch,
      inView,
      page,
      requestStatus,
      searchColor,
      searchOrientation,
      searchQuery,
    ]
  );

  useEffect(() => {
    document.addEventListener("scroll", onScrollHandler);
    return () => {
      document.removeEventListener("scroll", onScrollHandler);
    };
  }, [onScrollHandler]);

  useEffect(() => {
    return () => {};
  }, [moreContent, photos]);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <Box
        height={150}
        width={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography fontSize={18}>Une erreur est survenue.</Typography>
      </Box>
    );
  }

  if (requestStatus === REQUEST_STATUS.SUCCESS && photos.length === 0) {
    return (
      <Box
        height={150}
        width={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography fontSize={18}>Aucun résultat.</Typography>
      </Box>
    );
  }

  if (!moreContent && requestStatus === REQUEST_STATUS.SUCCESS) {
    return (
      <Box
        height={150}
        width={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography fontSize={18}>Pas de contenu supplémentaire.</Typography>
      </Box>
    );
  }

  if (requestStatus === REQUEST_STATUS.SUCCESS) {
    return (
      <Box
        ref={ref}
        height={150}
        width={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography fontSize={18}>Charger plus de contenu.</Typography>
      </Box>
    );
  }

  return (
    <Box
      width={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <ListSkeleton />
    </Box>
  );
};

export default InfiniteScroll;
