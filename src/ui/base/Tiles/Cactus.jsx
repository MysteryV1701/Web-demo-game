import React from "react";
import cactus from "../../../static/images/Tiles/cactus.png";

const Cactus = ({ className }) => {
  return (
    <img
      src={cactus}
      alt="Cactus"
      className={`w-fit h-auto object-cover ${className}`}
    />
  );
};

export default Cactus;
