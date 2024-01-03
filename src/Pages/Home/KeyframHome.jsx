import {keyframes} from "styled-components";

export const colorButton = keyframes`
  from {
    //opacity: 0;
    background-color: #ffffff;
    border-radius: 10px;
  }
  to {
    //opacity: 1;
    background: -moz-linear-gradient(90deg, rgba(218, 234, 212, 1) 0%, rgba(178, 218, 235, 1) 50%, rgba(172, 179, 213, 1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(218, 234, 212, 1) 0%, rgba(178, 218, 235, 1) 50%, rgba(172, 179, 213, 1) 100%);
    background: linear-gradient(90deg, rgba(218, 234, 212, 1) 0%, rgba(178, 218, 235, 1) 50%, rgba(172, 179, 213, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#daead4",endColorstr="#acb3d5",GradientType=1);
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
