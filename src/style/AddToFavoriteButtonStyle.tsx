import { SxProps } from "@mui/material";

export const iconButtonStyle: SxProps = {
  outline: "none",
  "&:focus": { outline: "none" },
};

export const iconFavoriteStyle: SxProps = {
  color: "#fff",
  "&.is-active": { color: "red" },
};
