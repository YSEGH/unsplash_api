import Header from "@/components/Header";
import React, { ReactNode } from "react";
import Head from "./head";
import Layout from "@/components/Layout";
import "./global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <html lang="fr">
      <Head />
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          position: "relative",
          backgroundColor: "rgb(18, 18, 23)",
        }}
        className={inter.className}
      >
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <Layout startingTheme="light">
              <header>
                <Header />
              </header>
              <main>{children}</main>
            </Layout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
