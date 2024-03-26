import { SearchBarContext } from "@/contexts/SearchContext";
import { Box, Paper, Skeleton, SxProps } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import TextInput from "./TextInput";
import ColorInput from "./ColorInput";
import OrientationInput from "./OrientationInput";
import SubmitButton from "./SubmitButton";
import { ThemeContext } from "@/contexts/ThemeContext";
import ResetButton from "./ResetButton";
import cx from "classnames";

type Props = {};

const DesktopSearchBar = ({}: Props) => {
  /*   const [loading, setLoading] = useState(true);
   */ const { theme } = useContext(ThemeContext);
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

  /*   if (loading) {
    return (
      <Box
        sx={boxStyle}
        width={1}
        display={"flex"}
        justifyContent={"center"}
        gap={2}
      >
        <Skeleton
          variant="rounded"
          width={600}
          height={66}
          sx={{ borderRadius: 60 }}
        />
        <Skeleton variant="circular" width={66} height={66} />
      </Box>
    );
  } */

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

const boxStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const paperStyle: SxProps = {
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  height: 66,
  borderRadius: 16,
  border: "1px solid #f0f0f0",
  boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
  "&.light-mode": {
    backgroundColor: "#FFF",
    "&.is-active": {
      backgroundColor: "#EBEBEB",
    },
  },
  "&.dark-mode": {
    backgroundColor: "rgb(30, 30, 37)",
    border: "1px solid rgb(181, 140, 255)",

    "&.is-active": {},
  },
};
