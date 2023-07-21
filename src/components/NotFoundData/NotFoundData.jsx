import React from "react";
import NoData from "../../assets/nodata.svg"
const NotFoundData = ({

}) => {
  return (
    <>
    <div className="flex flex-column items-center justify-center w-full h-full">
        <img className="object-cover h-[34rem] w-[40rem]" src={NoData}/>
    </div>
    </>
  );
}

export default NotFoundData;
