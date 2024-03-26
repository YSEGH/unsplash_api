"use client";

import React, { useContext } from "react";
import { Badge, BadgeProps, SxProps } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import { PhotosContext } from "@/contexts/PhotosContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { styled } from "@mui/material/styles";
import { iconButton, badgeStyle } from "@/style/FavoritesPageButtonStyle";

type Props = {};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": badgeStyle,
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
