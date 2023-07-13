import React, { useState } from "react";
import logoPegadaian from "../../../assets/logo.png"
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineDown } from "react-icons/ai"
import {Button} from "@client/pegadaian-ui-kit-react"

const Navbar = ({

}) => {
    const menu = [
        {
            label : 'Profile',
            path : '/superadmin/profile',
            icon : <></>
        },
        {
            label : 'Lock Screen',
            path : '/superadmin/lock-screen',
            icon : <></>
        },
        {
            label : 'Log Out',
            icon : <></>
        },
    ]
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav className="bg-primary border-b-2 py-2 pl-2 pr-10">
                <div className="flex justify-between items-center ">
                    <div className="">
                        <Link to={`/superadmin/dashboard`} className="flex items-center">
                            <img src={logoPegadaian} className="h-8 mr-3" />
                        </Link>
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <div>
                            <Menu>
                                {({ open }) => (
                                    <>
                                        <Menu.Button onClick={handleClick} className={`flex items-center space-x-3 bg-green-500 text-white font-bold p-2 rounded-lg hover:bg-green-600 hover:text-white`}>
                                            <div>
                                                Nama User

                                            </div>
                                            <div className="font-bold">
                                                <AiOutlineDown /> 
                                            </div>
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
                                                <div className="absolute top-12 right-10 border-2 rounded-lg bg-white z-50 shadow-lg">
                                                    <Menu.Items static>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    className={`${active
                                                                        ? 'bg-bghover text-gray-900'
                                                                        : 'text-gray-700'
                                                                        } block px-4 py-2 text-sm`}
                                                                    to={`/superadmin/profile`}
                                                                >
                                                                    Profile
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    className={`${active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700'
                                                                        } block px-4 py-2 text-sm`}
                                                                    to={"/documentation"}
                                                                >
                                                                    Lock Screen
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    className={`${active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700'
                                                                        } block px-4 py-2 text-sm`}
                                                                    to={"/documentation"}
                                                                >
                                                                    Log Out
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item disabled>
                                                            <span className="block px-4 py-2 text-sm text-gray-400">
                                                                Invite a friend (coming soon!)
                                                            </span>
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </div>
                                            </Transition>

                                        )}
                                    </>
                                )}
                            </Menu>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;