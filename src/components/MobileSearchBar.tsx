import { SearchBarContext, searchContextType } from "@/contexts/SearchContext";
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
import SearchIcon from "@mui/icons-material/Search";
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";
import { ThemeContext } from "@/contexts/ThemeContext";
import cx from "classnames";

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
      <Paper
        ref={boxRef}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          width: 50,
          border: "none",
          borderRadius: 16,
          boxShadow: "none",
          background: "transparent",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          sx={{
            padding: 0,
            borderRadius: 16,
            height: 50,
            width: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgb(181, 140, 255)",
            minWidth: 0,
            "&:focus": { outline: "none" },
          }}
        >
          <SearchIcon sx={{ fill: "rgb(181, 140, 255)" }} />
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
  const { theme } = useContext(ThemeContext);

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
    errorSearch,
    setErrorSearch,
  } = useContext<searchContextType>(SearchBarContext);

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      fullWidth
      PaperProps={{
        className: cx(`${theme}-mode`),
        sx: {
          borderRadius: 0,
          height: "100vh",
          maxHeight: "none",
          width: "100vw",
          maxWidth: "100vw",
          margin: 0,
          "&.light-mode": {
            backgroundColor: "#FFF",
          },
          "&.dark-mode": {
            backgroundColor: "rgb(30, 30, 37)",
          },
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
        <DialogTitle
          sx={{ paddingLeft: 2, color: theme === "light" ? "#000" : "#fff" }}
        >
          Votre recherche
        </DialogTitle>
        <Button
          onClick={handleClose}
          sx={{ display: "flex", justifyContent: "flex-end", paddingRight: 1 }}
        >
          <CloseIcon sx={{ color: theme === "light" ? "#000" : "#fff" }} />
        </Button>
      </Box>
      <List
        sx={{
          flex: "auto",
          pt: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          isActive={isActive}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          errorSearch={errorSearch}
          setErrorSearch={setErrorSearch}
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
        {errorSearch && (
          <Box height={20} marginY={2} width={1}>
            <Typography
              color={"red"}
              textAlign={"center"}
              fontSize={14}
              fontWeight={200}
            >
              Merci de saisir un mot clé.
            </Typography>
          </Box>
        )}
        <Box display={"flex"} flexDirection={"column"} width={1}>
          <SubmitButton cb={() => handleClose()} />
          <ResetButton />
        </Box>
      </List>
    </Dialog>
  );
}
