/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Header,
  Bars
} from './navbarElements';

const Navbar = () => {
  return (
    <div>
      <Header>
        <img src="Images/Header_Logo.png" alt="Logo" width="300" height="300"></img>
      </Header>
      <Nav>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink exact to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            Our Story
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