import { SxProps } from "@mui/material";

export const badgeStyle: React.CSSProperties = {
  padding: "0 4px",
  backgroundColor: "rgb(85, 26, 139)",
  color: "#fff",
};

export const iconButton: SxProps = {
  fill: "#b58cff",
  "&:hover": {
    fill: "#8555dc",
  },
  "&.light-mode": {},
  "&.dark-mode": {},
};
