import { Box, Button, Input, SxProps, Typography } from "@mui/material";
import React, { useEffect, useRef, memo, useContext } from "react";
import cx from "classnames";
import { ThemeContext } from "@/contexts/ThemeContext";

type Props = {
  isActive: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const isEqualSearchQuery = (prevProps: any, nextProps: any) => {
  return (
    prevProps.searchQuery === nextProps.searchQuery &&
    prevProps.isActive === nextProps.isActive
  );
};

const TextInput = memo(function TextInput({
  isActive,
  searchQuery,
  setSearchQuery,
}: Props) {
  const { theme } = useContext(ThemeContext);
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
          className={cx(`${theme}-mode`)}
          fontSize={12}
          textTransform={"none"}
          fontWeight={400}
          sx={labelStyle}
        >
          Votre recherche
        </Typography>
        <Input
          className={cx(`${theme}-mode`)}
          fullWidth
          ref={inputRef}
          placeholder="Saisissez des mots clés"
          sx={{
            "&::after": {
              display: "none",
            },
            "&::before": {
              display: "none",
            },
          }}
          slotProps={{
            root: {
              sx: {
                cursor: "pointer",
                pointerEvents: "none",
              },
            },
            input: { className: `${theme}-mode`, sx: inputStyle },
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
  "&.light-mode": {
    color: "#000",

    "&::placeholder": {
      color: "#000",
      opacity: 0.6,
    },
  },
  "&.dark-mode": {
    color: "#fff",

    "&::placeholder": {
      color: "#fff",
      opacity: 0.6,
    },
  },
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

const labelStyle: SxProps = {
  "&.light-mode": {
    color: "#000",
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
