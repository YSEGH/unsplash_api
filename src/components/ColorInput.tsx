import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { memo, useContext, useEffect, useRef } from "react";
import { Color } from "@/hooks/useSearch";
import ColorButton from "./ColorOption";
import { ThemeContext } from "@/contexts/ThemeContext";
import cx from "classnames";
import {
  buttonStyle,
  descriptionStyle,
  labelStyle,
  paperStyle,
} from "@/style/ColorInputStyle";

type Props = {
  isActive: boolean;
  COLOR_LIST: Color[];
  searchColor: Color | null;
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
          <Typography className={cx("label", `${theme}-mode`)} sx={labelStyle}>
            Séléctionnez la couleurs
          </Typography>
          <Box width={1}>
            <Grid container spacing={1} marginTop={1}>
              {COLOR_LIST.map((color: Color) => (
                <Grid item md={3} key={color.name}>
                  <ColorButton
                    color={color}
                    isActive={Boolean(
                      searchColor && searchColor.name === color.name
                    )}
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
        <Typography className={cx("label", `${theme}-mode`)} sx={labelStyle}>
          Couleur
        </Typography>
        <Typography
          className={cx("description", `${theme}-mode`)}
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
          <Typography className={cx("label", `${theme}-mode`)} sx={labelStyle}>
            Séléctionner la couleur
          </Typography>
          <Box width={1}>
            <Grid container spacing={1} marginTop={1}>
              {COLOR_LIST.map((color: Color) => (
                <Grid item md={3} key={color.name}>
                  <ColorButton
                    color={color}
                    isActive={Boolean(
                      searchColor && searchColor.name === color.name
                    )}
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
