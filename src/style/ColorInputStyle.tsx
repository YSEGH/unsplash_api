import { SxProps } from "@mui/material";

export const buttonStyle: SxProps = {
  cursor: "pointer",
  outline: "none",
  height: 1,
  borderRadius: 16,
  paddingLeft: 4,
  paddingRight: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: "transparent",
  boxShadow: "none",
  "&.light-mode": {
    "&:not(.is-focus)": {
      "&:hover": {
        backgroundColor: "#EBEBEB",
      },
    },
    "&.is-active": {
      "&:not(.is-focus)": {
        "&:hover": {
          backgroundColor: "#DDDDDD",
        },
      },
    },
  },
  "&.dark-mode": {
    "&:hover": {
      backgroundColor: "rgb(18, 18, 23)",
    },
  },
  "&.is-focus": {
    backgroundColor: "#FFF",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    "&.dark-mode": { backgroundColor: "rgb(180, 139, 254)" },
  },
};

export const paperStyle: SxProps = {
  paddingX: { md: 4, sm: 2, xs: 2 },
  paddingY: 2,
  boxShadow: {
    md: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
    sm: "none",
    xs: "none",
  },
  "&.light-mode": {
    backgroundColor: "#FFF",
  },
  "&.dark-mode": {
    backgroundColor: "rgb(30, 30, 37)",
  },
};

export const labelStyle: SxProps = {
  fontSize: 12,
  textTransform: "none",
  fontWeight: 400,
  "&.light-mode": {
    color: "rgb(181, 140, 255)",
  },
  "&.dark-mode": {
    color: "#FFF",
  },
};

export const descriptionStyle: SxProps = {
  opacity: 0.6,
  fontSize: 14,
  textTransform: "none",
  color: "#323232",
  fontWeight: 100,
  "&.light-mode": {
    color: "#000",
  },
  "&.dark-mode": {
    color: "#FFF",
  },
};
