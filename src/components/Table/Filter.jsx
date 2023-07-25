import React from "react";
import ButtonAction from "./ButtonAction/ButtonAction";

const Filter = ({

}) => {
  return (
    <>
    <div className="flex flex-col bg-red-100 h-full w-full">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>

    </div>
    <div className="bg-red-500 flex justify-center items-center space-x-10 w-full rounded-br-lg rounded-bl-lg p-3 text-lg">
        <ButtonAction label="Clear"/>
        <ButtonAction label="Submit"/>
    </div>
    </>
  );
}

export default Filter;
