import { styled } from "styled-components";

export const ContainerHome = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  position: relative;
  @media screen and (min-width:320px) and (max-width:820px) and (orientation:landscape) {
    align-items: flex-start;
    padding-top: 20px;
  }
`
export const TitleHomePage = styled.h1`text-align: center;
  color: #d31515;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 1.2em;
    margin-top: 0
  }
  @media screen and (min-width:320px) and (max-width:820px) and (orientation:landscape) {
    font-size: 1.7em;
  }
`



