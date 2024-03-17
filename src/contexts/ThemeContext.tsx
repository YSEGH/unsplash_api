import React, { createContext } from "react";
import useTheme from "../hooks/useTheme";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const defaultContext: ThemeContextType = {
  theme: "light",
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);

interface propsProvider {
  children: React.ReactNode;
  startingTheme: string;
}

const ThemeProvider: React.FC<propsProvider> = ({
  children,
  startingTheme,
}) => {
  const { theme, setTheme } = useTheme(startingTheme);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
