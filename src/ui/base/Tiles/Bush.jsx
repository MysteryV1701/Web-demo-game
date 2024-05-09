import React from "react";
import bush from "../../../static/images/Tiles/bush.png";

const Bush = ({ className }) => {
  return (
    <img
      src={bush}
      alt="bush"
      className={`w-fit h-auto object-cover ${className}`}
    />
  );
};

export default Bush;
