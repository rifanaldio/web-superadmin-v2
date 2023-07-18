import React, { useEffect } from "react";

const Pages = ({
  elemetPages,
  title
}) => {

  useEffect(() => {
    document.title = title
  }, [title]);


  return (
    <>
      {elemetPages}
    </>
  );
}

export default Pages;
