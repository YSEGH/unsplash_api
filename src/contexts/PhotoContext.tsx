import { createContext } from "react";

interface propsProvider {
  photo: {} | any;
  children: React.ReactNode;
  addToFavorite: (photo: any, cb: () => void) => void;
}
interface PhotoContextType {
  photo: {} | any;
  addToFavorite: (photo: any, cb: () => void) => void;
}

const defaultContext: PhotoContextType = {
  photo: {},
  addToFavorite: () => null,
};

const PhotoContext = createContext<PhotoContextType>(defaultContext);

const PhotoProvider: React.FC<propsProvider> = ({
  children,
  photo,
  addToFavorite,
}) => {
  return (
    <PhotoContext.Provider value={{ photo, addToFavorite }}>
      {children}
    </PhotoContext.Provider>
  );
};

export { PhotoContext, PhotoProvider };
