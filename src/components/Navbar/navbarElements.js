import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  text-align: center;
  /* background: #FAE2C1; */
  margin: 0px auto;
  padding: 20px;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  box-sizing: border-box;
  color: black;
  font-family: Marker Felt, fantasy;
  font-size: 24px;
  align-items: center;
  text-decoration: none;
  padding: 8px 36px;
  height: 100%;
  width: 100px;
  margin: auto 0px;
  transition: color 300ms;
  border-bottom: 2px solid black;
  cursor: pointer;
  &.active {
    border-bottom: 5px black solid !important;
    color: black !important;
  }
  &:hover {
    color: red;
    border-bottom: 5px red solid;
  }
`;

export const NavMenu = styled.div`
  align-items: center;
  /* @media screen and (max-width: 768px) {
    display: block;
  } */
`;

export const Header = styled.div `
  background-image: url('Images/coconut_background.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
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