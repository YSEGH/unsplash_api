"use client";

import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";
import { CookiesProvider } from "react-cookie";
import { PhotosProvider } from "@/contexts/PhotosContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { BackdropProvider } from "@/contexts/BackdropContext";

interface LayoutProps extends React.PropsWithChildren {
  startingTheme: string;
}

const Layout: React.FC<LayoutProps> = ({ startingTheme, children }) => {
  return (
    <CookiesProvider>
      <PhotosProvider>
        <ThemeProvider startingTheme={startingTheme}>
          <LayoutThemeProvider>
            <SearchProvider>
              <BackdropProvider>{children}</BackdropProvider>
            </SearchProvider>
          </LayoutThemeProvider>
        </ThemeProvider>
      </PhotosProvider>
    </CookiesProvider>
  );
};

const LayoutThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "#FFF" }
          : { backgroundColor: "rgb(18, 18, 23)" }
      }
    >
      {children}
    </div>
  );
};

export default Layout;
