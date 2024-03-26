import { Box, Button, Paper } from "@mui/material";
import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DialogCustom from "./DialogCustom";
import {
  buttonStyle,
  paperStyle,
  searchIconStyle,
} from "@/style/MobileSearchBarStyle";

type Props = {};

const MobileSearchBar = ({}: Props) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      paddingX={{ md: 4, sm: 2, xs: 1 }}
      paddingBottom={0}
      display={"flex"}
      justifyContent={"center"}
      position={"relative"}
      height={50}
    >
      <Paper ref={boxRef} sx={paperStyle}>
        <Button variant="outlined" onClick={handleClickOpen} sx={buttonStyle}>
          <SearchIcon sx={searchIconStyle} />
        </Button>
        <DialogCustom open={open} onClose={handleClose} />
      </Paper>
    </Box>
  );
};

export default MobileSearchBar;
