import styled, { css } from "styled-components";
import SpringBackground from "../../../static/images/Backgrounds/colored_grass.png";
import SummerBackground from "../../../static/images/Backgrounds/colored_desert.png";
import FallBackground from "../../../static/images/Backgrounds/blue_grass.png";
import WinterBackground from "../../../static/images/Backgrounds/blue_land.png";

export const CloudBox = styled.div`
  animation: ${({ fade }) => (fade ? "fadeAnimation-cloud 10s ease" : "")};
  @keyframes fadeAnimation-cloud {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;
export const AnimationBox = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  &.scrollY {
      overflow: hidden;
      height: 100vh;
  }
  &::-webkit-scrollbar {
    width: 0px;
  }

  animation-name: ${({ type }) =>
    type === "12"
      ? "fadeAnimation12"
      : type === "23"
      ? "fadeAnimation23"
      : type === "32"
      ? "fadeAnimation32"
      : ""};

  animation-duration: 1.5s;
  animation-timing-function: ease;


  @keyframes fadeAnimation12 {
    0% {
      .bg-gray-900
    }
    50%,
    100% {
      .bg-sky-light
    }
  }
  @keyframes fadeAnimation21 {
    0% {
        .bg-sky-light
    }
    50%,
    100% {
        .bg-gray-900
    }
  }
  @keyframes fadeAnimation23 {
    0% {
        .bg-sky-light
    }
    50%,
    100% {
        .bg-sky-dark;
    }
  }

  @keyframes fadeAnimation32 {
    0% {
        .bg-sky-dark
    }
    50%,
    100% {
        .bg-sky-light
    }
  }
  &.showAnimation .box_1  {
    animation-name: slide1Animation-show;
    animation-duration: 1.6s;
    animation-timing-function: ease;
    -webkit-animation-name: slide1Anim-show;
    -webkit-animation-duration: 1.6s;
    -webkit-animation-timing-function: ease;
  }
  @keyframes slide1Animation-show {
    0%,
    55% {
      transform: translate(0,60vh);
      opacity: 0;
    }
    100% {
      transform: translate(0,0vh);
      opacity: 1;
    }
  }
  @-webkit-keyframes slide1Animation-show {
    0%,
    55% {
      -webkit-opacity: 0;
    }
    100% {
      -webkit-opacity: 1;
    }
  }
  &.wrap, &.wrap2{
    ${
      "" /* ${CloudBox}{
      width: 180vw;
      height: 180vw;
      bottom:-10%
    } */
    }
  }


  .hideAlways {
    display: none !important;
  }

  &.noSection {
    display: none !important;
  }

  &.hideSection {
    // display: none !important;
  }

  &.hideSection .hidden {
    display: none !important;
  }

  &.spring{
    background-image: url(${SpringBackground})
  }
  &.summer{
    background-image: url(${SummerBackground})
  }
  &.fall{
    background-image: url(${FallBackground})
  }
  &.winter{
    background-image: url(${WinterBackground})
  }
`;
