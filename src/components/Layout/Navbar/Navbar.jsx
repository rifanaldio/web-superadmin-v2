import React, { useState } from "react";
import logoPegadaian from "../../../assets/logo.png"
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Button } from "@client/pegadaian-ui-kit-react"
import { HiOutlineUser } from "react-icons/hi";
import { CiLock } from "react-icons/ci"
import { IoLogOutOutline } from "react-icons/io5"
import { AiOutlineDown } from "react-icons/ai"

const Navbar = ({

}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="bg-primary border-b-2 dark:border-none py-2 pl-2 pr-10">
                <div className="flex justify-between items-center ">
                    <div className="">
                        <Link to={`/superadmin/dashboard`} className="flex items-center">
                            <img src={logoPegadaian} className="h-8 mr-3" />
                        </Link>
                    </div>
                    <div className="flex text-sm">
                        <div className="bg-white">
                            
                        </div>
                        <Menu>
                            {({ open }) => (
                                <>
                                    <Menu.Button 
                                        // onClick={handleClick}
                                        className={` bg-green-500 text-white font-bold p-2 rounded-lg hover:bg-green-600 hover:text-white`}>
                                        <div className=" flex items-center text-xs">
                                            Nama Pengguna
                                            <AiOutlineDown className="ml-1"/>
                                        </div>
                                        {/* <div className="font-bold">
                                        </div> */}
                                    </Menu.Button>

                                    {open && (
                                        <Transition
                                            show={open}
                                            enter="transition ease-in-out duration-300 transform"
                                            enterFrom="-translate-x-full"
                                            enterTo="translate-x-0"
                                            leave="transition ease-in-out duration-300 transform"
                                            leaveFrom="translate-x-0"
                                            leaveTo="-translate-x-full"
                                        >
                                            <div className="absolute top-11 right-10 border-2   w-40 h-32 rounded-lg bg-white z-50 shadow-lg">
                                                <Menu.Items static>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active
                                                                    ? 'bg-bghover text-gray-900'
                                                                    : 'text-gray-700'
                                                                    } flex mt-2 items-center px-4 py-2 text-sm`}
                                                                to={`/superadmin/profile`}
                                                            >
                                                                <span className="mr-4">
                                                                    <HiOutlineUser />
                                                                </span>
                                                                <span>
                                                                    Profile
                                                                </span>
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                className={`${active
                                                                    ? 'bg-bghover text-gray-900'
                                                                    : 'text-gray-700'
                                                                    } flex items-center px-4 py-2 text-sm`}
                                                                to={"/documentation"}
                                                            >
                                                                <span className="mr-4">

                                                                    <CiLock />
                                                                </span>
                                                                <span>
                                                                    Lock Screen
                                                                </span>
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <div className={`${active
                                                                ? 'bg-bghover text-gray-900'
                                                                : 'text-gray-700'
                                                                } flex items-center px-4 py-2 text-sm cursor-pointer`}>
                                                                <span className="mr-4">
                                                                    <IoLogOutOutline />
                                                                </span>
                                                                <span>
                                                                    Log Out
                                                                </span>
                                                            </div>


                                                        )}
                                                    </Menu.Item>
                                                    {/* <Menu.Item disabled>
                                                        <span className="block px-4 py-2 text-sm text-gray-400">
                                                            Invite a friend (coming soon!)
                                                        </span>
                                                    </Menu.Item> */}
                                                </Menu.Items>
                                            </div>
                                        </Transition>

                                    )}
                                </>
                            )}
                        </Menu>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;