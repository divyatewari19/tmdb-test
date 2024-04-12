import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="h-[70px] text-white bg-primaryColor">
      <div className="px-4 py-4 h-14">
        <p className="m-0 text-center">
          © {new Date().getFullYear()} rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
