import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import { BackdropContext } from "@/contexts/BackdropContext";

type Props = {};

const PhotoBackdrop = ({}: Props) => {
  const { open, setOpen, activePhoto } = useContext(BackdropContext);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={() => setOpen(!open)}
    >
      {activePhoto && (
        <img
          src={activePhoto.urls.regular}
          alt={activePhoto.alt_description}
          style={{
            maxHeight: "90vh",
            maxWidth: "90vw",
            objectFit: "contain",
          }}
        />
      )}
    </Backdrop>
  );
};

export default PhotoBackdrop;
