import {keyframes} from "styled-components";

export const colorButton = keyframes`
  from {
    opacity: 0;
    border-radius: 10px;
  }
  to {
    opacity: 1;
    border-radius: 25px;
    letter-spacing: 4px;
  }
`
export const colorButtonTxt = keyframes`
  from {
    color: #5b5a5a;
  }
  to {
    color: white;
  }
`
