import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "../layout/layout";
import Hero from "../components/hero";
import Info from "../components/info";
import SliderComp from "../components/slider";
import Calculator from "../components/calculator";
import { info } from "console";
import Cat from "../components/cat";
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Info />
      <Calculator />
      <Cat />
    </Layout>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <title>KinKa Finance</title>;
