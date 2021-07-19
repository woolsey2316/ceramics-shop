import { keyframes } from "styled-components";

export const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;
