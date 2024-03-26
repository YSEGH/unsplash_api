import { ReactElement, useState } from "react";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import CropSquareIcon from "@mui/icons-material/CropSquare";

interface UseSearchBarReturn {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UseTextSearchReturn {
  errorSearch: boolean;
  setErrorSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface UseColorSearchReturn {
  searchColor: Color | null;
  setSearchColorHandler: (color: Color | null) => void;
  COLOR_LIST: Color[];
}

interface UseOrientationSearchReturn {
  searchOrientation: Orientation | null;
  setSearchOrientationHandler: (orientation: Orientation | null) => void;
  ORIENTATION_LIST: Orientation[];
}

export interface Orientation {
  title: string;
  name: string;
  icon: ReactElement;
}

export interface Color {
  title: string;
  name: string;
  color: string;
}

const useSearchBar = (): UseSearchBarReturn => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return {
    isActive,
    setIsActive,
  };
};

const useColorSearch = (): UseColorSearchReturn => {
  const [searchColor, setSearchColor] = useState<Color | null>(null);

  const setSearchColorHandler = (color: Color | null) => {
    setSearchColor((prevState: any) => {
      if (prevState && color && color.name === prevState.name) {
        return null;
      }
      return color;
    });
  };
  return {
    searchColor,
    setSearchColorHandler,
    COLOR_LIST,
  };
};

const useTextSearch = (): UseTextSearchReturn => {
  const [errorSearch, setErrorSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  return {
    errorSearch,
    setErrorSearch,
    searchQuery,
    setSearchQuery,
  };
};

const useOrientationSearch = (): UseOrientationSearchReturn => {
  const [searchOrientation, setSearchOrientation] =
    useState<Orientation | null>(null);

  const setSearchOrientationHandler = (orientation: Orientation | null) => {
    setSearchOrientation((prevState: any) => {
      if (prevState && orientation && orientation.name === prevState.name) {
        return null;
      }
      return orientation;
    });
  };
  return {
    searchOrientation,
    setSearchOrientationHandler,
    ORIENTATION_LIST,
  };
};

export { useSearchBar, useColorSearch, useTextSearch, useOrientationSearch };

export const ORIENTATION_LIST: Orientation[] = [
  {
    title: "Paysage",
    name: "landscape",
    icon: <CropLandscapeIcon />,
  },
  { title: "Portrait", name: "portrait", icon: <CropPortraitIcon /> },
  { title: "Carré", name: "squarish", icon: <CropSquareIcon /> },
];
export const COLOR_LIST: Color[] = [
  {
    title: "Noir et blanc",
    name: "black_and_white",
    color: "linear-gradient(to right, black 50%, white 50%)",
  },
  {
    title: "Noir",
    name: "black",
    color: "black",
  },
  {
    title: "Blanc",
    name: "white",
    color: "white",
  },
  {
    title: "Jaune",
    name: "yellow",
    color: "yellow",
  },
  {
    title: "Orange",
    name: "orange",
    color: "orange",
  },
  {
    title: "Violet",
    name: "purple",
    color: "purple",
  },
  {
    title: "Rouge",
    name: "red",
    color: "red",
  },
  {
    title: "Magenta",
    name: "magenta",
    color: "magenta",
  },
  {
    title: "Vert",
    name: "green",
    color: "green",
  },
  {
    title: "Turquoise",
    name: "teal",
    color: "teal",
  },
  {
    title: "Bleu",
    name: "blue",
    color: "blue",
  },
];
