import React from "react";
import logoPegadaian from "../../../assets/logo-pegadaian.png"
import { Link } from "react-router-dom";

const Navbar = ({

}) => {
    return (
        <>
            <nav className="bg-white border-b-2 py-2 px-10">
                <div className="flex justify-between items-center ">
                    <div className="">
                        <Link to={`/superadmin/dashboard`} href="https://flowbite.com/" class="flex items-center">
                            <img src={logoPegadaian} class="h-8 mr-3"/>
                        </Link>
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <div>Pengguna Admin</div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
