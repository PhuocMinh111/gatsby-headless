import React, { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import AppProvider from "../context/context";
import { Head } from "../pages";
import Header from "../components/header";
import Footer from "../components/footer";
function Layout({ children }: { children: any }) {
  return (
    <AppProvider>
      <ThemeProvider>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </AppProvider>
  );
}

export default Layout;
