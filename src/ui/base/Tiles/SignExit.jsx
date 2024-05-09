import React from "react";
import signExit from "../../../static/images/Tiles/signExit.png";

const SignExit = ({ className }) => {
  return (
    <div className={className}>
      <img
        src={signExit}
        alt="signExit"
        className={`w-fit h-auto object-cover`}
      />
    </div>
  );
};

export default SignExit;
