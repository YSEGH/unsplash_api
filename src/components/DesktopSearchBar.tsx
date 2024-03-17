import { SearchBarContext } from "@/contexts/SearchContext";
import { Paper, SxProps } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import TextInput from "./TextInput";
import ColorInput from "./ColorInput";
import OrientationInput from "./OrientationInput";
import SubmitButton from "./SubmitButton";
import { ThemeContext } from "@/contexts/ThemeContext";

type Props = {};

const DesktopSearchBar = ({}: Props) => {
  const { theme } = useContext(ThemeContext);

  const boxRef = useRef<HTMLDivElement>(null);
  const {
    isActive,
    setIsActive,
    searchQuery,
    setSearchQuery,
    COLOR_LIST,
    searchColor,
    setSearchColor,
    ORIENTATION_LIST,
    searchOrientation,
    setSearchOrientation,
  } = useContext(SearchBarContext);

  const handleClick: EventListener = (ev: Event) => {
    if (!boxRef.current) return;
    if (boxRef.current instanceof HTMLDivElement) {
      if (!boxRef.current.contains(ev.target as Node)) {
        setIsActive(false);
        return;
      }
      if (isActive) return;
      setIsActive(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <Paper
      ref={boxRef}
      className={`search-${theme}-mode${isActive ? " is-active" : ""}`}
      sx={paperStyle}
    >
      <TextInput
        isActive={isActive}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ColorInput
        isActive={isActive}
        COLOR_LIST={COLOR_LIST}
        searchColor={searchColor}
        setSearchColor={setSearchColor}
      />
      <OrientationInput
        isActive={isActive}
        ORIENTATION_LIST={ORIENTATION_LIST}
        searchOrientation={searchOrientation}
        setSearchOrientation={setSearchOrientation}
      />
      <SubmitButton />
    </Paper>
  );
};

export default DesktopSearchBar;

const paperStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  height: 66,
  border: "1px solid #dddddd",
  borderRadius: 16,
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  "&.search-light-mode": {
    backgroundColor: "#FFF",
    "&.is-active": {
      backgroundColor: "#EBEBEB",
    },
  },
  "&.search-dark-mode": {
    backgroundColor: "rgb(30, 30, 37)",
    border: "1px solid rgb(181, 140, 255)",

    "&.is-active": {},
  },
};
