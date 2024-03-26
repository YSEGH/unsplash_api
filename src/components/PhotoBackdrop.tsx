import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import { BackdropContext } from "@/contexts/BackdropContext";
import { backdropStyle, imageStyle } from "@/style/PhotoBackdropStyle";

type Props = {};

const PhotoBackdrop = ({}: Props) => {
  const { open, setOpen, activePhoto } = useContext(BackdropContext);

  return (
    <Backdrop sx={backdropStyle} open={open} onClick={() => setOpen(!open)}>
      {activePhoto && (
        <img
          src={activePhoto.urls.regular}
          alt={activePhoto.alt_description}
          style={imageStyle}
        />
      )}
    </Backdrop>
  );
};

export default PhotoBackdrop;
