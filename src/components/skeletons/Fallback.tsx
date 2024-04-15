import React from "react";
// import loader from "../assets/images/loader.gif";

/**
 * A basic fallback page without any content
 * A skeleton page can be created for better user experience
 */
type Props = {};

function Fallback({}: Props) {
  return (
    <div className="fixed bg-secondaryColor top-0 left-0 right-0 bottom-0 ">
      {/* <img
        className="relative top-[50%] left-[50%]"
        id="loading-image"
        src={loader}
        alt="Loading..."
      /> */}
    </div>
  );
}

export default Fallback;
