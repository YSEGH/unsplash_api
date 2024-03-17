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
        // Remove the photo if it's already a favorite
        updated.splice(favoriteIndex, 1);
      } else {
        // Add the photo to favorites
        updated.push({
          id: photo.id,
          download: photo.links.download,
          urls: photo.urls,
          alt_description: photo.alt_description,
        });
      }

      // Save updated favorites to localStorage
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });

    // Call doneCallback if provided
    doneCallback?.();
  };

  useEffect(() => {
    // Load favorites from localStorage on component mount
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
