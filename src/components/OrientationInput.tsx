import {
  Box,
  Button,
  Grid,
  Paper,
  SxProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import OrientationButton from "./OrientationOption";
import { Orientation } from "@/hooks/useSearch";
import { ThemeContext } from "@/contexts/ThemeContext";
import cx from "classnames";

type Props = {
  isActive: boolean;
  ORIENTATION_LIST: Orientation[];
  searchOrientation: Orientation | null;
  setSearchOrientation: (orientation: Orientation) => void;
};

const areEqualOrientation = (prevProps: any, nextProps: any) => {
  return (
    prevProps.searchOrientation === nextProps.searchOrientation &&
    prevProps.isActive === nextProps.isActive
  );
};

const OrientationInput = React.memo(function OrientationInput({
  isActive,
  ORIENTATION_LIST,
  searchOrientation,
  setSearchOrientation,
}: Props) {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  const { theme } = useContext(ThemeContext);
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = React.useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFocus(true);
  };

  const handleOutsideClick: EventListener = (ev: Event) => {
    if (!boxRef.current) return;
    if (boxRef.current instanceof HTMLDivElement) {
      if (!boxRef.current.contains(ev.target as HTMLElement)) {
        setFocus(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (isMobile) {
    return (
      <Box width={1}>
        <Paper className={cx(`${theme}-mode`)} sx={paperStyle}>
          <Typography
            className={cx("label", `${theme}-mode`)}
            fontSize={12}
            textTransform={"none"}
            fontWeight={400}
            sx={labelStyle}
          >
            Sélectionnez le format
          </Typography>
          <Box width={1}>
            <Grid container spacing={1} marginTop={1}>
              {ORIENTATION_LIST.map((orientation: Orientation) => (
                <Grid item md={12} sm={12} xs={12} key={orientation.name}>
                  <OrientationButton
                    theme={theme}
                    orientation={orientation}
                    isActive={Boolean(
                      searchOrientation &&
                        searchOrientation.name === orientation.name
                    )}
                    setSearchOrientation={setSearchOrientation}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Box>
    );
  }
  return (
    <Box
      ref={boxRef}
      width={160}
      height={1}
      padding={0}
      margin={0}
      position={"relative"}
    >
      <Button
        fullWidth
        className={cx(`${theme}-mode`, {
          ["is-focus"]: focus,
          ["is-active"]: isActive,
        })}
        ref={buttonRef}
        disableElevation
        sx={buttonStyle}
        variant="contained"
        onClick={handleClick}
      >
        <Typography
          className={cx("label", `${theme}-mode`)}
          fontSize={12}
          textTransform={"none"}
          fontWeight={400}
          sx={labelStyle}
        >
          Orientation
        </Typography>
        <Typography
          className={cx("description", `${theme}-mode`)}
          fontSize={14}
          textTransform={"none"}
          color={"#323232"}
          fontWeight={100}
          sx={descriptionStyle}
        >
          {searchOrientation ? searchOrientation.title : "Quel format ?"}
        </Typography>
      </Button>
      <Box
        ref={popupRef}
        position={"absolute"}
        top={"100%"}
        left={0}
        display={focus ? "flex" : "none"}
        zIndex={100}
        width={280}
      >
        <Paper className={cx(`${theme}-mode`)} sx={paperStyle}>
          <Typography
            className={cx("label", `${theme}-mode`)}
            fontSize={12}
            textTransform={"none"}
            fontWeight={400}
            sx={labelStyle}
          >
            Sélectionner le format
          </Typography>
          <Box width={1}>
            <Grid container spacing={1} marginTop={1}>
              {ORIENTATION_LIST.map((orientation: Orientation) => (
                <Grid item md={12} sm={12} xs={12} key={orientation.name}>
                  <OrientationButton
                    theme={theme}
                    orientation={orientation}
                    isActive={Boolean(
                      searchOrientation &&
                        searchOrientation.name === orientation.name
                    )}
                    setSearchOrientation={setSearchOrientation}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
},
areEqualOrientation);

export default OrientationInput;

const buttonStyle: SxProps = {
  cursor: "pointer",
  outline: "none",
  height: 1,
  borderRadius: 16,
  paddingLeft: 4,
  paddingRight: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: "transparent",
  boxShadow: "none",
  "&.light-mode": {
    "&:not(.is-focus)": {
      "&:hover": {
        backgroundColor: "#EBEBEB",
      },
    },
    "&.is-active": {
      "&:not(.is-focus)": {
        "&:hover": {
          backgroundColor: "#DDDDDD",
        },
      },
    },
  },
  "&.dark-mode": {
    "&:hover": {
      backgroundColor: "rgb(18, 18, 23)",
    },
  },

  "&.is-focus": {
    backgroundColor: "#FFF",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    "&.dark-mode": { backgroundColor: "rgb(180, 139, 254)" },
  },
};

const paperStyle: SxProps = {
  paddingX: { md: 4, sm: 2, xs: 2 },
  paddingY: 2,
  boxShadow: {
    md: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
    sm: "none",
    xs: "none",
  },
  "&.light-mode": {
    backgroundColor: "#FFF",
  },
  "&.dark-mode": {
    backgroundColor: "rgb(30, 30, 37)",
  },
};

const labelStyle: SxProps = {
  "&.light-mode": {
    color: "rgb(181, 140, 255)",
  },
  "&.dark-mode": {
    color: "#FFF",
  },
};

const descriptionStyle: SxProps = {
  opacity: 0.6,
  "&.light-mode": {
    color: "#000",
  },
  "&.dark-mode": {
    color: "#FFF",
  },
};
