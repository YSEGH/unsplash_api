import useFavorites from "@/hooks/useFavorites";
import usePhotos from "@/hooks/usePhotos";
import { createContext } from "react";

interface propsProvider {
  children: React.ReactNode;
}

export interface photosContextType {
  moreContent: boolean;
  photos: any[];
  getPhotos: (params?: {}, reset?: boolean) => void;
  getPhotosBySearch: (params?: {}, reset?: boolean) => void;
  downloadAllPhotos: (params?: {}, cb?: (() => void) | null) => void;
  requestStatus: string;
  error: string | null;
  favorites: any[];
  addToFavorite: (query: any, cb?: () => void) => void;
  page: number;
}

const defaultContext: photosContextType = {
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

const PhotosContext = createContext<photosContextType>(defaultContext);

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

  const contextValue: photosContextType = {
    moreContent,
    photos,
    getPhotos,
    getPhotosBySearch,
    downloadAllPhotos,
    requestStatus,
    error,
    favorites,
    addToFavorite,
    page,
  };

  return (
    <PhotosContext.Provider value={contextValue}>
      {children}
    </PhotosContext.Provider>
  );
};

export { PhotosContext, PhotosProvider };
