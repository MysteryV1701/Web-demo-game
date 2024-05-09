import React from "react";
import signRight from "../../../static/images/Tiles/signRight.png";

const SignRight = ({ className }) => {
  return (
    <div className={className}>
      <img
        src={signRight}
        alt="signRight"
        className={`w-full h-auto object-cover `}
      />
    </div>
  );
};

export default SignRight;
