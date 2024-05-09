import React, { useEffect, useState } from "react";
import stand from "../../../static/images/Players/alienGreen_stand.png";
import jump from "../../../static/images/Players/alienGreen_jump.png";
import hit from "../../../static/images/Players/alienGreen_hit.png";
import duck from "../../../static/images/Players/alienGreen_duck.png";
import { Character } from "./CharacterJumpStyled";

const CharacterJump = ({ className, delay }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgs = [stand, jump, hit, duck];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevWalk) => (prevWalk + 1) % imgs.length);
    }, 400);
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

export default CharacterJump;
