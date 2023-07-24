import React from "react";

const Grid = ({
    className = "",
    grid = null,
    small = null,
    large = null,
    xl = null,
    gap = null,
    children
    
}) => {
  return (
    <>
    <div className={`${className} grid grid-cols-${grid} sm:grid-cols-${small} lg:grid-cols-${large} xl:grid-cols-${xl} gap-${gap} w-screen`}>
        {children}
    </div>
    </>
  );
}

export default Grid;
