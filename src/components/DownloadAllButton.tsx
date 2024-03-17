import { PhotosContext } from "@/contexts/PhotosContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { Button, SxProps } from "@mui/material";
import React, { useContext } from "react";

type Props = {};

const DownloadAllButton = ({}: Props) => {
  const { theme } = useContext(ThemeContext);
  const { downloadAllPhotos, favorites } = useContext(PhotosContext);

  return (
    <Button
      className={`${theme}-mode`}
      sx={buttonStyle}
      onClick={() => downloadAllPhotos(favorites)}
    >
      Tout télécharger
    </Button>
  );
};

export default DownloadAllButton;

const buttonStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  height: 50,
  borderRadius: 16,
  paddingX: 4,
  color: "#b58cff",
  border: "1px solid rgb(181, 140, 255)",
  "&.light-mode": {
    backgroundColor: "#FFF",
    "&:hover": {
      backgroundColor: "#EBEBEB",
    },
  },
  "&.dark-mode": {
    backgroundColor: "rgb(30, 30, 37)",
    "&:hover": {
      backgroundColor: "rgb(18, 18, 23)",
    },
  },
};
