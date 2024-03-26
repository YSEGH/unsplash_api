"use client";

import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { ThemeContext } from "@/contexts/ThemeContext";
import { iconStyle } from "@/style/HomePageButtonStyle";

type Props = {};

const HomePageButton = (props: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link href="/">
      <HomeIcon className={`${theme}-mode`} sx={iconStyle} />
    </Link>
  );
};

export default HomePageButton;
