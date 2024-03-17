import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

type Props = {};

const HomePageButton = (props: Props) => {
  return (
    <Link href="/">
      <HomeIcon />
    </Link>
  );
};

export default HomePageButton;
