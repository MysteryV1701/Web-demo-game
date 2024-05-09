import React from "react";
import fenceBroken from "../../../static/images/Tiles/fenceBroken.png";

const FenceBroken = ({ className }) => {
  return (
    <img
      src={fenceBroken}
      alt="fenceBroken"
      className={`w-fit h-auto object-cover ${className}`}
    />
  );
};

export default FenceBroken;
