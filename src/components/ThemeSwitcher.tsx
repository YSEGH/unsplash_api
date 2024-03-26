"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { buttonStyle, iconStyle } from "@/style/ThemeSwitcherStyle";

type Props = {};

const ThemeSwitcher = ({}: Props) => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  return (
    <Button
      className={`${theme}-mode`}
      sx={buttonStyle}
      onClick={() => setTheme(theme)}
    >
      {theme === "light" ? (
        <DarkModeIcon sx={iconStyle} />
      ) : (
        <LightModeIcon sx={iconStyle} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
