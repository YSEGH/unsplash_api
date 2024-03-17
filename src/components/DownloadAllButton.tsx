import { PhotosContext } from "@/contexts/PhotosContext";
import { Button } from "@mui/material";
import React, { useContext } from "react";

type Props = {};

const DownloadAllButton = ({}: Props) => {
  const { downloadAllPhotos, favorites } = useContext(PhotosContext);

  return (
    <Button onClick={() => downloadAllPhotos(favorites)}>
      DownloadAllButton
    </Button>
  );
};

export default DownloadAllButton;
