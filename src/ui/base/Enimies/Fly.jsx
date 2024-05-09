import FlyStand from "../../../static/images/Enemies/fly.png";
import FlyMove from "../../../static/images/Enemies/fly_move.png";
import FlyDead from "../../../static/images/Enemies/fly_dead.png";
import { useEffect, useState } from "react";

const Fly = ({ className }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgsMove = [FlyStand, FlyMove];
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

export default Fly;
