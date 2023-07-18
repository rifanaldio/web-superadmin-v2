import React from "react";
import Layout from "../Layout";
import { render } from "@testing-library/react";

const Papper = ({
dataBreadcumb,
useBreadcumb = true,
fit,
content
}) => {
  return (
    <>
        <Layout
          breadcumb={dataBreadcumb}
          fit={fit}
          useBreadcumb={useBreadcumb}
        >
          {content}
        </Layout>
               
    </>
  );
}

export default Papper;
