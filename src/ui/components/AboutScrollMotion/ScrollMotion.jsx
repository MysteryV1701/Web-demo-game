/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { AnimationBox, CloudBox } from "./AboutScrollMotionStyled";
import { ArrowDownIcon } from "../../icons";
import CharacterMove from "../../base/CharacterMove/CharacterMove";
import GroundGrid from "../../base/Ground/Ground";
import Cactus from "../../base/Tiles/Cactus";
import {
  Bush,
  Cloud_1,
  Cloud_2,
  Cloud_3,
  Fence,
  FenceBroken,
  Grass,
  SignExit,
  SignRight,
} from "../../base/Tiles";

var flag = false;
const ScrollMotion = ({ setHeadColor, setHeadSolid, setBottomShow }) => {
  const springBlock = useRef();
  const summerBlock = useRef();
  const fallBlock = useRef();
  const winterBlock = useRef();
  const [blockId, setBlockId] = useState(0);
  const [prevBlockId, setPrevBlockId] = useState(0);
  const freezeTime = 1400;
  const [removeBlock, setRemoveBlock] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    document
      .getElementById("stickyStyled")
      .addEventListener("touchstart", handleTouchStart, false);
    document
      .getElementById("stickyStyled")
      .addEventListener("touchmove", handleTouchMove, false);
    document
      .getElementById("stickyStyled")
      .addEventListener("touchend", handleTouchEnd, false);

    ScrollTrigger.create({
      trigger: springBlock.current,
      start: "top top",
      end: "+=70000",
      toggleClass: "wrap",
    });
    if (window.innerWidth > 768) {
      ScrollTrigger.create({
        trigger: fallBlock.current,
        start: "top top",
        end: "+=70000",
        onEnter: () => {
          setHeadSolid(true);
          setHeadColor("txt-gray-800");
        },
        onLeaveBack: () => {
          setHeadSolid(false);
          setHeadColor("white");
        },
      });
    } else {
      setHeadSolid(true);
      setHeadColor("txt-gray-800");
    }
    var yDown = null;
    var touchRelease = true;

    function getTouches(evt) {
      return evt.touches || evt.originalEvent.touches;
    }
    function handleTouchStart(evt) {
      if (touchRelease) {
        const firstTouch = getTouches(evt)[0];
        yDown = firstTouch.clientY;
      }
      touchRelease = false;
    }
    function handleTouchMove(evt) {
      if (!yDown || touchRelease) {
        return;
      }

      var yUp = evt.touches[0].clientY;

      var yDiff = yDown - yUp;
      let scrollY = window.scrollY;
      if (yDiff > 10) {
        setBlockId((prev) => {
          if (prev === 5) {
            return prev;
          }
          evt.preventDefault();
          setBlockId(prev);
          return prev !== 5 ? prev + 1 : prev;
        });
      } else if (yDiff < -10) {
        setBlockId((prev) => {
          if (prev === 5 && scrollY === 0) {
            setBottomShow(false);
          }
          if (prev === 5 && scrollY > 0) {
            return prev;
          }
          evt.preventDefault();
          setPrevBlockId(prev);
          return prev !== 0 ? prev - 1 : prev;
        });
      }
      yDown = null;
    }

    function handleTouchEnd(evt) {
      setTimeout(() => {
        touchRelease = true;
      }, 1650);
    }
    document.getElementById("stickyStyled").addEventListener(
      "wheel",
      function (e) {
        const delta = e.wheelDelta;
        // Prevent happening continuous event
        if (!flag) {
          flag = true;
          let scrollY = window.scrollY;
          if (delta < 0) {
            setBlockId((prev) => {
              if (prev === 5) {
                return prev;
              }
              e.preventDefault();
              setPrevBlockId(prev);
              return prev !== 5 ? prev + 1 : prev;
            });
          } else if (delta > 0) {
            setBlockId((prev) => {
              console.log("Prev : ", prev, scrollY);
              if (prev === 5 && scrollY === 0) {
                setBottomShow(false);
              }
              if (prev === 5 && scrollY > 0) {
                return prev;
              }
              e.preventDefault();
              setPrevBlockId(prev);
              return prev !== 0 ? prev - 1 : prev;
            });
          }
          setTimeout(() => {
            flag = false;
          }, 1650);
        }
      },
      { passive: false }
    );
  }, []);

  useEffect(() => {
    let n_remBlock = [false, false, false, false, false];
    if (blockId > 0 && blockId <= 5) {
      n_remBlock[blockId - 1] = true;
      setTimeout(() => {
        setRemoveBlock((prev) => n_remBlock);
        console.log(removeBlock, blockId, prevBlockId);
      }, freezeTime / 2);
    }

    if (window.innerWidth > 768) {
      if (blockId === 1 || blockId === 2 || blockId === 3) {
        setTimeout(() => {
          setHeadColor("white");
        }, freezeTime / 2);
      } else {
        setTimeout(() => {
          setHeadColor("text-gray-800");
        }, freezeTime / 2);
      }
    }
    if (blockId === 5) {
      setTimeout(() => {
        setHeadSolid(true);
        setBottomShow(true);
      }, freezeTime);
    } else {
      setTimeout(() => {
        setHeadSolid(false);
      }, freezeTime / 2);
    }
  }, [blockId]);

  return (
    <div id="stickyStyled" className="relative overflow-hidden">
      {!isMobile && removeBlock[0] && (
        <AnimationBox
          className={` scrollY bg-linear-light ${
            prevBlockId === 1 && blockId === 2
              ? `hideAnimation wrap2`
              : blockId === 1 || blockId === 0
              ? " "
              : "noAnimation"
          } ${blockId === 1 ? "wrap showAnimation" : ""}`}
          ref={springBlock}
          first
          type={prevBlockId === 2 ? "21" : "01"}
        >
          <div
            className={`${
              blockId === 1 ? "hideAlways" : ""
            } text-center font-main font-semibold text-7xl absolute w-full block  bottom-2/4 left-2/4 -translate-x-2/4 -translate-y-[150%] text-shadow-sm text-dark uppercase`}
          >
            Geamonkee Adventure
          </div>
          <div
            className={`${
              blockId === 1 ? "hideAlways" : ""
            } absolute flex flex-col justify-between w-3/4 h-fit bottom-2/4 left-2/4 -translate-x-2/4 translate-y-3/4`}
          >
            <div className="block z-10">
              <CharacterMove className="h-1 w-full -translate-x-10 -translate-y-0"></CharacterMove>
              <CharacterMove
                className="h-fit w-full -translate-x-10 -translate-y-1"
                delay
              ></CharacterMove>
            </div>
            <div className="flex justify-around z-30 absolute h-16 w-full translate-y-28">
              <div className="flex ">
                <Fence className={`w-16`} />
                <Fence className={`w-16`} />
                <Fence className={`w-16`} />
              </div>
              <div className="flex">
                <Fence className={`w-16`} />
                <Fence className={`w-16`} />
                <FenceBroken className={`w-16`} />
                <Fence className={`w-16`} />
              </div>
            </div>
            <div className="block absolute -bottom-11">
              <div className="flex w-full items-end justify-between">
                <SignRight className={`w-12`} />
                <Cactus className={``} />
                <Bush />
                <Grass />
                <SignExit className={`w-12`} />
              </div>
              <GroundGrid col={24} row={1} season={"spring"} className={``} />
            </div>
          </div>
          <div
            className={`font-main z-20 absolute bottom-0 left-2/4 -translate-x-2/4 animate-bounce flex flex-col items-center ${
              blockId === 1 ? "hideAlways" : ""
            }`}
          >
            <p className="font-medium text-xl">khám phá</p>
            <ArrowDownIcon></ArrowDownIcon>
          </div>
          <CloudBox
            className={`absolute bottom-1/3 left-0 z-10 w-full translate-y-full opacity-80`}
            fade={blockId === 1 ? true : false}
          >
            <Cloud_1 className="cloud absolute" />
            <Cloud_2 className="cloud absolute ml-[150%] delay-4" />
            <Cloud_3 className="cloud absolute ml-[150%] delay-6" />
            <Cloud_2 className="cloud absolute ml-[150%] delay-10" />
            <Cloud_3 className="cloud absolute ml-[150%] delay-12" />
            <Cloud_1 className="cloud absolute ml-[150%] delay-16" />
            <Cloud_3 className="cloud absolute ml-[150%] delay-20" />
          </CloudBox>
          <></>
        </AnimationBox>
      )}
      {!isMobile && removeBlock[1] && (
        <AnimationBox className="sticky scrollY spring">
          <p></p>
        </AnimationBox>
      )}
      {!isMobile && removeBlock[2] && (
        <AnimationBox className="sticky scrollY summer">
          <></>
        </AnimationBox>
      )}
      {!isMobile && removeBlock[3] && (
        <AnimationBox className="sticky scrollY fall"></AnimationBox>
      )}
      {!isMobile && removeBlock[4] && (
        <AnimationBox
          className={`sticky winter ${blockId === 5 ? "showBlock" : ""} ${
            (prevBlockId === 5 && blockId === 4) ||
            (prevBlockId === 5 && blockId === 6)
              ? "hideBlock"
              : blockId !== 5
              ? "noBlock"
              : ""
          }`}
          ref={winterBlock}
        ></AnimationBox>
      )}
    </div>
  );
};

export default ScrollMotion;
