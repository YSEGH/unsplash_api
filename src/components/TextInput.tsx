import { Box, Button, Input, SxProps, Typography } from "@mui/material";
import React, { useEffect, useRef, memo } from "react";

type Props = {
  isActive: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const isEqualSearchQuery = (prevProps: any, nextProps: any) => {
  return prevProps.searchQuery === nextProps.searchQuery;
};

const TextInput = memo(function TextInput({
  isActive,
  searchQuery,
  setSearchQuery,
}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = React.useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFocus(true);
    if (inputRef.current && (inputRef.current as HTMLElement)) {
      (inputRef.current.firstChild as HTMLElement).focus();
    }
  };

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
    "&.button--focus": {
      boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    },
    "&:hover": {
      backgroundColor: focus ? "#FFF" : isActive ? "#DDDDDD" : "#EBEBEB",
      boxShadow: focus ? "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" : "none",
    },
    "&:focus": {
      outline: "none",
      boxShadow: focus ? "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" : "none",
    },
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
    <Box ref={boxRef} height={1} padding={0} margin={0} width={250}>
      <Button
        className={focus ? `button--focus` : undefined}
        fullWidth
        ref={buttonRef}
        disableElevation
        sx={buttonStyle}
        variant="contained"
        onClick={handleClick}
      >
        <Typography
          fontSize={12}
          textTransform={"none"}
          color={"rgb(34, 34, 34)"}
          fontWeight={500}
        >
          Votre recherche
        </Typography>
        <Input
          fullWidth
          ref={inputRef}
          sx={inputStyle}
          placeholder="Saisissez des mots clés"
          slotProps={{
            root: {
              sx: {
                cursor: "pointer",
                pointerEvents: "none",
              },
            },
            input: {
              sx: {
                cursor: "pointer",
                pointerEvents: "none",
                color: "#717171",

                "&::placeholder": {
                  fontSize: 14,
                  fontWeight: 100,
                  color: "#323232",
                  opacity: 0.6,
                },
              },
            },
          }}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </Button>
    </Box>
  );
},
isEqualSearchQuery);

export default TextInput;

const inputStyle: SxProps = {
  outline: "none",
  height: 20,
  border: "none",
  fontSize: 14,
  fontWeight: 100,
  cursor: "pointer",
  pointerEvents: "none",
  "&::after": {
    display: "none",
  },
  "&::before": {
    display: "none",
  },
};
