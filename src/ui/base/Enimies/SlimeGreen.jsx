import SlimeGreenStand from "../../../static/images/Enemies/slimeGreen.png";
import SlimeGreenMove from "../../../static/images/Enemies/slimeGreen_move.png";
import SlimeGreenHit from "../../../static/images/Enemies/slimeGreen_hit.png";
import SlimeGreenDead from "../../../static/images/Enemies/slimeGreen_dead.png";
import { useEffect, useState } from "react";

const SlimeGreen = ({ className }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgsMove = [SlimeGreenStand, SlimeGreenMove];
  const imgsDead = [SlimeGreenHit, SlimeGreenDead];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevWalk) => (prevWalk + 1) % imgsMove.length);
    }, 200);
    return () => clearInterval(interval);
  });
  return (
    <div className={`${className}`}>
      <img
        src={imgsMove[currentImg]}
        alt="Slime Move"
        className="mx-auto"
      ></img>
    </div>
  );
};

export default SlimeGreen;
