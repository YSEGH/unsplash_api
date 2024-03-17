import useFavorites from "@/hooks/useFavorites";
import usePhotos from "@/hooks/usePhotos";
import { createContext } from "react";

interface propsProvider {
  children: React.ReactNode;
}

interface PhotosContextType {
  moreContent: boolean;
  photos: any[];
  getPhotos: (params?: {}, reset?: boolean) => void;
  getPhotosBySearch: (params?: {}, reset?: boolean) => void;
  downloadAllPhotos: (params?: {}) => void;
  requestStatus: string;
  error: string | null;
  favorites: any[];
  addToFavorite: (query: any, cb?: () => void) => void;
  page: number;
}

const defaultContext: PhotosContextType = {
  moreContent: true,
  photos: [],
  getPhotos: () => null,
  getPhotosBySearch: () => null,
  downloadAllPhotos: () => null,
  requestStatus: "",
  error: "",
  favorites: [],
  addToFavorite: () => null,
  page: 1,
};

const PhotosContext = createContext<PhotosContextType>(defaultContext);

const PhotosProvider: React.FC<propsProvider> = ({ children }) => {
  const { favorites, addToFavorite } = useFavorites();
  const {
    moreContent,
    photos,
    getPhotos,
    downloadAllPhotos,
    requestStatus,
    error,
    page,
    getPhotosBySearch,
  } = usePhotos();

  return (
    <PhotosContext.Provider
      value={{
        moreContent,
        photos,
        getPhotos,
        downloadAllPhotos,
        requestStatus,
        error,
        favorites,
        addToFavorite,
        getPhotosBySearch,
        page,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};

export { PhotosContext, PhotosProvider };
