import { SxProps } from "@mui/material";

export const dialogStyle: SxProps = { height: 1, margin: 0 };

export const listStyle: SxProps = {
  flex: "auto",
  pt: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
};

export const paperStyle: SxProps = {
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
};

export const textStyle: SxProps = {
  color: "red",
  textAlign: "center",
  fontSize: 14,
  fontWeight: 200,
};

export const buttonStyle: SxProps = {
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 1,
};

export const dialogTitleStyle: SxProps = {
  paddingLeft: 2,
  "&.light-mode": {
    color: "#000",
  },
  "&.dark-mode": {
    color: "#fff",
  },
};

export const closeIconStyle: SxProps = {
  "&.light-mode": {
    color: "#000",
  },
  "&.dark-mode": {
    color: "#fff",
  },
};
