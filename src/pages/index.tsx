import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage = () => {
  return <h1 className="text-bold text-red-500">hello</h1>;
};
export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
