import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className=" flex flex-col items-center justify-center h-lvh">
      <h1 className="text-3xl mb-6">{window.lString.str_not_found_title}</h1>
      <p className="text-slate-400 text-xl">
        {window.lString.str_not_found_desc}
      </p>
      <Link to="/" className="mt-5 text-black text-xl">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
