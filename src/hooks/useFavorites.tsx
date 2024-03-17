import { useEffect, useState } from "react";

interface FavoritePhoto {
  id: string;
  download: string;
  urls: any;
  alt_description: string;
}

const useFavoritePhoto = (): {
  favorites: FavoritePhoto[];
  addToFavorite: (photo: any, doneCallback?: () => void) => void;
} => {
  const [favorites, setFavorites] = useState<FavoritePhoto[]>([]);

  const addToFavorite = (photo: any, doneCallback?: () => void) => {
    setFavorites((prevFavorites) => {
      const updated = [...prevFavorites];
      const favoriteIndex = updated.findIndex(
        (favorite) => favorite.id === photo.id
      );

      if (favoriteIndex !== -1) {
        updated.splice(favoriteIndex, 1);
      } else {
        updated.push({
          id: photo.id,
          download: photo.links.download,
          urls: photo.urls,
          alt_description: photo.alt_description,
        });
      }

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });

    doneCallback?.();
  };

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("favorites")) {
      const initialFavorites = JSON.parse(
        localStorage.getItem("favorites") as string
      );
      setFavorites(initialFavorites);
    }
  }, []);

  return { favorites, addToFavorite };
};

export default useFavoritePhoto;
