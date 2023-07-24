import React, { useState } from "react";
import Papper from "../../../components/Layout/Papper/Papper";
import TableWrapper from "../../../components/Table/TableWrapper";
import { AiOutlinePlus } from "react-icons/ai"
import { HiOutlinePencilSquare } from "react-icons/hi2"
import FormGadaiTabunganEmas from "./FormGadaiTabunganEmas";

function GadaiTabunganEmas() {

  const [openForm , setOpenForm] = useState(false)
  const [setlectedItem , setSelectedItem] = useState(null)

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
  const defaultData = ([
    {
      name: "Rifan",
      job: "Lorem ipsum dolor sit amet.",
      online: true,
      date: "23/04/18",
    },
    {
      name: "Aldio",
      job: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, iusto.",
      online: false,
      date: "23/04/18",
    },
    {
      name: "John Michael",
      job: "Manager",
      online: false,
      date: "23/04/18",
    },
    {
      name: "Sitrisna",
      job: "Manager",
      online: false,
      date: "23/04/18",
    },
    {
      name: "Nawaitu",
      job: "Manager",
      online: false,
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
      online: false,
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
      online: false,
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
      online: false,
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
      online: false,
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
      online: false,
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
      online: false,
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
      online: false,
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
      online: false,
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
      online: false,
      date: "23/04/18",
    },
  ])


  return (
    <Papper
      dataBreadcumb={dataBreadcumb}
      content={
        <>
          <TableWrapper
            checked={true}
            showIndex={true}
            showAction={false}
            defaultData={defaultData || []}
            actions={[
              new TableWrapper.action(
                "Create",
                <AiOutlinePlus />,
                () => {
                  setOpenForm(true)
                },
                "icon"
              )
            ]}
            itemActions={[
              new TableWrapper.action(
                "Edit",
                <HiOutlinePencilSquare />,
                (item) => {
                  setSelectedItem(item)
                  setOpenForm(true)
                },
                "icon",
                "blue"
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
                render: (item) => item.online == true ? "Online" : "Offline"
              },
              {
                show: true,
                label: "Employee",
                render: (item) => item.date
              },
            ]}
          />
          <FormGadaiTabunganEmas 
            item={setlectedItem}
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
