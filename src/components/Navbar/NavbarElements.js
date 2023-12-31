import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  background: #257242;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12; 
  @media screen and (max-width: 768px) {    
    width: 100vw;
  } 
`;
 
export const NavLink = styled(Link)`
  color: #c0edd0;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 18px;
  cursor: pointer;
  &.active {
    color: #ffffff;} 
  @media screen and (max-width: 768px) {    
    width: 100%;      
  }
`;
 
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -24px; 
  margin-right: 24px;  
  width: 100vw;
// white-space: nowrap; 
  @media screen and (max-width: 768px) {    
    width: 100%;    
  }
`;