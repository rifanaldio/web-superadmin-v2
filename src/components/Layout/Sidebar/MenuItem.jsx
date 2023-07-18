import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"


const MenuItem = ({ label, path, childPath, icon }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <Link onClick={childPath && (childPath.length != 0 ? toggleDropdown : null)} to={path} className="block font-nutino my-2 py-2 px-4 hover:bg-primary active:bg-primary active:outline-none hover:text-white rounded group hover:ring-1 hover:ring-primaryyellow  ">
            <div className="flex items-center px-2">
                <span className="pr-3">
                    {icon}
                </span>
                <span className="space-x-2 text-sm group-hover:text-white drop-shadow-sm">
                    {label}
                </span>
                {(childPath && childPath.length != 0) &&

                    <span className="pl-2 font-bold">
                        {
                            isDropdownOpen ? <AiOutlineDown /> : <AiOutlineUp />
                        }
                        {/* <BsFillSkipBackwardFill /> */}
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