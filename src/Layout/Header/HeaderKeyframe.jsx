import {keyframes} from "styled-components";


export const MoveLogoUp = keyframes`
  from {
    margin-top: 160px;
    opacity: 0;
  }
  20% {
    opacity: 0
  }
  to {
    margin-top: 0;
    opacity: 1;
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
    box-shadow: inset 0 0 20px 1px rgba(113, 111, 18, 0.6), 0 0 10px  rgba(0, 0, 0, 0.6);
  }
  10% {
    box-shadow: inset 0 0 20px 1px rgba(64, 255, 3, 0.4), 0 0 10px  rgba(0, 0, 0, 0.6);
  }
  20% {
    box-shadow: inset 0 0 20px 1px rgba(255, 196, 3, 0.6), 0 0 10px  rgba(0, 0, 0, 0.6);
  }
  30% {
    box-shadow: inset 0 0 20px 1px rgba(255, 3, 3, 0.42), 0 0 10px  rgba(0, 0, 0, 0.6);
  }
  40% {
    box-shadow: inset 0 0 20px 1px rgba(9, 243, 162, 0.4), 0 0 10px  rgba(0, 0, 0, 0.6);
  }
  70% {
    box-shadow: inset 0 0 20px 1px rgba(81, 23, 253, 0.4), 0 0 10px  rgba(0, 0, 0, 0.6);
  }
  100% {
    box-shadow: inset 0 0 20px 1px rgba(113, 111, 18, 0.6), 0 0 5px 1px rgba(25, 25, 25, 0.6);
  }
`

