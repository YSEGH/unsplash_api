import { Box } from "@mui/material";
import React from "react";
import DownloadAllButton from "./DownloadAllButton";

type Props = {};

const DownloadBar = ({}: Props) => {
  return (
    <Box
      paddingX={4}
      paddingY={2}
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
