"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import { Button, SxProps } from "@mui/material";
import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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
        <DarkModeIcon sx={{ fill: "#fff" }} />
      ) : (
        <LightModeIcon sx={{ fill: "#fff" }} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;

const buttonStyle: SxProps = {
  height: 40,
  width: 40,
  minWidth: 0,
  borderRadius: 100,
  "&.light-mode": {
    backgroundColor: "rgb(85, 26, 139)",
  },
  "&.dark-mode": {
    backgroundColor: "#b58cff",
  },
};
