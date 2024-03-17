"use client";

import React, { useContext } from "react";
import PhotoList from "./PhotoList";
import { PhotosContext } from "@/contexts/PhotosContext";
import { BackdropContext } from "@/contexts/BackdropContext";
import DownloadBar from "./DownloadBar";

export default function FavoritesList() {
  const { favorites, addToFavorite } = useContext(PhotosContext);
  const { setOpen, setActivePhoto } = useContext(BackdropContext);

  return (
    <>
      <DownloadBar />
      <PhotoList
        photos={favorites}
        favorites={favorites}
        addToFavorite={addToFavorite}
        setActivePhoto={setActivePhoto}
        setOpen={setOpen}
      />
    </>
  );
}
