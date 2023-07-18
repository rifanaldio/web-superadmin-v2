import React from "react";

const Hint = ({
    className = "",
    label = "",
    color = ""
}) => {
    return (
        <>
            <div className={`w-full py-2 px-3 lg:py-3 lg:px-4 bg-gradient-to-r from-primary rounded-md mt-2 border-2 ring-teal-600 border-white border-none  ${className}`}>
                <span className="text-sm lg:text-xl text-white font-bold">
                    {label}
                </span>
            </div>
        </>
    );
}

export default Hint;
