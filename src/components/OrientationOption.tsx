import { Orientation } from "@/hooks/useSearch";
import { Button, SxProps } from "@mui/material";
import React, { memo } from "react";
import cx from "classnames";

type Props = {
  orientation: Orientation;
  isActive: boolean;
  setSearchOrientation: (query: string) => void;
  theme: string;
};

const areEqualOrientation = (prevProps: any, nextProps: any) => {
  return (
    prevProps.isActive === nextProps.isActive &&
    prevProps.theme === nextProps.theme
  );
};

const OrientationOption = memo(function OrientationOption({
  orientation,
  isActive,
  setSearchOrientation,
  theme,
}: Props) {
  return (
    <Button
      fullWidth
      key={orientation.name}
      title={orientation.title}
      className={cx(`${theme}-mode`, { ["is-active"]: isActive })}
      onClick={(e) => {
        setSearchOrientation(orientation.name);
      }}
      sx={buttonOrientationStyle}
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
  "&.light-mode": {
    color: "#000",
  },
  "&.dark-mode": {
    color: "#FFF",
  },
  "&:focus": {
    outline: "none",
  },
  "&:hover, &.is-active": {
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
