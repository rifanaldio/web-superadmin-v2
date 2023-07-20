import React from "react";
import Papper from "../../../components/Layout/Papper/Papper";
import Layout from "../../../components/Layout/Layout";
import Table from "../../../components/Table/Table";
import TableWrapper from "../../../components/Table/TableWrapper";

function GadaiTabunganEmas() {

  const dataBreadcumb = [
    {
      name: "Gadai Tabungan Emas",
      link: '/superadmin/gadai_tabungan_emas'
    },
    {
      name: "Gadai Tabungan Emas",
      link: '/superadmin/gadai_tabungan_emas'
    },
    {
      name: "Gadai Tabungan Emas",
      link: '/superadmin/gadai_tabungan_emas'
    },
  ]
  const defaultData = ([
    {
      name: "John Michael",
      job: "Manager",
      online: false,
      date: "23/04/18",
    },
    {
      name: "John Michael",
      job: "Manager",
      online: true,
      date: "23/04/18",
    },
    {
      name: "John Michael",
      job: "Manager",
      online: false,
      date: "23/04/18",
    },
    {
      name: "John Michael",
      job: "Manager",
      online: true,
      date: "23/04/18",
    },
  ])


  return (
    <Papper
      dataBreadcumb={dataBreadcumb}
      content={
        <>
          <TableWrapper
          title={"Gadai Tabungan Emas"}
            checked={true}
            showIndex={true}
            showAction={false}
            defaultData={defaultData}
            columns={[
              {
                label : "Member",
                render : (item) => item.name
              },
              {
                label : "Function",
                render : (item) => item.job
              },
              {
                label : "Status",
                render : (item) => item.online == true ? "Online" : "Offline"
              },
              {
                label : "Employee",
                render : (item) => item.date
              },
            ]}
          />
        </>
      }
    />
  );
}

export default GadaiTabunganEmas;
