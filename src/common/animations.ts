import { keyframes } from "@emotion/react";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const upDown = keyframes`
  from, 40% {
    transform: translate3d(0,0,0);
  }

  20% {
    transform: translate3d(0, -20px, 0);
  }

`;

const slideDown = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 1000px;
  }
`;

export const animations = {
  bounce,
  upDown,
  slideDown,
};
