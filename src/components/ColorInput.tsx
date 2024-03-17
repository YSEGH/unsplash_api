import { Box, Button, Grid, Paper, SxProps, Typography } from "@mui/material";
import React, { memo, useContext, useEffect, useRef } from "react";
import { Color } from "@/hooks/useSearch";
import ColorButton from "./ColorOption";
import { ThemeContext } from "@/contexts/ThemeContext";
import cx from "classnames";

type Props = {
  isActive: boolean;
  COLOR_LIST: Color[];
  searchColor: string;
  setSearchColor: (query: string) => void;
};

const areEqualColor = (prevProps: any, nextProps: any) => {
  return prevProps.searchColor === nextProps.searchColor;
};

const ColorInput = memo(function ColorInput({
  isActive,
  COLOR_LIST,
  searchColor,
  setSearchColor,
}: Props) {
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

  const buttonStyle: SxProps = {
    cursor: "pointer",
    outline: "none",
    height: 1,
    borderRadius: 16,
    paddingX: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: focus ? "#FFF" : "transparent",
    boxShadow: focus ? "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" : "none",
    "&:hover": {
      backgroundColor: focus ? "#FFF" : isActive ? "#DDDDDD" : "#EBEBEB",
      boxShadow: focus ? "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" : "none",
    },
    "&:focus": {
      outline: "none",
    },
  };

  return (
    <Box
      ref={boxRef}
      width={175}
      height={1}
      padding={0}
      margin={0}
      position={"relative"}
    >
      <Button
        className={cx(`${theme}-mode`, { ["is-focus"]: focus })}
        fullWidth
        ref={buttonRef}
        disableElevation
        sx={buttonStyle}
        variant="contained"
        onClick={handleClick}
      >
        <Typography
          className="label"
          fontSize={12}
          textTransform={"none"}
          color={"#000"}
          fontWeight={600}
        >
          Couleur
        </Typography>
        <Typography
          className="description"
          fontSize={14}
          textTransform={"none"}
          color={"#323232"}
          fontWeight={100}
          sx={{ opacity: 0.6 }}
        >
          {searchColor !== "" ? searchColor : "Quelle couleur ?"}
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
        <Paper sx={{ padding: 4 }}>
          <Typography
            fontSize={12}
            textTransform={"none"}
            color={"#000"}
            fontWeight={600}
          >
            Séléctionnez la/les couleurs
          </Typography>
          <Box width={1}>
            <Grid container spacing={1} marginTop={1}>
              {COLOR_LIST.map((color: Color) => (
                <Grid item md={3} key={color.name}>
                  <ColorButton
                    color={color}
                    isActive={searchColor === color.name}
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
