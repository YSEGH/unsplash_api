import { SxProps } from "@mui/material";

export const buttonStyle: SxProps = {
  outline: "none",
  height: { md: 60, sm: 50, xs: 50 },
  width: { md: 60, sm: 1, xs: 1 },
  minWidth: 0,
  border: "1px solid rgb(181, 140, 255)",
  borderRadius: 16,
  color: "#fff",
  padding: 0,
  "&:hover": {
    backgroundColor: "#8555dc",
    border: "1px solid #8555dc",
    svg: {
      fill: "#fff",
    },
  },
};

export const iconStyle: SxProps = { fill: "rgb(181, 140, 255)" };
