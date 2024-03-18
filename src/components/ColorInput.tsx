import {
  Box,
  Button,
  Grid,
  Paper,
  SxProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { memo, useContext, useEffect, useRef } from "react";
import { Color } from "@/hooks/useSearch";
import ColorButton from "./ColorOption";
import { ThemeContext } from "@/contexts/ThemeContext";
import cx from "classnames";

type Props = {
  isActive: boolean;
  COLOR_LIST: Color[];
  searchColor: Color;
  setSearchColor: (color: Color) => void;
};

const areEqualColor = (prevProps: any, nextProps: any) => {
  return (
    prevProps.searchColor === nextProps.searchColor &&
    prevProps.isActive === nextProps.isActive
  );
};

const ColorInput = memo(function ColorInput({
  isActive,
  COLOR_LIST,
  searchColor,
  setSearchColor,
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
            sx={labelStyle}
            fontWeight={400}
          >
            Séléctionnez la couleurs
          </Typography>
          <Box width={1}>
            <Grid container spacing={1} marginTop={1}>
              {COLOR_LIST.map((color: Color) => (
                <Grid item md={3} key={color.name}>
                  <ColorButton
                    color={color}
                    isActive={searchColor && searchColor.name === color.name}
                    setSearchColor={setSearchColor}
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
      width={150}
      height={1}
      padding={0}
      margin={0}
      position={"relative"}
    >
      <Button
        className={cx(`${theme}-mode`, {
          ["is-focus"]: focus,
          ["is-active"]: isActive,
        })}
        fullWidth
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
          Couleur
        </Typography>
        <Typography
          className={cx("description", `${theme}-mode`)}
          fontSize={14}
          textTransform={"none"}
          color={"#323232"}
          fontWeight={100}
          sx={descriptionStyle}
        >
          {searchColor ? searchColor.title : "Quelle couleur ?"}
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
            sx={labelStyle}
            fontWeight={400}
          >
            Séléctionner la couleur
          </Typography>
          <Box width={1}>
            <Grid container spacing={1} marginTop={1}>
              {COLOR_LIST.map((color: Color) => (
                <Grid item md={3} key={color.name}>
                  <ColorButton
                    color={color}
                    isActive={searchColor && searchColor.name === color.name}
                    setSearchColor={setSearchColor}
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
areEqualColor);

export default ColorInput;

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
