import React from "react";

const Card = ({
  id,
  number,
  label,
  icon
}) => {
  return (
    <>
      <div id={id} className="relative px-5 pt-4  bg-white max-w-sm border border-gray-300 rounded-md shadow-md">
        <div className="flex flex-col justify-center space-x-3 py-5">
          <span className="flex justify-end -mt-5 font-bold text-4xl">{number}</span>
          <span className="uppercase">{label}</span>
        </div>
        <div className="absolute border p-2 rounded-md shadow-md -top-5 left-3 bg-primary">
          <span className="text-3xl text-white bg-white">
            {icon}
          </span>
        </div>
        <hr className="pt-5"></hr>
      </div>
    </>
  );
}

export default Card;
