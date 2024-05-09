import React from "react";
import grass from "../../../static/images/Tiles/grass.png";

const Grass = ({ className }) => {
  return (
    <img
      src={grass}
      alt="grass"
      className={`w-fit h-auto object-cover ${className}`}
    />
  );
};

export default Grass;
