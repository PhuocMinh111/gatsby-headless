import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/header";

const IndexPage = () => {
  return (
    <>
      <Header />
    </>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
