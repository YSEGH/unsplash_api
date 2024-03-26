import { SxProps } from "@mui/material";

export const buttonStyle: SxProps = {
  position: "relative",
  outline: "none",
  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 1,
  minWidth: 0,
  "&.light-mode": {
    color: "#000",
  },
  "&.dark-mode": {
    color: "#FFF",
  },
  "&:focus": {
    outline: "none",
  },
  "&:hover, &.is-active": {
    backgroundColor: "transparent",
    color: "#b58cff",
    "&:before": {
      content: '""',
      height: 5,
      width: 5,
      backgroundColor: "#b58cff",
      position: "absolute",
      top: 0,
      bottom: 0,
      margin: "auto",
      right: 100,
      borderRadius: 100,
    },
  },
};
