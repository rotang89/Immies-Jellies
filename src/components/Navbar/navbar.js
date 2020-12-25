import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu
} from './navbarElements';

const Navbar = () => {
  return (
    <div>
      <img src="Images/Header_Logo.png" alt="Logo" width="300" height="300"></img>
      <Nav>
        <NavMenu>
          <NavLink exact to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/menu' activeStyle>
            Menu
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;