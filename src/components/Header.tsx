import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-[100px]  bg-primaryColor">
      <div className="mx-[--header-margin-left] py-3 text-white">
        <h1 className="m-0 pt-5 font-bold text-3xl">
          <Link to={PathConstants.HOME}>{window.lString?.str_app_title}</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
