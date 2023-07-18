import React from "react";

import Papper from "../../components/Layout/Papper/Papper";
import { HiOutlineUserGroup } from "react-icons/hi"
import { AiOutlineGold } from "react-icons/ai"
import { LiaUsersSolid } from "react-icons/lia"
import { LuServerCrash } from "react-icons/lu"
import { IoStorefrontOutline } from "react-icons/io5"
import { FaRing } from "react-icons/fa"
import { FcElectronics } from "react-icons/fc"
import { MdOutlineLaptopChromebook } from "react-icons/md"
import { FiSmartphone } from "react-icons/fi"
import { RiEBikeLine } from "react-icons/ri"
import Card from "../../components/Card/Card";
import Hint from "../../components/Hint/Hint";

const DashboardPage = ({

}) => {

  const cardTotal = [
    {
      value: "120",
      label: "total user pds",
      loss: null,
      profit: null,
      percentation: null,
      icon: <HiOutlineUserGroup />

    },
    {
      value: "20",
      label: "Total pegawai cabang",
      loss: true,
      profit: false,
      percentation: "10",
      icon: <LiaUsersSolid />

    },
    {
      value: "39",
      label: "Total cabang gadai",
      loss: true,
      profit: false,
      percentation: "1",
      icon: <IoStorefrontOutline />

    },
    {
      value: "40",
      label: "Total promo",
      loss: false,
      profit: true,
      percentation: "9",
      icon: <LuServerCrash />

    },
  ]
  const gadai = [
    {
      value: "19000",
      label: "gadai perhiasan",
      loss: false,
      profit: true,
      percentation: "13",
      icon: <FaRing />

    },
    {
      value: "12398",
      label: "gadai logam mulia",
      loss: false,
      profit: true,
      percentation: "4",
      icon: <AiOutlineGold />

    },
    {
      value: "370",
      label: "gadai handphone",
      loss: true,
      profit: false,
      percentation: "19",
      icon: <FiSmartphone />

    },
    {
      value: "29000",
      label: "gadai elektronik",
      loss: false,
      profit: true,
      percentation: "7",
      icon: <FcElectronics />

    },
    {
      value: "12738",
      label: "gadai kendaraan",
      loss: false,
      profit: true,
      percentation: "2",
      icon: <RiEBikeLine />

    },
    {
      value: "100984000",
      label: "gadai laptop",
      loss: true,
      profit: false,
      percentation: "12",
      icon: <MdOutlineLaptopChromebook />

    },
  ]

  return (
    <Papper
      fit={false}
      useBreadcumb={false}
      content={
        <>
          <div className="flex flex-col mr-4 mt-4 font-nutino">
            {/* Card Total */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-6 xl:gap-6">
              {
                cardTotal.map((e,i) => {
                  return (
                    <Card
                      id={i}
                      label={e.label}
                      icon={e.icon}
                      number={e.value}
                      loss={e.loss}
                      profit={e.profit}
                      percentation={e.percentation}
                    />
                  )
                })
              }

            </div>
            {/* Hint */}
            <Hint
              className="mt-5"
              label="Gadai"
            // color="primary"
            />

            <div className="w-full grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 md:gap-6 gap-6 mt-7">
              {
                gadai.map((e,i) => {
                  return (
                    <Card
                      id={i}
                      label={e.label}
                      icon={e.icon}
                      number={e.value}
                      small={true}
                      loss={e.loss}
                      profit={e.profit}
                      percentation={e.percentation}
                    />
                  )
                })
              }

            </div>
            {/* Hint */}


            <div className="flex h-72 mt-5 w-full">
              <div className="basis-[30%] ">
                <div
                  className={`font-nutino bg-white max-w-sm border border-gray-300 rounded-bl-md shadow-md`}
                >
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-center p-2 space-x-4 bg-slate-100 border-b-2 ">
                      <button className="block py-2 px-4 rounded-lg uppercase ">
                        gadai hari ini
                      </button>
                      <button className="block bg-red-500 py-2 px-4 rounded-lg uppercase">
                        total gadai
                      </button>
                      <hr className="bg-black h-1"/>
                    </div>
                    <div className=" h-56 overflow-y-auto p-2">
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-[70%] bg-slate-300">2</div>
            </div>

            <Hint
              className="mt-5"
              label="Mikro"
            // color="primary"
            />
          </div>

        </>
      }
    />

  );
}

export default DashboardPage;
