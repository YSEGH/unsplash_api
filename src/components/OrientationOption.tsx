import { Orientation } from "@/hooks/useSearch";
import { Button, Typography } from "@mui/material";
import React, { memo } from "react";
import cx from "classnames";
import { buttonStyle } from "@/style/OrientationOptionStyle";

type Props = {
  orientation: Orientation;
  isActive: boolean;
  setSearchOrientation: (orientation: Orientation) => void;
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
      onClick={() => {
        setSearchOrientation(orientation);
      }}
      sx={buttonStyle}
    >
      {orientation.icon}
      <Typography fontWeight={300} fontSize={14}>
        {orientation.title}
      </Typography>
    </Button>
  );
},
areEqualOrientation);

export default OrientationOption;
