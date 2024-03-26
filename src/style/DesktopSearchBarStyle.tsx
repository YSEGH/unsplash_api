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
  border: "1px solid #f0f0f0",
  boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
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
