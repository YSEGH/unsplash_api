import { SxProps } from "@mui/material";

export const boxStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const paperStyle: SxProps = {
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  height: 66,
  borderRadius: 16,
  border: "1px solid rgb(181, 140, 255)",
  boxShadow: "none",
  "&.light-mode": {
    backgroundColor: "#FFF",
    "&.is-active": {
      backgroundColor: "#EBEBEB",
    },
  },
  "&.dark-mode": {
    backgroundColor: "rgb(30, 30, 37)",
    border: "1px solid rgb(181, 140, 255)",

    "&.is-active": {},
  },
};
