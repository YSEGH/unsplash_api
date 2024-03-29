import { Color } from "@/hooks/useSearch";
import { Button } from "@mui/material";
import React, { memo } from "react";
import cx from "classnames";
import { optionStyle } from "../style/ColorOptionStyle";

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
      className={cx({ [`is-active`]: isActive })}
      onClick={() => setSearchColor(color)}
      sx={{
        ...optionStyle,
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
