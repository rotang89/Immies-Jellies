import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  text-align: center;
  background: #FEFFA5;
  margin: 0px auto;
  padding: 20px;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: black;
  background-color: white;
  font-size: 24px;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  width: 100px;
  border: 5px solid pink;
  border-radius: 20px;
  margin: auto 20px;
  cursor: pointer;
  &.active {
    -webkit-box-shadow: 5px 5px 15px 5px #FF8080, -4px 5px 7px 2px #FFE488, -3px -2px 7px 2px #8CFF85, 6px -2px 7px 2px #80C7FF, 6px 5px 7px 3px #E488FF, -5px 5px 7px 3px #FF616B, -5px -3px 5px 1px #8E5CFF, 2px 2px 7px 2px rgba(0,0,0,0);
    box-shadow: 5px 5px 15px 5px #FF8080, -4px 5px 7px 2px #FFE488, -3px -2px 7px 2px #8CFF85, 6px -2px 7px 2px #80C7FF, 6px 5px 7px 3px #E488FF, -5px 5px 7px 3px #FF616B, -5px -3px 5px 1px #8E5CFF, 2px 2px 7px 2px rgba(0,0,0,0);
  }
`;

export const NavMenu = styled.div`
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;