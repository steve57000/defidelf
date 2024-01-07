import { styled } from "styled-components";
import { MoveLogoUp, SpinLogo, DropLogo, BackgroundGradient } from "./HeaderKeyframe"
import {NavLink} from "react-router-dom";

export const ContainerHeader = styled.header`
  max-width: 1480px;
  max-height: 200px;
  height: 100%;
  width: 100vw;
  background: -moz-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(123, 122, 122, 0.28) 60%, rgba(0, 0, 0, 0.6) 100%);
  background: -webkit-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(123, 122, 122, 0.28) 60%, rgba(0, 0, 0, 0.6) 100%);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(123, 122, 122, 0.28) 60%, rgba(0, 0, 0, 0.6) 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  margin: 0;
`

export const ContainerLogo = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 0 0 50% 50%;
  width: 210px;
  height: 210px;
  background: rgb(243, 243, 246);
  background: -moz-radial-gradient(circle, rgba(255, 255, 255, 1) 9%, rgba(150, 228, 253, 0.41) 100%);
  background: -webkit-radial-gradient(circle, rgba(255, 255, 255, 1) 9%, rgba(150, 228, 253, 0.41) 100%);
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 9%, rgba(150, 228, 253, 0.41) 100%);
  box-shadow: 6px 6px 10px 0 rgb(10 10 10 / 70%), inset 6px 9px 5px 0 rgba(150, 228, 253, 0.51);
  overflow: hidden;
`
export const ContainerImg = styled.img`
  width: 100px;
  height: 100px;
  pointer-events: none;
  position: absolute;
  top: 28.8%;
  @media (prefers-reduced-motion: no-preference) {
    box-shadow: inset 0 0 20px 1px rgba(113, 111, 18, 0.6), 0 0 10px  rgba(100, 109, 103, 0.66) ;
    border-radius: 50%;
    filter: drop-shadow(1px 0 0 #ffffff);
    animation: ${MoveLogoUp} 4.8s ease-in-out, ${SpinLogo} 10s linear, ${DropLogo} infinite 20s 5000ms ease-in-out;
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
export const ContainerBurger = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 2rem;
  height: 2rem;
  overflow : hidden;
  @media (max-width: 767px){
    margin-left: 10px;
  }
`
const ItemBurger =
    styled.div`
      width: 2rem;
      height: 0.25rem;
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
      background-color: #fffdfd;
      z-index: 100;
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
