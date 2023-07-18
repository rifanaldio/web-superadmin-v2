import React from "react";
import {BsArrowUpRight,BsArrowDownLeft} from "react-icons/bs"

const Card = ({
  className = "",
  usePercentation = true,
  id = "",
  number = "0",
  small = false,
  label,
  loss = null,
  profit = null,
  percentation = "0",
  icon = null
}) => {

  const onlyNull = (loss == null && profit == null);
  // Remove any existing commas from the input
  const sanitizedValue = number.replace(/,/g, '');

  // Format the number with commas
  const formattedValue = Number(sanitizedValue).toLocaleString();

  return (
    <>
      <div
        id={id}
        className={`relative cursor-pointer transition-all hover:scale-95 duration-300 font-nutino px-5 pt-4  bg-white max-w-sm border border-gray-300 rounded-md shadow-md hover:ring-1 hover:ring-hovertext group ${className}`}
      >
        {usePercentation && 
          (loss != null && profit != null) && (
            <span
              className={`flex justify-end items-center -mt-5 -mr-2 font-light font-sans ${!small ? 'text-xl' : 'text-xs'} p-2 ${loss ? 'text-red-500' : 'text-lime-500'}`}
            >
              {loss && <BsArrowDownLeft />}{`${loss ? '-' : '+'}${percentation}% `}{!loss && <BsArrowUpRight />}
            </span>
          )
        }

        <div
          className={`uppercase font-serif ${usePercentation ? (onlyNull && 'mt-5') : 'mt-5'} text-slate-700 text-xs ${!small && `sm:text-lg`}`}
        >
          {label}
        </div>
        <div className={`${!small ? 'text-6xl' : 'text-2xl'} py-2 text-slate-600`}>
          {formattedValue}
        </div>

        <div
          className="absolute border p-2 rounded-md shadow-md -top-5 left-3 bg-hovertext ring-1 ring-white group-hover:border-white group-hover:transition-all group-hover:duration-300 group-hover:scale-125"
        >
          <span
            className={`${!small ? 'text-3xl' : 'text-1xl'} text-white bg-white`}
          >
            {icon}
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
