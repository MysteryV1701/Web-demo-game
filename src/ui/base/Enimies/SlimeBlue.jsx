import SlimeBlueStand from "../../../static/images/Enemies/slimeBlue.png";
import SlimeBlueMove from "../../../static/images/Enemies/slimeBlue_move.png";
import SlimeBlueHit from "../../../static/images/Enemies/slimeBlue_hit.png";
import SlimeBlueDead from "../../../static/images/Enemies/slimeBlue_dead.png";
import { useEffect, useState } from "react";

const SlimeBlue = ({ className }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgsMove = [SlimeBlueStand, SlimeBlueMove];
  const imgsDead = [SlimeBlueHit, SlimeBlueDead];
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

export default SlimeBlue;
