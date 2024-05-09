import React, { useEffect, useState } from "react";
import stand from "../../../static/images/Players/alienGreen_stand.png";
import fireBall_1 from "../../../static/images/Particles/fireball_1.png";
import fireBall_2 from "../../../static/images/Particles/fireball_2.png";
import fireBall_3 from "../../../static/images/Particles/fireball_3.png";
import fireBall_4 from "../../../static/images/Particles/fireball_4.png";
import { Character, FireBall } from "./CharacterFireStyled";

const CharacterFire = ({ className, delay }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgs = [fireBall_1, fireBall_2, fireBall_3, fireBall_4];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevWalk) => (prevWalk + 1) % imgs.length);
    }, 400);
    return () => clearInterval(interval);
  });
  return (
    <div className={`flex items-end ${className}`}>
      <Character src={stand} alt="Character animation" delay={delay} />
      <FireBall src={imgs[currentImg]} alt="Fire Ball" animate />
    </div>
  );
};

export default CharacterFire;
