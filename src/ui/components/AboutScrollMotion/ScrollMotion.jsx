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
import SlimeGreen from "../../base/Enimies/SlimeGreen";
import Fly from "../../base/Enimies/Fly";
import SlimeBlue from "../../base/Enimies/SlimeBlue";
import WormGreen from "../../base/Enimies/WormGreen";
import CharacterClimb from "../../base/CharacterClimb/CharacterClimb";
import CharacterJump from "../../base/CharacterJump/CharacterJump";
import CharacterFire from "../../base/CharacterFire/CharacterFire";

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
          <div className="mt-32 text-center w-full mx-auto">
            <p className="font-bold text-5xl">Tổng quan</p>
            <p className="mt-10 font-medium text-2xl w-2/3 mx-auto">
              Geamonkee Adventure là game được viết bằng ngôn ngữ Python và sử
              dụng phiên bản: 3.9.13 64-bit
              <br />
              Và thuộc thể loại Platform game. Đây là một thể loại game điện tử
              và cũng là một phần của game hành động. Mục đích cốt lõi của tất
              cả game đi cảnh là người chơi sẽ điều khiển nhân vật trong game
              vượt qua các chướng ngại vật trong game bằng cách leo trèo, nhảy
              xa, đu dây và tiêu diệt. Các cấp độ và môi trường sẽ càng ngày
              càng khó với những môi trường với địa hình phức tạp cùng những
              dạng quái vật mới, đòi hỏi thao tác điêu luyện từ người chơi.
            </p>
          </div>
          <div className="absolute block bottom-0">
            <GroundGrid col={32} row={1} season={"spring"}></GroundGrid>
          </div>
        </AnimationBox>
      )}
      {!isMobile && removeBlock[2] && (
        <AnimationBox className="sticky scrollY summer">
          <div className="grid grid-cols-2 grid-rows-2 mt-12 w-full mx-4">
            <div className="self-center justify-self-center">
              <CharacterMove></CharacterMove>
              <div className="text-center">
                <p>Player di chuyển trên mặt phẳng</p>
                <p>
                  Người ta di chuyển nhân vật bằng nút di chuyển trái và phải
                </p>
              </div>
            </div>
            <div className="self-center justify-self-center">
              <CharacterClimb className={`mx-auto`}></CharacterClimb>
              <div className="text-center">
                <p>Player di chuyển khi leo thang</p>
                <p>Người ta di chuyển nhân vật bằng nút di chuyển lên trên</p>
              </div>
            </div>
            <div className="self-center justify-self-center">
              <CharacterJump className={`mx-auto`}></CharacterJump>
              <div className="text-center">
                <p>Player di chuyển khi leo thang</p>
                <p>Người ta di chuyển nhân vật bằng nút di chuyển lên trên</p>
              </div>
            </div>
            <div className="self-center justify-self-center ">
              <CharacterFire className={`w-full`}></CharacterFire>
              <div className="text-center">
                <p>Player di chuyển khi leo thang</p>
                <p>Người ta di chuyển nhân vật bằng nút di chuyển lên trên</p>
              </div>
            </div>
          </div>
          <div className="absolute block bottom-0">
            <GroundGrid col={32} row={1} season={"summer"}></GroundGrid>
          </div>
        </AnimationBox>
      )}
      {!isMobile && removeBlock[3] && (
        <AnimationBox className="sticky scrollY fall">
          <div className="grid grid-cols-2 grid-rows-2 mt-12 w-full mx-4">
            <div className="self-center justify-self-center">
              <SlimeGreen></SlimeGreen>
              <div className="text-center">
                <p>Slime Green</p>
                <p>Quái vật đi dưới mặt đất</p>
                <p>Làm vật cản và gây mất máu khi đụng trúng</p>
              </div>
            </div>
            <div className="self-center justify-self-center">
              <SlimeBlue className=""></SlimeBlue>
              <div className="text-center">
                <p>Slime Blue</p>
                <p>Quái vật đi dưới mặt đất</p>
                <p>Làm vật cản và gây mất máu khi đụng trúng</p>
              </div>
            </div>
            <div className="self-center justify-self-center">
              <Fly className=""></Fly>
              <div className="text-center">
                <p>Fly</p>
                <p>Quái vật bay</p>
                <p>Làm vật cản và gây mất máu khi đụng trúng</p>
              </div>
            </div>
            <div className="self-center justify-self-center">
              <WormGreen className="" />
              <div className="text-center">
                <p>Worm Green</p>
                <p>Quái vật đi dưới mặt đất</p>
                <p>Làm vật cản và gây mất máu khi đụng trúng</p>
              </div>
            </div>
          </div>

          <div className="absolute block bottom-0">
            <GroundGrid col={32} row={1} season={"fall"}></GroundGrid>
          </div>
        </AnimationBox>
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
        >
          <div className="relative p-28 grid grid-cols-2 gap-12">
            <div>
              <p className="font-semibold text-2xl text-center">
                Chơi SingerPlayer
              </p>
              <p className="font-medium text-xl mt-5">
                Người chơi vượt các chướng ngại vật và quái vật để vượt qua các
                màn chơi từ đó hoàn thành trò chơi
                <br />
                Người chơi có 3 mạng để hoàn thành trò chơi. Nếu người chơi thất
                bại thì sẽ mất một mạng và trở về vạch xuất phát của màn chơi
                hiện tại
                <br />
                Người chơi phải vượt qua màn chơi trong khoảng thời gian được
                quy định. Nếu hết thời gian sẽ mất một mạng và trở về vạch xuất
                phát
                <br />
                Người chơi thu thập các đồng vàng để tăng điểm tích lũy
              </p>
            </div>
            <div>
              <p className="font-semibold text-2xl text-center">
                Chơi MultiPlater
              </p>
              <p className="font-medium text-xl mt-5">
                Tối đa 2 người chơi. Các người chơi hỗ trợ lẫn nhau để vượt qua
                màn chơi
                <br />
                Màn chơi này sử dụng thử viện Socket.IO để vận hành nên các
                người chơi phải chơi cùng trên 1 mạng LAN
                <br />
                Màn chơi xuất hiện này chướng ngại vật và bẫy ẩn nên hãy thật
                cẩn thận quay sát các màn chơi
                <br />
                Người chơi thu thập các đồng vàng để tăng điểm tích lũy
              </p>
            </div>
          </div>
          <div className="absolute block bottom-0">
            <div className="block z-10">
              <CharacterMove className="h-1 w-full -translate-x-10 translate-y-1"></CharacterMove>
              <CharacterMove
                className="h-fit w-full -translate-x-10"
                delay
              ></CharacterMove>
            </div>
            <GroundGrid col={32} row={1} season={"winter"}></GroundGrid>
          </div>
        </AnimationBox>
      )}
    </div>
  );
};

export default ScrollMotion;
