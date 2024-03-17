"use client";

import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";
import { PhotosProvider } from "@/contexts/PhotosContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { BackdropProvider } from "@/contexts/BackdropContext";

interface LayoutProps extends React.PropsWithChildren {
  startingTheme: string;
}

const Layout: React.FC<LayoutProps> = ({ startingTheme, children }) => {
  return (
    <PhotosProvider>
      <ThemeProvider startingTheme={startingTheme}>
        <LayoutThemeProvider>
          <SearchProvider>
            <BackdropProvider>{children}</BackdropProvider>
          </SearchProvider>
        </LayoutThemeProvider>
      </ThemeProvider>
    </PhotosProvider>
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
          ? { minHeight: "100vh", backgroundColor: "#FFF" }
          : { minHeight: "100vh", backgroundColor: "rgb(18, 18, 23)" }
      }
    >
      {children}
    </div>
  );
};

export default Layout;
