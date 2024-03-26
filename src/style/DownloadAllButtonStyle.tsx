import { SxProps } from "@mui/material";

export const buttonStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  height: { md: 66, sm: 50, xs: 50 },
  width: 200,
  borderRadius: 16,
  paddingX: 4,
  color: "#b58cff",
  border: "1px solid #b58cff",
  "&.light-mode": {
    backgroundColor: "#FFF",
  },
  "&.dark-mode": {
    backgroundColor: "rgb(30, 30, 37)",
    "&:hover": {
      backgroundColor: "rgb(18, 18, 23)",
    },
  },
};
