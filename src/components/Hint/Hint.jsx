import React from "react";

const Hint = ({
    className = "",
    label = "",
    color = ""
}) => {
    return (
        <>
            <div className={`w-full py-3 px-4 bg-gradient-to-r from-primary rounded-md mt-2 border-2 ring-teal-600 border-white border-none  ${className}`}>
                <span className="text-xl text-white font-bold">
                    {label}
                </span>
            </div>
        </>
    );
}

export default Hint;
