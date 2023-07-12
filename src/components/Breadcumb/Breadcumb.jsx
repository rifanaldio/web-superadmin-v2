import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ data }) => {
    return (
      <nav className="flex">
        <ol className="list-none p-0 inline-flex">
          {data.map((step, index) => (
            <React.Fragment key={index}>
              <li className="flex items-center text-sm">
                <Link to={step.link} className="text-gray-500 hover:text-sky-500 hover:underline">{step.name}</Link>
                {index < data.length - 1 && (
                  <svg className="h-5 w-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  };
  
  export default Breadcrumb;
  