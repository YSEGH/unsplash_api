import { SxProps } from "@mui/material";

export const optionStyle: SxProps = {
  outline: "none",
  height: 40,
  width: 40,
  minWidth: 0,
  borderRadius: 100,
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  border: "2px solid white",
  "&:focus": {
    outline: "none",
  },
  "&:hover, &.is-active": {
    border: "2px solid #b58cff",
  },
};
