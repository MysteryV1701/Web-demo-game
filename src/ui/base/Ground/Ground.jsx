import React from "react";
import dirtMid from "../../../static/images/Ground/Dirt/dirtMid.png";
import dirtLeft from "../../../static/images/Ground/Dirt/dirtLeft.png";
import dirtRight from "../../../static/images/Ground/Dirt/dirtRight.png";

// Spring
import GroundSpringCenter from "../../../static/images/Ground/Grass/grassCenter.png";
import GroundSpringMid from "../../../static/images/Ground/Grass/grassMid.png";
import GroundSpringLeft from "../../../static/images/Ground/Grass/grassLeft.png";
import GroundSpringRight from "../../../static/images/Ground/Grass/grassRight.png";

// Summer
import GroundSummerCenter from "../../../static/images/Ground/Sand/sandCenter.png";
import GroundSummerMid from "../../../static/images/Ground/Sand/sandMid.png";
import GroundSummerLeft from "../../../static/images/Ground/Sand/sandLeft.png";
import GroundSummerRight from "../../../static/images/Ground/Sand/sandRight.png";

// Fall
import GroundFallCenter from "../../../static/images/Ground/Planet/planetCenter.png";
import GroundFallMid from "../../../static/images/Ground/Planet/planetMid.png";
import GroundFallLeft from "../../../static/images/Ground/Planet/planetLeft.png";
import GroundFallRight from "../../../static/images/Ground/Planet/planetRight.png";

// Winter
import GroundWinterCenter from "../../../static/images/Ground/Snow/snowCenter.png";
import GroundWinterMid from "../../../static/images/Ground/Snow/snowMid.png";
import GroundWinterLeft from "../../../static/images/Ground/Snow/snowLeft.png";
import GroundWinterRight from "../../../static/images/Ground/Snow/snowRight.png";

const GroundGrid = ({ col, row, season, className }) => {
  const groundArray = Array.from({ length: row }, (_, rowIndex) =>
    Array.from(
      { length: col },
      (_, colIndex) => `Ground ${(rowIndex + 1) * colIndex + colIndex + 1}`
    )
  );
  return (
    <div className={`${className}`}>
      {season === "spring"
        ? groundArray.map((rowData, rowIndex) => (
            <div key={rowIndex} className="flex">
              {rowData.map((_, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="flex">
                  <img
                    className="w-20 h-auto object-cover"
                    src={
                      // Logic for choosing image based on position
                      rowIndex === 0
                        ? colIndex === 0
                          ? GroundSpringLeft
                          : colIndex === col - 1
                          ? GroundSpringRight
                          : GroundSpringMid
                        : GroundSpringCenter
                    }
                    alt="Ground"
                  />
                </div>
              ))}
            </div>
          ))
        : groundArray.map((_, index) => (
            <div key={index} className="">
              <img
                className="w-20 h-auto object-cover"
                src={
                  index === 0 // Check for first element (index === 0)
                    ? dirtLeft
                    : index === groundArray.length - 1 // Check for last element
                    ? dirtRight
                    : dirtMid
                }
                alt="Ground"
              />
            </div>
          ))}
    </div>
  );
};

export default GroundGrid;
