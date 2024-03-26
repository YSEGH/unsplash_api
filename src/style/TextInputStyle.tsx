import { SxProps } from "@mui/material";

export const inputStyle: SxProps = {
  "&::after": {
    display: "none",
  },
  "&::before": {
    display: "none",
  },
};

export const inputPropsStyle: SxProps = {
  outline: "none",
  height: 21,
  padding: 0,
  border: "none",
  fontSize: 14,
  fontWeight: 100,
  cursor: "pointer",
  pointerEvents: "none",
  "&.light-mode": {
    color: "#000",

    "&::placeholder": {
      fontSize: 14,

      color: "#000",
      opacity: 0.6,
    },
  },
  "&.dark-mode": {
    color: "#fff",

    "&::placeholder": {
      color: "#fff",
      opacity: 0.6,
    },
  },
  "&.is-error": {
    "&::placeholder": {
      color: "red",
      opacity: 0.6,
    },
  },
};

export const buttonStyle: SxProps = {
  cursor: "pointer",
  outline: "none",
  height: 1,
  borderRadius: 16,
  paddingLeft: 4,
  paddingRight: 0,
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

export const rootStyle: SxProps = {
  cursor: "pointer",
  pointerEvents: "none",
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
  "&.is-error": {
    color: "red",
  },
};
