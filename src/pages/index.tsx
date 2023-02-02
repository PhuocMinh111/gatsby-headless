import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "../layout/layout";
import Hero from "../components/hero";
import Info from "../components/info";
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Info />
    </Layout>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
