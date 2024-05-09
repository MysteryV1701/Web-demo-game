import styled, { css } from "styled-components";

export const LibraryWrapper = styled.div`
  margin-bottom: 80px;
  margin-top: 100px;
  @media (max-width: 1400px) {
    padding: 0 4vw 0vw;
    margin-bottom: 70px;
    margin-top: 150px;
  }
  @media (max-width: 768px) {
    padding: 0 0 48px;
    margin-bottom: 20px;
    margin-top: 100px;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: ${({ mr }) => mr && mr};
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ title, second, third, four }) =>
    title
      ? "120px 0 120px"
      : second
      ? "40px 0 65px"
      : third
      ? "0 0 140px"
      : four
      ? "140px 0 0"
      : "0"};
  @media (max-width: 1000px) {
    margin: ${({ title, second, third, four }) =>
      title
        ? "4.8vw 0 1.3vw"
        : second
        ? "1.5vw 0 4.2vw"
        : third
        ? "0 0 5.4vw"
        : four
        ? "6.5vw 0 0"
        : "0"};
  }
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 9.375vw 0 !important;
  }
`;

export const Title = styled.div`
  color: #000;
  font-size: 56px;
  font-weight: 600;
  line-height: 60px;
  margin-bottom: 40px;
  @media (max-width: 1400px) {
    font-size: 56px;
    font-weight: 700;
    margin-bottom: 2.5vw;
  }
  @media (max-width: 1400px) {
    font-size: 42px;
    line-height: 60px;
    margin-bottom: 2.5vw;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 60px;
    margin-bottom: 5vw;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 5vw;
    text-align: center;
  }
`;

export const Text = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #000;
  max-width: ${({ width }) => (width ? `${width}px` : "355px")};
  @media (max-width: 1400px) {
    font-size: 1.6vw;
    line-height: 2.4vw;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: ${({ big }) => (big ? "5vw" : "4.375vw")};
    line-height: ${({ big }) => (big ? "7.5vw" : "6.563vw")};
    text-align: center;
    max-width: 100%;
    padding: 0 6.25vw;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const ImageStyled = styled.img`
  position: absolute;
  height: ${({ high }) => (high ? "100%" : "auto")};
  width: ${({ wide }) => (wide ? "100%" : "auto")};
  top: 50%;
  left: 50%;
  transition: all 0.5s 0.1s cubic-bezier(0.6, 0.05, 0.01, 0.99);
  transform: translate(-50%, 100%) scale(1.2);
`;

const styleImages = (arcade, math, os, socket, thread) => {
  return css`
    width: ${arcade
      ? "530px"
      : math
      ? "530px"
      : os
      ? "530px"
      : socket
      ? "468px"
      : thread
      ? "530px"
      : ""};
    height: ${arcade
      ? "560px"
      : math
      ? "387px"
      : os
      ? "560px"
      : socket
      ? "511px"
      : thread
      ? "560px"
      : ""};
    margin: ${({ margin }) => (margin ? margin : "")};
    @media (max-width: 1400px) {
      width: ${arcade
        ? "41.2vw"
        : math
        ? "43vw"
        : os
        ? "31.7vw"
        : socket
        ? "37.4vw"
        : thread
        ? "100%"
        : ""};
      height: ${arcade
        ? "50vw"
        : math
        ? "31.9vw"
        : os
        ? "34.7vw"
        : socket
        ? "33.9vw"
        : thread
        ? "44.6vw"
        : ""};
    }
    @media (max-width: 768px) {
      width: 100%;
      height: ${arcade
        ? "78.438vw"
        : math
        ? "56.250vw"
        : os
        ? "95.938vw"
        : socket
        ? "105.938vw"
        : thread
        ? "83.750vw"
        : ""};
      ${arcade && "margin-bottom: 0px"};
    }
  `;
};

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  ${({ arcade, math, os, socket, thread }) =>
    styleImages(arcade, math, os, socket, thread)};
  margin: ${({ margin }) => (margin ? margin : "")};
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #60b3d7;
    position: absolute;
    left: 50%;
    transition: all 1s cubic-bezier(0.6, 0.05, 0.01, 0.99);
    transform: translateX(-50%);
    z-index: 2;
    top: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  &.active {
    ${ImageWrapper} {
      &:before {
        top: -100%;
      }
      &:after {
        opacity: 0.5;
      }
    }
    ${ImageStyled} {
      transform: translate(-50%, -50%) scale(1);
      top: 50%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
