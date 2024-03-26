import {
  COLOR_LIST,
  Color,
  ORIENTATION_LIST,
  Orientation,
  useColorSearch,
  useOrientationSearch,
  useSearchBar,
  useTextSearch,
} from "@/hooks/useSearch";
import React, { createContext } from "react";

interface propsProvider {
  children: React.ReactNode;
}

export type searchContextType = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  errorSearch: boolean;
  setErrorSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchColor: Color | null;
  setSearchColor: (color: Color | null) => void;
  COLOR_LIST: any[];
  searchOrientation: Orientation | null;
  setSearchOrientation: (orientation: Orientation | null) => void;
  ORIENTATION_LIST: any[];
};

const defaultSearchContext: searchContextType = {
  isActive: false,
  setIsActive: () => null,
  errorSearch: false,
  searchQuery: "",
  setSearchQuery: () => null,
  setErrorSearch: () => null,
  searchColor: null,
  setSearchColor: () => null,
  COLOR_LIST: COLOR_LIST,
  searchOrientation: null,
  setSearchOrientation: () => null,
  ORIENTATION_LIST: ORIENTATION_LIST,
};

const SearchBarContext = createContext<any>(defaultSearchContext);

const SearchProvider: React.FC<propsProvider> = ({ children }) => {
  const { isActive, setIsActive } = useSearchBar();
  const { errorSearch, setErrorSearch, searchQuery, setSearchQuery } =
    useTextSearch();
  const { searchColor, setSearchColorHandler, COLOR_LIST } = useColorSearch();
  const { searchOrientation, setSearchOrientationHandler, ORIENTATION_LIST } =
    useOrientationSearch();

  const searchContext: searchContextType = {
    isActive,
    setIsActive,
    searchColor,
    setSearchColor: setSearchColorHandler,
    COLOR_LIST,
    searchOrientation,
    setSearchOrientation: setSearchOrientationHandler,
    ORIENTATION_LIST,
    errorSearch,
    setErrorSearch,
    searchQuery,
    setSearchQuery,
  };

  return (
    <SearchBarContext.Provider value={searchContext}>
      {children}
    </SearchBarContext.Provider>
  );
};

export { SearchProvider, SearchBarContext };
