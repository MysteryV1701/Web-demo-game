import React, { useEffect, useState } from "react";
import climb_1 from "../../../static/images/Players/alienGreen_climb1.png";
import climb_2 from "../../../static/images/Players/alienGreen_climb2.png";
import { Character } from "./CharacterClimbStyled";

const CharacterClimb = ({ className, delay }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgs = [climb_1, climb_2];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevWalk) => (prevWalk + 1) % imgs.length);
    }, 200);
    return () => clearInterval(interval);
  });
  return (
    <div className={`${className}`}>
      <Character
        src={imgs[currentImg]}
        alt="Character animation"
        delay={delay}
      />
    </div>
  );
};

export default CharacterClimb;
