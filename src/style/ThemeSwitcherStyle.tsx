import { SxProps } from "@mui/material";

export const buttonStyle: SxProps = {
  height: 30,
  width: 30,
  minWidth: 0,
  borderRadius: 100,
  backgroundColor: "#b58cff",
  "&:hover": {
    backgroundColor: "#8555dc",
  },
  "&.light-mode": {},
  "&.dark-mode": {},
};

export const iconStyle: SxProps = { fill: "#fff" };
