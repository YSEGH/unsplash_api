"use client";

import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { ThemeContext } from "@/contexts/ThemeContext";
import { SxProps } from "@mui/material";

type Props = {};

const HomePageButton = (props: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link href="/">
      <HomeIcon className={`${theme}-mode`} sx={iconButton} />
    </Link>
  );
};

export default HomePageButton;

const iconButton: SxProps = {
  fill: "#b58cff",
  "&:hover": {
    fill: "#8555dc",
  },
  "&.light-mode": {},
  "&.dark-mode": {},
};
