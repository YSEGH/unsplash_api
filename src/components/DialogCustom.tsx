import { SearchBarContext, searchContextType } from "@/contexts/SearchContext";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  List,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import TextInput from "./TextInput";
import OrientationInput from "./OrientationInput";
import ColorInput from "./ColorInput";
import CloseIcon from "@mui/icons-material/Close";
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";
import { ThemeContext } from "@/contexts/ThemeContext";
import cx from "classnames";
import {
  textStyle,
  listStyle,
  paperStyle,
  dialogTitleStyle,
  buttonStyle,
  closeIconStyle,
  dialogStyle,
} from "@/style/DialogCustomStyle";

export interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
}

function DialogCustom({ onClose, open }: CustomDialogProps) {
  const { theme } = useContext(ThemeContext);

  const {
    isActive,
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

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      fullWidth
      PaperProps={{
        className: cx(`${theme}-mode`),
        sx: paperStyle,
      }}
      sx={dialogStyle}
    >
      <Box
        width={1}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <DialogTitle className={cx(`${theme}-mode`)} sx={dialogTitleStyle}>
          Votre recherche
        </DialogTitle>
        <Button onClick={handleClose} sx={buttonStyle}>
          <CloseIcon className={cx(`${theme}-mode`)} sx={closeIconStyle} />
        </Button>
      </Box>
      <List sx={listStyle}>
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
          <Box width={1} height={20} marginY={2}>
            <Typography sx={textStyle}>Merci de saisir un mot clé.</Typography>
          </Box>
        )}
        <Box width={1} display={"flex"} flexDirection={"column"}>
          <SubmitButton cb={() => handleClose()} />
          <ResetButton />
        </Box>
      </List>
    </Dialog>
  );
}

export default DialogCustom;
