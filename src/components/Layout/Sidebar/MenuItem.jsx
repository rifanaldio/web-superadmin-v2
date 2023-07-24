import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"


const MenuItem = ({ id, label, path, childPath, icon }) => {
    const location = useLocation()
    const paths = location.pathname;
    const pathName = paths.split('/')
    const thisPath = pathName[2]

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <Link
            key={id}
            onClick={childPath && (childPath.length != 0 ? toggleDropdown : null)}
            to={path}
            className={
                `block font-nutino my-2 py-2 px-4 dark:text-blue-gray-400 hover:bg-primary dark:hover:bg-light-green-600 hover:text-white rounded group hover:ring-1 dark:hover:ring-0 hover:ring-primaryyellow 
            ${thisPath === id ? `active bg-primary dark:bg-light-green-600 text-white ring-1 ring-primaryyellow dark:ring-0` : 'bg-none'} transition-color duration-500`
            }
        >
            <div className="flex items-center px-2">
                <span className={`mr-3 ${thisPath === id ? 'active dark:text-white' : ''} group-hover:text-white`}>
                    {icon}
                </span>
                <span className={`space-x-2 text-sm ${thisPath === id ? 'active dark:text-white' : ''} dark:text-blue-gray-100 group-hover:text-white  drop-shadow-sm`}>
                    {label}
                </span>
                {(childPath && childPath.length != 0) &&
                    <span className="pl-2 font-bold">
                        {isDropdownOpen ? <AiOutlineDown /> : <AiOutlineUp />}
                    </span>
                }
            </div>
            {childPath && childPath.length > 0 ? (
                <div
                    className={`${isDropdownOpen ? 'block' : 'hidden'
                        } bg-white text-black rounded-lg py-2 px-2 mt-2 list-item`}
                >
                    {childPath.map((childItem, index) => (
                        <Link to={childItem.path} key={index} className="block py-1.5 w-full h-full hover:bg-lime-600 hover:text-white rounded">
                            <div className="flex items-center py-1 px-1">
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

export default MenuItem;