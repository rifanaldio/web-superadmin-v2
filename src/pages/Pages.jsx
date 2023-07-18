import React, { useEffect } from "react";

const Pages = ({
    elemetPages,
    title
}) => { 


    console.log(title);

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
