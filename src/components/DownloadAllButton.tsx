import { PhotosContext } from "@/contexts/PhotosContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { Button, CircularProgress, SxProps } from "@mui/material";
import React, { useContext, useState } from "react";

type Props = {};

const DownloadAllButton = ({}: Props) => {
  const [loading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { downloadAllPhotos, favorites } = useContext(PhotosContext);

  const onClickHandler = () => {
    if (!loading) {
      setLoading(true);
      downloadAllPhotos(favorites, () => setLoading(false));
    }
  };

  return (
    <Button
      className={`${theme}-mode`}
      sx={buttonStyle}
      onClick={onClickHandler}
      disabled={loading}
    >
      {loading ? (
        <CircularProgress color="inherit" size={20} />
      ) : (
        "Tout télécharger"
      )}
    </Button>
  );
};

export default DownloadAllButton;

const buttonStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  height: 66,
  width: 200,
  borderRadius: 16,
  paddingX: 4,
  color: "#b58cff",
  border: "1px solid rgb(181, 140, 255)",
  "&.light-mode": {
    backgroundColor: "#FFF",
  },
  "&.dark-mode": {
    backgroundColor: "rgb(30, 30, 37)",
    "&:hover": {
      backgroundColor: "rgb(18, 18, 23)",
    },
  },
};
