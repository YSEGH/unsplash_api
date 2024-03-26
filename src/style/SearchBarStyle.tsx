import { SxProps } from "@mui/material";

export const circularSkeletonStyle: SxProps = {
  width: { md: 66, sm: 50, xs: 50 },
  height: { md: 66, sm: 50, xs: 50 },
};

export const roundedSkeletonStyle: SxProps = {
  borderRadius: 60,
  display: { md: "block", sm: "none", xs: "none" },
};
