"use client";

import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import PhotoList from "./PhotoList";
import { PhotosContext } from "@/contexts/PhotosContext";
import InfiniteScroll from "./InfiniteScroll";
import { BackdropContext } from "@/contexts/BackdropContext";

type Props = {};

const Photos = ({}: Props) => {
  const { photos, favorites, addToFavorite } = useContext(PhotosContext);
  const { setOpen, setActivePhoto } = useContext(BackdropContext);

  return (
    <>
      <SearchBar />
      <PhotoList
        photos={photos}
        favorites={favorites}
        addToFavorite={addToFavorite}
        setActivePhoto={setActivePhoto}
        setOpen={setOpen}
      />
      <InfiniteScroll />
    </>
  );
};

export default Photos;
