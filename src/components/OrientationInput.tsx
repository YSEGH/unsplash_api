import { Box, Button, Grid, Paper, SxProps, Typography } from "@mui/material";
import React, { memo, useEffect, useRef } from "react";
import OrientationButton from "./OrientationOption";
import { Orientation } from "@/hooks/useSearch";

type Props = {
  isActive: boolean;
  ORIENTATION_LIST: Orientation[];
  searchOrientation: string;
  setSearchOrientation: (query: string) => void;
};

const areEqualOrientation = (prevProps: any, nextProps: any) => {
  return prevProps.searchOrientation === nextProps.searchOrientation;
};

const OrientationInput = React.memo(function OrientationInput({
  isActive,
  ORIENTATION_LIST,
  searchOrientation,
  setSearchOrientation,
}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = React.useState<boolean>(false);

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

  return (
    <Box
      ref={boxRef}
      width={190}
      height={1}
      padding={0}
      margin={0}
      position={"relative"}
    >
      <Button
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
          Orientation
        </Typography>
        <Typography
          className="description"
          fontSize={14}
          textTransform={"none"}
          color={"#323232"}
          fontWeight={100}
          sx={{ opacity: 0.6 }}
        >
          Quelle orientation ?
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
            Sélèctionnez l&apos;orientation
          </Typography>
          <Box width={1}>
            <Grid container spacing={1} marginTop={1}>
              {ORIENTATION_LIST.map((orientation: Orientation) => (
                <Grid item md={12} sm={12} xs={12} key={orientation.name}>
                  <OrientationButton
                    orientation={orientation}
                    isActive={searchOrientation === orientation.name}
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
