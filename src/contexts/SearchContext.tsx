import {
  COLOR_LIST,
  ORIENTATION_LIST,
  useColorSearch,
  useOrientationSearch,
  useSearchBar,
  useTextSearch,
} from "@/hooks/useSearch";
import React, { createContext, useMemo } from "react";

interface propsProvider {
  children: React.ReactNode;
}

const defaultSearchContext: any = {
  isActive: false,
  setIsActive: () => null,
  searchQuery: "",
  setSearchQuery: () => null,
  searchColor: "",
  setSearchColor: () => null,
  COLOR_LIST: COLOR_LIST,
  searchOrientation: "",
  setSearchOrientation: () => null,
  ORIENTATION_LIST: ORIENTATION_LIST,
};

const SearchBarContext = createContext<any>(defaultSearchContext);

const SearchProvider: React.FC<propsProvider> = ({ children }) => {
  const { isActive, setIsActive } = useSearchBar();
  const { searchQuery, setSearchQuery } = useTextSearch();
  const { searchColor, setSearchColor, COLOR_LIST } = useColorSearch();
  const { searchOrientation, setSearchOrientation, ORIENTATION_LIST } =
    useOrientationSearch();

  return (
    <SearchBarContext.Provider
      value={{
        isActive,
        setIsActive,
        searchColor,
        setSearchColor,
        COLOR_LIST,
        searchOrientation,
        setSearchOrientation,
        ORIENTATION_LIST,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};

export { SearchProvider, SearchBarContext };
