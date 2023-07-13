import React, { Children } from "react";

const Grid = ({
    grid = "",
    small = "",
    large = "",
    xl = "",
    gap = "",
    children
    
}) => {
  return (
    <>
    <div className={`grid grid-cols-${grid} sm:grid-cols-${small} lg:grid-cols-${large} xl:grid-cols-${xl} gap-${gap} w-screen`}>
        {children}
    </div>
    </>
  );
}

export default Grid;
