import React, { useEffect, useState } from "react";
import walk_1 from "../../../static/images/Players/alienGreen_walk0.png";
import walk_2 from "../../../static/images/Players/alienGreen_walk1.png";
import { Character } from "./CharacterMoveStyled";

const CharacterMove = ({ className, delay }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgs = [walk_1, walk_2];
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

export default CharacterMove;
