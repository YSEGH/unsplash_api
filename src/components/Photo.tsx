import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import AddToFavoriteButton from "./AddToFavoriteButton";
import { PhotoProvider } from "@/contexts/PhotoContext";
import { boxStyle, imageStyle, titleStyle } from "@/style/PhotoStyle";

type Props = {
  photo: any;
  isActive: boolean;
  addToFavorite: (photo: any, cb: () => void) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActivePhoto: (photo: any) => void;
};

const isAlreadyActive = (prevProps: any, nextProps: any) => {
  return prevProps.isActive === nextProps.isActive;
};

const Photo: React.FC<Props> = memo(function Photo({
  photo,
  isActive,
  addToFavorite,
  setActivePhoto,
  setOpen,
}: Props) {
  return (
    <PhotoProvider photo={photo} addToFavorite={addToFavorite}>
      <Box
        position={"relative"}
        height={1}
        sx={boxStyle}
        onClick={() => {
          setOpen(true);
          setActivePhoto({
            id: photo.id,
            urls: photo.urls,
            alt_description: photo.alt_description,
          });
        }}
      >
        <Typography sx={titleStyle}>{photo.title}</Typography>
        <img
          style={imageStyle}
          src={photo.urls.regular}
          alt={photo.alt_description}
          loading="lazy"
        />
        <Box position={"absolute"} bottom={0} right={0}>
          <AddToFavoriteButton isActive={isActive} />
        </Box>
      </Box>
    </PhotoProvider>
  );
},
isAlreadyActive);

export default Photo;
