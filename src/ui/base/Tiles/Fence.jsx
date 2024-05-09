import React from "react";
import fence from "../../../static/images/Tiles/fence.png";

const Fence = ({ className }) => {
  return (
    <div className={className}>
      <img src={fence} alt="fence" className={`w-full h-auto object-cover`} />
    </div>
  );
};

export default Fence;
