import React from "react";
import Papper from "../../../components/Layout/Papper/Papper";
import Layout from "../../../components/Layout/Layout";

function GadaiTabunganEmas() {

  const dataBreadcumb = [
    {
      name : "Gadai Tabungan Emas",
      link : '/superadmin/gadai_tabungan_emas'
    },
    {
      name : "Gadai Tabungan Emas",
      link : '/superadmin/gadai_tabungan_emas'
    },
    {
      name : "Gadai Tabungan Emas",
      link : '/superadmin/gadai_tabungan_emas'
    },
  ] 
  return (
    <Papper
    dataBreadcumb={dataBreadcumb}
    content={
      <>
        
      </>
    }
    />
  );
}

export default GadaiTabunganEmas;
