import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "../layout/layout";
import Hero from "../components/hero";
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
