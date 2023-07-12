import React, { Fragment } from "react";
import { AiOutlineHome, AiOutlineGold } from "react-icons/ai"
import { Dialog, Transition } from "@headlessui/react";
import { BsFillSkipBackwardFill } from "react-icons/bs"
import { AiOutlineBank } from "react-icons/ai"
import { LuBanknote } from "react-icons/lu"
import MenuItem from "./MenuItem";

const Sidebar = ({
    open = false,
    onClose = null
}) => {
    const handleClose = () => {
        onClose()
    }
    const menuData = [
        {
            label: 'Dashboard',
            children: [
                {
                    label: 'Dashboard',
                    path: '/superadmin/dashboard',
                    icon: <AiOutlineHome />
                }
            ]
        },
        {
            label: 'Transaksi Gadai',
            children: [
                {
                    label: 'Gadai Tabungan Emas',
                    index: 'Gadai Tabungan Emas',
                    path: '/superadmin/gadai_tabungan_emas',
                    icon: <AiOutlineGold />,
                    childPath: []
                },
                {
                    label: 'Master Anggunan Gadai',
                    index: 'Master Anggunan Gadai',
                    icon: <AiOutlineBank />,
                    childPath: [
                        {
                            label: "Data Merk Elektronik",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Kendaraan",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Laptop",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Smartphone",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                    ]
                },
                {
                    label: 'Rule Perkiraan Pinjaman',
                    index: 'Rule Perkiraan Pinjaman',
                    icon: <LuBanknote />,
                    path: '/internal/product',
                    childPath: []
                }
            ]
        },
        {
            label: 'Transaksi Gadai',
            children: [
                {
                    label: 'Gadai Tabungan Emas',
                    index: 'Gadai Tabungan Emas',
                    path: '/superadmin/gadai_tabungan_emas',
                    icon: <AiOutlineGold />,
                    childPath: []
                },
                {
                    label: 'Master Anggunan Gadai',
                    index: 'Master Anggunan Gadai',
                    icon: <AiOutlineBank />,
                    childPath: [
                        {
                            label: "Data Merk Elektronik",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Kendaraan",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Laptop",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Smartphone",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                    ]
                },
                {
                    label: 'Rule Perkiraan Pinjaman',
                    index: 'Rule Perkiraan Pinjaman',
                    icon: <LuBanknote />,
                    path: '/internal/product',
                    childPath: []
                }
            ]
        },
        {
            label: 'Transaksi Gadai',
            children: [
                {
                    label: 'Gadai Tabungan Emas',
                    index: 'Gadai Tabungan Emas',
                    path: '/superadmin/gadai_tabungan_emas',
                    icon: <AiOutlineGold />,
                    childPath: []
                },
                {
                    label: 'Master Anggunan Gadai',
                    index: 'Master Anggunan Gadai',
                    icon: <AiOutlineBank />,
                    childPath: [
                        {
                            label: "Data Merk Elektronik",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Kendaraan",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Laptop",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Smartphone",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                    ]
                },
                {
                    label: 'Rule Perkiraan Pinjaman',
                    index: 'Rule Perkiraan Pinjaman',
                    icon: <LuBanknote />,
                    path: '/internal/product',
                    childPath: []
                }
            ]
        },
        {
            label: 'Transaksi Gadai',
            children: [
                {
                    label: 'Gadai Tabungan Emas',
                    index: 'Gadai Tabungan Emas',
                    path: '/superadmin/gadai_tabungan_emas',
                    icon: <AiOutlineGold />,
                    childPath: []
                },
                {
                    label: 'Master Anggunan Gadai',
                    index: 'Master Anggunan Gadai',
                    icon: <AiOutlineBank />,
                    childPath: [
                        {
                            label: "Data Merk Elektronik",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Kendaraan",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Laptop",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Smartphone",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                    ]
                },
                {
                    label: 'Rule Perkiraan Pinjaman',
                    index: 'Rule Perkiraan Pinjaman',
                    icon: <LuBanknote />,
                    path: '/internal/product',
                    childPath: []
                }
            ]
        },
        {
            label: 'Transaksi Gadai',
            children: [
                {
                    label: 'Gadai Tabungan Emas',
                    index: 'Gadai Tabungan Emas',
                    path: '/superadmin/gadai_tabungan_emas',
                    icon: <AiOutlineGold />,
                    childPath: []
                },
                {
                    label: 'Master Anggunan Gadai',
                    index: 'Master Anggunan Gadai',
                    icon: <AiOutlineBank />,
                    childPath: [
                        {
                            label: "Data Merk Elektronik",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Kendaraan",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Laptop",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Smartphone",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                    ]
                },
                {
                    label: 'Rule Perkiraan Pinjaman',
                    index: 'Rule Perkiraan Pinjaman',
                    icon: <LuBanknote />,
                    path: '/internal/product',
                    childPath: []
                }
            ]
        },
        {
            label: 'Transaksi Gadai',
            children: [
                {
                    label: 'Gadai Tabungan Emas',
                    index: 'Gadai Tabungan Emas',
                    path: '/superadmin/gadai_tabungan_emas',
                    icon: <AiOutlineGold />,
                    childPath: []
                },
                {
                    label: 'Master Anggunan Gadai',
                    index: 'Master Anggunan Gadai',
                    icon: <AiOutlineBank />,
                    childPath: [
                        {
                            label: "Data Merk Elektronik",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Kendaraan",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Laptop",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Smartphone",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                    ]
                },
                {
                    label: 'Rule Perkiraan Pinjaman',
                    index: 'Rule Perkiraan Pinjaman',
                    icon: <LuBanknote />,
                    path: '/internal/product',
                    childPath: []
                }
            ]
        },
        {
            label: 'Transaksi Gadai',
            children: [
                {
                    label: 'Gadai Tabungan Emas',
                    index: 'Gadai Tabungan Emas',
                    path: '/superadmin/gadai_tabungan_emas',
                    icon: <AiOutlineGold />,
                    childPath: []
                },
                {
                    label: 'Master Anggunan Gadai',
                    index: 'Master Anggunan Gadai',
                    icon: <AiOutlineBank />,
                    childPath: [
                        {
                            label: "Data Merk Elektronik",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Kendaraan",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Laptop",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                        {
                            label: "Data Merk Smartphone",
                            path: "data_merk_elektronik",
                            icon: <AiOutlineHome />
                        },
                    ]
                },
                {
                    label: 'Rule Perkiraan Pinjaman',
                    index: 'Rule Perkiraan Pinjaman',
                    icon: <LuBanknote />,
                    path: '/internal/product',
                    childPath: []
                }
            ]
        },

    ];

    return (
        <>
            {
                open ? (
                    <div className="h-screen w-screen">
                        <Transition
                            show={open}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                            as={Fragment}
                        >
                            <Dialog
                                as="div"
                                id="modal"
                                className="fixed inset-0 z-10 overflow-y-auto"
                                onClose={() => { }}
                            >
                                <div className="h-full w-64 px-3 py-4 overflow-y-auto text-sm border-r-2 bg-slate-50">
                                    <ul>
                                        <div onClick={() => handleClose()} className="flex items-end justify-end hover:bg-slate-500 hover:rounded-lg cursor-pointer group">
                                            <div className="group-hover:bg-slate-500 group-hover:text-white px-2 py-1 rounded-full cursor-pointer text-lg">
                                                <BsFillSkipBackwardFill />
                                            </div>
                                        </div>
                                        {menuData.map((menuItem, index) => (
                                            <li key={index} className="pt-2">
                                                <div className="text-1xl font-bold uppercase pb-2 pt-2">{menuItem.label}</div>
                                                <hr />
                                                <ul className="">
                                                    {menuItem.children.map((childItem, childIndex) => (
                                                        <MenuItem
                                                            key={childIndex}
                                                            label={childItem.label}
                                                            path={childItem.path}
                                                            childPath={childItem.childPath}
                                                            icon={childItem.icon}
                                                        />
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                ) : (
                    <div className="h-full w-64 px-4 overflow-y-auto text-sm border-r-2 bg-slate-50">
                        <ul className="">
                            {menuData.map((menuItem, index) => (
                                <li key={index} className="pt-2">
                                    <div className="text-1xl text-slate-700 font-semibold uppercase pb-2 pt-2 ">{menuItem.label}</div>
                                    <hr />
                                    <ul className="">
                                        {menuItem.children.map((childItem, childIndex) => (
                                            <MenuItem
                                                key={childIndex}
                                                label={childItem.label}
                                                path={childItem.path}
                                                childPath={childItem.childPath}
                                                icon={childItem.icon}
                                            />
                                        ))}
                                    </ul>
                                </li>
                            ))}
                            <hr className="h-px my-8 w-10 bg-white border-0 " />
                        </ul>
                    </div>
                )
            }
        </>
    );
}

export default Sidebar;
