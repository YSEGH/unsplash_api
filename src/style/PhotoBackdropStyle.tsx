import { SxProps, Theme } from "@mui/material";
import React from "react";

export const backdropStyle: SxProps<Theme> = {
  color: "#fff",
  zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
};

export const imageStyle: React.CSSProperties = {
  maxHeight: "90vh",
  maxWidth: "90vw",
  objectFit: "contain",
};
