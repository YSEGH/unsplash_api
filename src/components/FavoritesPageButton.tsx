"use client";

import React, { useContext } from "react";
import { Badge, BadgeProps, SxProps } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import { PhotosContext } from "@/contexts/PhotosContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { styled } from "@mui/material/styles";

type Props = {};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    padding: "0 4px",
    backgroundColor: "rgb(85, 26, 139)",
    color: "#fff",
  },
}));

const FavoritesPageButton = ({}: Props) => {
  const { theme } = useContext(ThemeContext);
  const { favorites } = useContext(PhotosContext);

  return (
    <StyledBadge badgeContent={favorites ? favorites.length : 0}>
      <Link href="/favorites">
        <FavoriteIcon className={`${theme}-mode`} sx={iconButton} />
      </Link>
    </StyledBadge>
  );
};

export default FavoritesPageButton;

const iconButton: SxProps = {
  fill: "#b58cff",
  "&:hover": {
    fill: "#8555dc",
  },
  "&.light-mode": {},
  "&.dark-mode": {},
};
