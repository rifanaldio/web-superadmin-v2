import React from "react";
import Layout from "../Layout";

const Papper = ({
children,
dataBreadcumb,
}) => {
  return (
    <>
        <Layout
          breadcumb={dataBreadcumb}
        >
            {children}
        </Layout>    
    </>
  );
}

export default Papper;
