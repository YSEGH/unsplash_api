import { SearchBarContext } from "@/contexts/SearchContext";
import { Box, Paper } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import TextInput from "./TextInput";
import ColorInput from "./ColorInput";
import OrientationInput from "./OrientationInput";
import SubmitButton from "./SubmitButton";
import { ThemeContext } from "@/contexts/ThemeContext";
import ResetButton from "./ResetButton";
import cx from "classnames";
import { boxStyle, paperStyle } from "@/style/DesktopSearchBarStyle";

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
    errorSearch,
    setErrorSearch,
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
    <Box sx={boxStyle}>
      <Paper
        ref={boxRef}
        className={cx(`${theme}-mode`, { ["is-active"]: isActive })}
        sx={paperStyle}
      >
        <TextInput
          isActive={isActive}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          errorSearch={errorSearch}
          setErrorSearch={setErrorSearch}
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
      <ResetButton />
    </Box>
  );
};

export default DesktopSearchBar;
