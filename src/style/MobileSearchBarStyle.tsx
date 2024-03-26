import { SxProps } from "@mui/material";

export const paperStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  height: 50,
  width: 50,
  border: "none",
  borderRadius: 16,
  boxShadow: "none",
  background: "transparent",
};

export const searchIconStyle: SxProps = { fill: "rgb(181, 140, 255)" };

export const buttonStyle: SxProps = {
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
};
