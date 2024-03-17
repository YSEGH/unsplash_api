import { useState } from "react";

interface UseThemeReturn {
  theme: string;
  setTheme: (themeValue: string) => void;
}

const useTheme = (startingTheme: string = "light"): UseThemeReturn => {
  const [theme, setTheme] = useState<string>(startingTheme);

  const validateTheme = (themeValue: string) => {
    if (themeValue === "dark" || themeValue === "light") {
      if (themeValue === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    } else {
      console.warn("Invalid theme value");
    }
  };

  return { theme, setTheme: validateTheme };
};

export default useTheme;
