import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export default function Pagination() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) =>
  ({
    variant: active === index ? "filled" : "text",
    color: active === index ? "green" : "blue-gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <FaArrowLeft className="h-4 w-4" />
        <span className={prev && "dark:text-white"}>
          Previous
        </span>
      </Button>
      <div className="flex items-center gap-2">
        <IconButton className="dark:text-white" {...getItemProps(1)}>1</IconButton>
        <IconButton className="dark:text-white" {...getItemProps(2)}>2</IconButton>
        <IconButton className="dark:text-white" {...getItemProps(3)}>3</IconButton>
        <IconButton className="dark:text-white" {...getItemProps(4)}>4</IconButton>
        <IconButton className="dark:text-white" {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        <span className={active && "dark:text-white"}>
          Next
        </span>
        <FaArrowRight className="h-4 w-4" />
      </Button>
    </>
  );
}