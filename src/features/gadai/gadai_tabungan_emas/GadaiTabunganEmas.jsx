import React, { useState } from "react";
import Papper from "../../../components/Layout/Papper/Papper";
import TableWrapper from "../../../components/Table/TableWrapper";
import { AiOutlinePlus } from "react-icons/ai"
import Modal from "../../../components/Modal/Modal";
import FormGadaiTabunganEmas from "./FormGadaiTabunganEmas";

function GadaiTabunganEmas() {

  const [openForm , setOpenForm] = useState(false)

  const dataBreadcumb = [
    {
      name: "Gadai Tabungan Emas",
      link: '/superadmin/gadai_tabungan_emas'
    },
    {
      name: "Gadai Tabungan Emas",
      link: '/superadmin/gadai_tabungan_emas'
    },
  ]
  // const defaultData = ([
  //   {
  //     name: "John Michael",
  //     job: "Lorem ipsum dolor sit amet.",
  //     online: true,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, iusto.",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  //   {
  //     name: "John Michael",
  //     job: "Manager",
  //     online: false,
  //     date: "23/04/18",
  //   },
  // ])


  return (
    <Papper
      dataBreadcumb={dataBreadcumb}
      content={
        <>
          <TableWrapper
            checked={true}
            showIndex={true}
            showAction={false}
            defaultData={[]}
            actions={[
              new TableWrapper.action(
                "Create",
                <AiOutlinePlus />,
                () => {
                  setOpenForm(true)
                }
              )
            ]}
            columns={[
              {
                show: true,
                label: "Member",
                render: (item) => item.name
              },
              {
                show: true,
                label: "Function",
                render: (item) => item.job
              },
              {
                show: true,
                label: "Status",
                render: (item) => item.online == true ? <button className="bg-red-50 p-2">"Online"</button>  : "Offline"
              },
              {
                show: true,
                label: "Employee",
                render: (item) => item.date
              },
            ]}
          />
          <FormGadaiTabunganEmas 
            open={openForm}
            onRequestClose={() => {
              setOpenForm(false)
            }}
          />
        </>
      }
    />
  );
}

export default GadaiTabunganEmas;
