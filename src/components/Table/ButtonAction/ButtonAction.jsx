import { Button, Tooltip, Typography } from "@material-tailwind/react";
import React from "react";

const ButtonAction = ({
  key,
  icon,
  label,
  onClick = null,
  color = '',
  variant = '',
  type = ''
}) => {
  console.log(type);
  return (
    <>
      {
        type === "icon" ? (
          <Tooltip
            className="bg-white shadow"
            placement="left"
            content={
              <div className="w-full bg-white">
                <Typography
                  variant="small"
                  color="black"
                  className="font-normal opacity-80"
                >
                  {label}
                </Typography>
              </div>
            }
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Button size="xs" variant={variant} color={color ? color : 'green'} key={key} onClick={() => onClick()} className="flex w-max items-center justify-center gap-4 scale-75">
              {icon}
              {/* <span>{label}</span> */}
            </Button>
          </Tooltip>
        ) : (
          <Button size="xs" variant={variant} color={color ? color : 'green'} key={key} onClick={() => onClick()} className="flex w-max items-center justify-center gap-4 scale-75">
            {icon}
            <span>{label}</span>
          </Button>
        )
      }

    </>
  );
}

export default ButtonAction;
