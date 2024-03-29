import { Box, Button, Input, Typography, useMediaQuery } from "@mui/material";
import React, {
  useEffect,
  useRef,
  memo,
  useContext,
  useCallback,
  useState,
} from "react";
import cx from "classnames";
import { ThemeContext } from "@/contexts/ThemeContext";
import { debounce } from "throttle-debounce";
import {
  buttonStyle,
  inputPropsStyle,
  inputStyle,
  labelStyle,
  rootStyle,
} from "@/style/TextInputStyle";

type Props = {
  isActive: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  errorSearch: boolean;
  setErrorSearch: (bool: boolean) => void;
};

const isEqualSearchQuery = (prevProps: any, nextProps: any) => {
  return (
    prevProps.errorSearch === nextProps.errorSearch &&
    prevProps.searchQuery === nextProps.searchQuery &&
    prevProps.isActive === nextProps.isActive
  );
};

const TextInput: React.FC<Props> = ({
  isActive,
  searchQuery,
  setSearchQuery,
  errorSearch,
  setErrorSearch,
}: Props) => {
  const [search, setSearch] = useState("");
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
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

  const onChangeHandler = useCallback(
    debounce(300, (value: string) => {
      if (errorSearch && value !== "") {
        setErrorSearch(false);
      }
      setSearchQuery(value);
    }),
    []
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setSearch(searchQuery);

    return () => {};
  }, [searchQuery]);

  if (isMobile) {
    return (
      <Box paddingX={2} paddingY={{ md: 0, sm: 2, xs: 2 }} margin={0}>
        <Typography
          className={cx(`${theme}-mode`, { ["is-error"]: errorSearch })}
          sx={labelStyle}
        >
          Votre recherche
        </Typography>
        <Input
          className={cx(`${theme}-mode`, { ["is-error"]: errorSearch })}
          fullWidth
          ref={inputRef}
          placeholder="Saisissez un mot clé"
          sx={inputStyle}
          slotProps={{
            root: {
              sx: rootStyle,
            },
            input: {
              className: cx(`${theme}-mode`, { ["is-error"]: errorSearch }),
              sx: inputPropsStyle,
            },
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            onChangeHandler(e.target.value);
          }}
          value={search}
        />
      </Box>
    );
  }

  return (
    <Box ref={boxRef} height={1} padding={0} margin={0} width={220}>
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
          className={cx(`${theme}-mode`, { ["is-error"]: errorSearch })}
          sx={labelStyle}
        >
          Votre recherche
        </Typography>
        <Input
          fullWidth
          ref={inputRef}
          placeholder="Saisir un mot clé"
          sx={inputStyle}
          slotProps={{
            root: {
              sx: rootStyle,
            },
            input: {
              className: cx(`${theme}-mode`, { ["is-error"]: errorSearch }),
              sx: inputPropsStyle,
            },
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            onChangeHandler(e.target.value);
          }}
          value={search}
        />
      </Button>
    </Box>
  );
};

export default memo(TextInput, isEqualSearchQuery);
