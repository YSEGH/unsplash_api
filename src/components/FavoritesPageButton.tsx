"use client";

import React, { useContext } from "react";
import { Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import { PhotosContext } from "@/contexts/PhotosContext";

type Props = {};

const FavoritesPageButton = ({}: Props) => {
  const { favorites } = useContext(PhotosContext);

  return (
    <Badge badgeContent={favorites ? favorites.length : 0} color="primary">
      <Link href="/favorites">
        <FavoriteIcon />
      </Link>
    </Badge>
  );
};

export default FavoritesPageButton;
