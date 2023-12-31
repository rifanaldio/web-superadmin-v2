import React from "react";

const Hint = ({
    className = "",
    label = "",
    color = ""
}) => {
    return (
        <>
            <div className={`w-full py-2 px-3 lg:py-3 lg:px-4 bg-gradient-to-r from-primary  dark:from-light-green-500 transition-all duration-1000 dark:bg-gradient-to-r  rounded-md mt-2 border-2 ring-teal-600 border-white border-none  ${className}`}>
                <span className="text-sm lg:text-xl text-white font-bold">
                    {label}
                </span>
            </div>
        </>
    );
}

export default Hint;
