import React from "react";
import { useLocation } from "react-router-dom";

type Props = {};

const Person = (props: Props) => {
  const location = useLocation();
  return (
    <div className="space-y-8 mx-[--header-margin-left] text-white pt-10 pb-10 ">
      <p className="text-white text-left  md:text-2xl lg:text-3xl font-semibold mb-4">
        {location.state?.name}
      </p>
      <p>TO-DO</p>
    </div>
  );
};

export default Person;
