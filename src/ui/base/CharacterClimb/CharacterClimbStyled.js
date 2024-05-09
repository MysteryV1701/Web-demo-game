import styled from "styled-components";

export const Character = styled.img`
  width: auto;
  height: 11rem;
  object-fit: cover;
  position: relative;
  z-index: 10;
  margin: ${({ animate }) => (animate ? "" : "0 auto")};
  animation: ${({ animate }) =>
    animate ? "animate-move 9s linear infinite" : ""};
  animation-delay: ${(props) => (props.delay ? "2s" : "0")};

  @keyframes animate-move {
    0% {
      left: 0px;
      top: 0px;
      transform: rotate(0);
    }
    10% {
      left: 20%;
      top: 0px;
      transform: rotate(0);
    }
    20% {
      left: 40%;
      top: 0px;
      transform: rotate(0);
    }
    30% {
      left: 60%;
      top: 0px;
      transform: rotate(0);
    }
    40% {
      left: 80%;
      top: 0px;
      transform: rotate(0);
    }
    49% {
      left: 99%;
      top: 0px;
      transform: rotate(0);
    }
    50% {
      left: 100%;
      top: 0px;
      transform: rotate(0);
    }
    50.01% {
      left: 100%;
      top: 0px;
      transform: rotateY(180deg);
    }
    60% {
      left: 80%;
      top: 0px;
      transform: rotateY(180deg);
    }
    70% {
      left: 60%;
      top: 0px;
      transform: rotateY(180deg);
    }
    80% {
      left: 40%;
      top: 0px;
      transform: rotateY(180deg);
    }
    90% {
      left: 20%;
      top: 0px;
      transform: rotateY(180deg);
    }
    100% {
      left: 0px;
      top: 0px;
      transform: rotateY(180deg);
    }
  }
`;
