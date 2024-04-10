import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="h-[60px] bg-slate-200">
      <div className="px-4 py-4 h-14">
        <p className="m-0 text-center">
          © {new Date().getFullYear()} My React App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
