import { PhotosContext } from "@/contexts/PhotosContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { buttonStyle } from "@/style/DownloadAllButtonStyle";
import { Button, CircularProgress } from "@mui/material";
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
        <CircularProgress sx={{ color: "#b58cff" }} size={20} />
      ) : (
        "Tout télécharger"
      )}
    </Button>
  );
};

export default DownloadAllButton;
