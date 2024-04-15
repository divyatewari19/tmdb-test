import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-[80px] flex items-center bg-primaryColor">
      <div className="mx-[--header-margin-left]  text-white">
        <h1 className=" font-bold text-2xl">
          <Link to={PathConstants.HOME}>{window.lString?.str_app_title}</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
