import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai"

const Sidebar = ({
    open = true
}) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const menuData = [
        {
            label: 'Dashboard',
            children: [
                {
                    label: 'Dashboard',
                    path: '/superadmin/dashboard',
                    icon : <AiOutlineHome />
                }
            ]
        },
        {
            label: 'Transaksi Gadai',
            children: [
                {
                    label: 'Gadai Tabungan Emas',
                    index: 'Gadai Tabungan Emas',
                    path: '/internal/resource_product',
                    icon : <AiOutlineHome />,
                    childPath: []
                },
                {
                    label: 'Master Anggunan Gadai',
                    index: 'Master Anggunan Gadai',
                    icon : <AiOutlineHome />,
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
                    icon: <AiOutlineHome />,
                    path: '/internal/product',
                    childPath: []
                }
            ]
        },
    ];

    const MenuItem = ({ label, path, childPath, icon }) => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen);
        };

        return (
            <Link onClick={childPath && (childPath.length != 0 ? toggleDropdown : null)} to={path} className="block py-2.5 px-4 hover:bg-gray-700 hover:text-white rounded">
               <div className="flex items-center">
                <span className="pr-5">
                {icon}
                </span>
                {label}
                </div>
                {childPath && childPath.length > 0 ? (
                    <div
                        className={`${isDropdownOpen ? 'block' : 'hidden'
                            } bg-gray-800 text-white rounded-lg py-4 px-4 mt-2 list-item`}
                    >
                        {childPath.map((childItem, index) => (
                            <Link to={childItem.path} key={index} className="block py-1.5 w-full h-full hover:bg-gray-700 rounded">
                                <div className="flex items-center">
                                <span className="pr-3">{childItem.icon}</span>
                                <span className="pr-5 text-xs">
                                {childItem.label}
                                </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : null}
            </Link>
        );
    };


    return (
        <>
            <div class="h-full px-3 py-4 overflow-y-auto text-sm border-r-2">
                {open &&
                    <ul>
                        {menuData.map((menuItem, index) => (
                            <li key={index}>
                                <div className="text-1xl font-semibold uppercase pb-2 pt-2  ">{menuItem.label}</div>
                                <ul >
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

                }
            </div>
        </>
    );
}

export default Sidebar;
