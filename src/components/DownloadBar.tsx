import { Box } from "@mui/material";
import React, { useContext } from "react";
import DownloadAllButton from "./DownloadAllButton";
import { PhotosContext } from "@/contexts/PhotosContext";

type Props = {};

const DownloadBar = (props: Props) => {
  return (
    <Box
      paddingX={4}
      paddingBottom={2}
      marginBottom={2}
      display={"flex"}
      justifyContent={"flex-end"}
      boxShadow={"rgb(0 0 0/8%) 0 1px 0"}
    >
      <DownloadAllButton />
    </Box>
  );
};

export default DownloadBar;
