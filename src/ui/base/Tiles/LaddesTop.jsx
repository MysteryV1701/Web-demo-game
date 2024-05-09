import React from "react";
import ladderTop from "../../../static/images/Tiles/ladderTop.png";

const LadderTop = ({ className }) => {
  return (
    <div className={className}>
      <img
        src={ladderTop}
        alt="ladderTop"
        className={`w-full h-auto object-cover`}
      />
    </div>
  );
};

export default LadderTop;
