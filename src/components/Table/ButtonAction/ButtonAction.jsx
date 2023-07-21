import { Button } from "@material-tailwind/react";
import React from "react";

const ButtonAction = ({
  key,
  icon,
  label,
  onClick = null
}) => {
  return (
    <>
      <Button key={key} onClick={() => onClick()} className="dark:bg-green-800 flex gap-2 scale-75 items-center hover:scale-90 transition-all duration-300 bg-primary  shadow-md shadow-gray-600 hover:shadow-none">
        {icon}
        <span>{label}</span>
      </Button>
    </>
  );
}

export default ButtonAction;
