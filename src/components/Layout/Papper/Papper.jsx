import React from "react";
import Layout from "../Layout";

const Papper = ({
children,
dataBreadcumb,
useBreadcumb = true,
fit
}) => {
  return (
    <>
        <Layout
          breadcumb={dataBreadcumb}
          fit={fit}
          useBreadcumb={useBreadcumb}
        >
            {children}
        </Layout>    
    </>
  );
}

export default Papper;
