import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-[100px] bg-slate-700">
      <div className="px-2 py-3 text-white">
        <h1 className="m-0 text-2xl">
          <Link to={PathConstants.HOME}>Test</Link>
        </h1>
        <nav className="">
          <ul className="flex justify-end">
            <li className="ml-5">
              <Link to={PathConstants.PRODUCTS}>Products</Link>
            </li>
            <li className="ml-5">
              <Link to={PathConstants.ABOUT}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
