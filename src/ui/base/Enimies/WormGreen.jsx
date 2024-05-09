import wormGreenStand from "../../../static/images/Enemies/wormGreen.png";
import wormGreenMove from "../../../static/images/Enemies/wormGreen_move.png";
import { useEffect, useState } from "react";

const WormGreen = ({ className }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgsMove = [wormGreenStand, wormGreenMove];
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

export default WormGreen;
