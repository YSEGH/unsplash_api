import { Color } from "@/hooks/useSearch";
import { Button, SxProps } from "@mui/material";
import React, { memo } from "react";

type Props = {
  color: Color;
  isActive: boolean;
  setSearchColor: (color: Color) => void;
};

const areEqualColor = (prevProps: any, nextProps: any) => {
  return prevProps.isActive === nextProps.isActive;
};

const ColorOption = memo(function ColorOption({
  color,
  isActive,
  setSearchColor,
}: Props) {
  return (
    <Button
      key={color.name}
      title={color.title}
      className={isActive ? `button-color--active` : undefined}
      onClick={() => setSearchColor(color)}
      sx={{
        ...buttonColorStyle,
        background: color.color,
        "&:hover": {
          background: color.color,
        },
      }}
    ></Button>
  );
},
areEqualColor);

export default ColorOption;

const buttonColorStyle: SxProps = {
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
  "&:hover, &.button-color--active": {
    border: "2px solid #b58cff",
  },
};
