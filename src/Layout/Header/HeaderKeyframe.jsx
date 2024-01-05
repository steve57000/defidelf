import {keyframes} from "styled-components";


export const MoveLogoUp = keyframes`
  from {
    margin-top: 200px;
  }
  to {
    margin-top: 0;
  }
`



export const SpinLogo= keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`



export const DropLogo = keyframes`
  0% {
    box-shadow: inset 0 0 20px 1px rgba(113, 111, 18, 0.6);
  }
  10% {
    box-shadow: inset 0 0 20px 1px rgba(64, 255, 3, 0.4)
  }
  20% {
    box-shadow: inset 0 0 20px 1px rgba(255, 196, 3, 0.6)
  }
  30% {
    box-shadow: inset 0 0 20px 1px rgba(255, 3, 3, 0.42)
  }
  40% {
    box-shadow: inset 0 0 20px 1px rgba(9, 243, 162, 0.4);
  }
  70% {
    box-shadow: inset 0 0 20px 1px rgba(81, 23, 253, 0.4);
  }
  100% {
    box-shadow: inset 0 0 20px 1px rgba(113, 111, 18, 0.6);
  }
`
