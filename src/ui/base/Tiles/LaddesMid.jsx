import React from "react";
import ladderMid from "../../../static/images/Tiles/ladderMid.png";

const LadderMid = ({ className }) => {
  return (
    <div className={className}>
      <img
        src={ladderMid}
        alt="ladderMid"
        className={`w-full h-auto object-cover`}
      />
    </div>
  );
};

export default LadderMid;
