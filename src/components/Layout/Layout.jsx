import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Breadcrumb from "../Breadcumb/Breadcumb";

const Layout = ({
  children,
  fit = true,
  useBreadcumb = true,
  breadcumb = [],
}) => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1024) { // Adjust the breakpoint value as per your requirement
        setOpen(false);
      }
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleWindowResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden fixed w-screen font-nutino">
      <div className=" relative top-0 w-full ">
        <Navbar />
      </div>
      <div className="pt-15 flex flex-col md:flex-row h-screen">
        <div className="lg:w-72 lg:pb-2 bg-white">
          {/* Hidden When Resolution LG Start */}
          <button
            onClick={() => handleOpen()}
            className="inline-flex items-center p-2 mt-2 mb-2 mx-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
          {/* Hidden When Resolution LG End */}

          <div className={`overflow-y-auto h-full duration-150 transition-transform -translate-x-full lg:translate-x-0 hidden lg:block`}>
            <Sidebar
              open={open}
              onClose={() => {
                setOpen(false)
              }}
            />
          </div>
        </div>
        <main className="h-full w-full bg-slate-100 overflow-hidden font-nutino">
          {
            useBreadcumb && (
              <div className="w-full bg-white p-2">
                <Breadcrumb data={breadcumb} />
              </div>
            )
          }
          <div className={`my-3 mx-3 ${fit && `bg-white rounded-tl-lg rounded-bl-lg`}`}>
            <div className="py-5 mb-20 pl-2 w-full max-h-[49rem] sm:max-h-[50rem] md:max-h-[53rem] lg:max-h-[55rem] overflow-y-auto overflow-x-hidden">
              {children}
            </div>
          </div>
          <footer className="fixed bottom-0 flex bg-white w-full">
            <span className="ml-4 py-1 text- text-xs">
            &copy; 2023 PT PEGADAIAN.
            </span>
          </footer>
        </main>
      </div>
    </div>

  );
};

export default Layout;
