import { SxProps } from "@mui/material";

export const boxStyle: SxProps = {
  padding: { md: "4px", sm: "0 16px", xs: "0 16px" },
};

export const buttonStyle: SxProps = {
  outline: "none",
  height: { md: 60, sm: 50, xs: 50 },
  width: { md: 60, sm: 1, xs: 1 },
  minWidth: 0,
  backgroundColor: "#b58cff",
  borderRadius: 16,
  color: "#fff",
  padding: 0,
  "&:hover": {
    backgroundColor: "#8555dc",
  },
};

export const iconStyle: SxProps = { color: "#fff" };
