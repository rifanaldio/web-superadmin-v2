import React from "react";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs"

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
        key={id}
        className={`relative cursor-pointer transition-all dark:border-1 dark:border-gray-800 hover:scale-95 duration-300 font-nutino px-5 pt-4  bg-white dark:bg-gray-700 max-w-sm border border-gray-300 rounded-md shadow-md hover:ring-1 hover:ring-hovertext group ${className}`}
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
          className={`uppercase font-serif dark:text-white whitespace-nowrap ${usePercentation ? (onlyNull && 'mt-5') : 'mt-5'} text-blue-gray-700 text-xs ${!small && `lg:text-sm max-h-10`} h-5 `}
        >
          {label}
        </div>
        <div className={`${!small ? 'text-3xl xl:text-4xl' : 'text-2xl'} py-2 text-blue-gray-600 dark:text-white`}>
          {formattedValue}
        </div>

        <div
          className="absolute  p-2 rounded-md shadow-md dark:shadow-white dark:shadow-sm -top-5 left-3 bg-hovertext dark:bg-darkbutton  duration-300 transition-all dark:ring-none group-hover:border-white dark:group-hover:border-none group-hover:transition-all group-hover:duration-300 group-hover:scale-125"
        >
          <span
            className={`${!small ? 'text-xl lg:text-3xl' : 'text-1xl'} text-white dark:text-blue-gray-300 `}
          >
            {icon}
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
