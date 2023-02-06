import React, { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import AppProvider from "../context/context";
import { Head } from "../pages";
import { AnimatePresence } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/footer";
import CatProvider from "../context/catContext";
function Layout({ children }: { children: ReactNode | ReactElement }) {
  return (
    <AppProvider>
      <ThemeProvider>
        <CatProvider>
          <AnimatePresence>
            <Header />
            {children}
            <Footer />
          </AnimatePresence>
        </CatProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

export default Layout;
