import { styled } from "styled-components";
import { MoveLogoUp, SpinLogo, DropLogo } from "./HeaderKeyframe"
import {NavLink} from "react-router-dom";

export const ContainerHeader = styled.header`
  max-width: 1480px;
  width: 100vw;
  height: 200px;
  //background: -moz-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(123, 122, 122, 0.28) 60%, rgba(0, 0, 0, 0.6) 100%);
  //background: -webkit-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(123, 122, 122, 0.28) 60%, rgba(0, 0, 0, 0.6) 100%);
  //background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(123, 122, 122, 0.28) 60%, rgba(0, 0, 0, 0.6) 100%);
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: calc(100vw * 0.04 + 10px);
  margin: 0;
  @media (max-width: 767px){
    flex-direction: column;
  }
`

export const ContainerLogo = styled.div`
  //position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 50% 50%;
  min-width: 210px;
  min-height: 210px;
  max-width: 210px;
  max-height: 210px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(243, 243, 246);
  background: -moz-radial-gradient(circle, rgba(255, 255, 255, 1) 9%, rgba(150, 228, 253, 0.41) 100%);
  background: -webkit-radial-gradient(circle, rgba(255, 255, 255, 1) 9%, rgba(150, 228, 253, 0.41) 100%);
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 9%, rgba(150, 228, 253, 0.41) 100%);
  box-shadow: 6px 6px 10px 0 rgb(10 10 10 / 70%);
  overflow: hidden;
  @media (max-width: 767px){
    //background: white;
    //box-shadow: none;
  }
`
export const ContainerImg = styled.img`
  width: 100px;
  height: 100px;
  pointer-events: none;
  //top: 28.8%;
  //position: absolute;
  margin-top: -100px;

  @media (prefers-reduced-motion: no-preference) {
    box-shadow: inset 0 0 20px 1px rgba(113, 111, 18, 0.6);
    border-radius: 50%;
    filter: drop-shadow(1px 0 0 #ffffff);
    animation: ${MoveLogoUp} 4.8s ease-in-out, ${SpinLogo} 10s linear, ${DropLogo} infinite 20s 5000ms ease-in-out;
  }
`
export const TitleHomePage = styled.h1`
  text-align: center;
  width: 80%;
  color: #d31515;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 1.7em;
    margin-top: 0
  }
  @media screen and (min-width:320px) and (max-width:820px) and (orientation:landscape) {
    font-size: 1.7em;
  }
`

export const Nav = styled.nav`
  width: 30vw;
  height: 40px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  padding: 10px;
  @media (max-width: 767px) {
    padding: 10px 0 0 0;
  }
`
export const NavUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  ${(props) => props.$isOpen ? `display: inline` : `display: none`};
  height: auto;
`

export const NavLi = styled.li`
  list-style-type: none;
  @media (max-width: 767px){
    width: 100%;
    padding: 0;
  }
`
export const LinkAccueil = styled(NavLink)`
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  font-size: 110%;
  font-weight: bold;
  color: darkred;
  transition: all .5s ease-in-out;
  background: rgb(243, 243, 246);
  background: -moz-radial-gradient(circle, rgba(255, 255, 255, 1) 9%, rgba(150, 228, 253, 0.41) 100%);
  background: -webkit-radial-gradient(circle, rgba(255, 255, 255, 1) 9%, rgba(150, 228, 253, 0.41) 100%);
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 9%, rgba(150, 228, 253, 0.41) 100%);

  &:hover {
    background: -moz-radial-gradient(circle, rgba(253, 164, 164, 0.44) 59%, rgba(253, 117, 117, 0.67) 100%);
    background: -webkit-radial-gradient(circle, rgba(253, 164, 164, 0.44) 59%, rgba(253, 117, 117, 0.67) 100%);
    background: radial-gradient(circle, rgba(253, 164, 164, 0.44) 59%, rgba(253, 117, 117, 0.67) 100%);
    //filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#daead4",endColorstr="#acb3d5",GradientType=1);
  }

  @media (max-width: 767px) {
    border-radius: 0;
    width: 100%;
  }
`
const ItemBurger = styled.div`
      width: 1.8rem;
      height: 0.25rem;
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
      background-color: #000000;
      z-index: 100;
`
export const ContainerBurger = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 2rem;
  height: 2rem;
  overflow : hidden;
  margin-right: 10px;
`

export const StyledBurgerOne = styled(ItemBurger)`
    ${(props) => props.$isOpen ? `transform : rotate(45deg)` : `transform : rotate(0)`};
`
export const StyledBurgerTwo = styled(ItemBurger)`
  ${(props) => props.$isOpen ? `transform: translateX(100%)` : `transform: translateX(0)`};
  ${(props) => props.$isOpen ? `opacity: 0` : `opacity: 1` };
`
export const StyledBurgerThree = styled(ItemBurger)`
  ${(props) => props.$isOpen ? `transform : rotate(-45deg)` : `transform : rotate(0)`};
`
