import { SearchBarContext } from "@/contexts/SearchContext";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  List,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import TextInput from "./TextInput";
import OrientationInput from "./OrientationInput";
import ColorInput from "./ColorInput";
import CloseIcon from "@mui/icons-material/Close";

type Props = {};

const MobileSearchBar = (props: Props) => {
  const [width, setWidth] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const {
    isActive,
    setIsActive,
    searchQuery,
    setSearchQuery,
    COLOR_LIST,
    searchColor,
    setSearchColor,
    ORIENTATION_LIST,
    searchOrientation,
    setSearchOrientation,
  } = useContext(SearchBarContext);

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
      paddingBottom={3}
      marginBottom={2}
      display={"flex"}
      justifyContent={"center"}
      boxShadow={"rgb(0 0 0/8%) 0 1px 0"}
    >
      <Paper
        ref={boxRef}
        sx={{
          backgroundColor: isActive ? "#EBEBEB" : "#FFF",
          display: "flex",
          alignItems: "center",
          height: 54,
          border: "1px solid #dddddd",
          borderRadius: 16,
          width: 1,
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          sx={{
            height: 1,
            borderRadius: 16,
            paddingX: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            border: "none",
            "&:hover": {
              border: "none",
            },
            "&:focus": { outline: "none" },
          }}
          fullWidth
        >
          <Typography
            className="label"
            fontSize={12}
            textTransform={"none"}
            color={"#000"}
            fontWeight={600}
          >
            Couleur
          </Typography>
          <Typography
            className="description"
            fontSize={12}
            textTransform={"none"}
            color={"#969696"}
          >
            {searchColor ?? "Quelle couleur ?"}
          </Typography>
        </Button>
        <SimpleDialog open={open} onClose={handleClose} />
      </Paper>
    </Box>
  );
};

export default MobileSearchBar;

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const {
    isActive,
    setIsActive,
    searchQuery,
    setSearchQuery,
    COLOR_LIST,
    searchColor,
    setSearchColor,
    ORIENTATION_LIST,
    searchOrientation,
    setSearchOrientation,
  } = useContext(SearchBarContext);

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 0,
          height: "100vh",
          width: "100vw",
          margin: 0,
        },
      }}
      sx={{ height: 1, margin: 0 }}
    >
      <Box
        width={1}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <DialogTitle>Set backup account</DialogTitle>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Box>
      <List sx={{ pt: 0 }}>
        <TextInput
          isActive={isActive}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ColorInput
          isActive={isActive}
          COLOR_LIST={COLOR_LIST}
          searchColor={searchColor}
          setSearchColor={setSearchColor}
        />
        <OrientationInput
          isActive={isActive}
          ORIENTATION_LIST={ORIENTATION_LIST}
          searchOrientation={searchOrientation}
          setSearchOrientation={setSearchOrientation}
        />
      </List>
    </Dialog>
  );
}
