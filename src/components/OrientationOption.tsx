import { Orientation } from "@/hooks/useSearch";
import { Button, SxProps } from "@mui/material";
import React, { memo } from "react";

type Props = {
  orientation: Orientation;
  isActive: boolean;
  setSearchOrientation: (query: string) => void;
};

const areEqualOrientation = (prevProps: any, nextProps: any) => {
  return prevProps.isActive === nextProps.isActive;
};

const OrientationOption = memo(function OrientationOption({
  orientation,
  isActive,
  setSearchOrientation,
}: Props) {
  return (
    <Button
      fullWidth
      key={orientation.name}
      title={orientation.title}
      className={isActive ? `button-orientation--active` : undefined}
      onClick={(e) => {
        setSearchOrientation(orientation.name);
      }}
      sx={{
        ...buttonOrientationStyle,
      }}
    >
      {orientation.icon}
      <span>{orientation.title}</span>
    </Button>
  );
},
areEqualOrientation);

export default OrientationOption;

const buttonOrientationStyle: SxProps = {
  position: "relative",
  outline: "none",
  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 1,
  minWidth: 0,
  color: "black",
  "&:focus": {
    outline: "none",
  },
  "&:hover, &.button-orientation--active": {
    backgroundColor: "transparent",
    color: "#b58cff",
    "&:before": {
      content: '""',
      height: 5,
      width: 5,
      backgroundColor: "#b58cff",
      position: "absolute",
      top: 0,
      bottom: 0,
      margin: "auto",
      right: 100,
      borderRadius: 100,
    },
  },
};
