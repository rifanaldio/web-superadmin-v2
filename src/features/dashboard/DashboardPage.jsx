import React from "react";
import Layout from "../../components/Layout/Layout";
import Papper from "../../components/Layout/Papper/Papper";
import { CardContent } from "@client/pegadaian-ui-kit-react/dist/Card/CardContent/CardContent";

import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"

import { HiOutlineUserGroup } from "react-icons/hi"
import { LiaUsersSolid } from "react-icons/lia"
import { LuServerCrash } from "react-icons/lu"
import { IoStorefrontOutline } from "react-icons/io5"
import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";

const DashboardPage = ({

}) => {

  const cardTotal = [
    {
      value: "100",
      label: "total user pds",
      icon: <HiOutlineUserGroup />

    },
    {
      value: "100",
      label: "Total pegawai cabang",
      icon: <LiaUsersSolid />

    },
    {
      value: "100",
      label: "Total cabang gadai",
      icon: <IoStorefrontOutline />

    },
    {
      value: "100",
      label: "Total promo",
      icon: <LuServerCrash />

    },
  ]
  
  return (
    <Papper
      fit={false}
      useBreadcumb={false}
    // dataBreadcumb={dataBreadcumb}
    >
      <>
        <div className="flex mr-4">
          {/* 1 */}
          <Grid
            gap={4}
            grid={2}
            large={4}
          >
            {
              cardTotal.map((e) => {
                  return (
                    <Card
                      id={e.id}
                      label={e.label}
                      icon={e.icon}
                      number={e.value}
                    />
                  )
                })

            }
          </Grid>
        </div>
      </>
    </Papper>
  );
}

export default DashboardPage;
