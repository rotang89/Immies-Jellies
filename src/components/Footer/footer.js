import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {
  FooterContainer,
  FlagBorder,
  Icon
} from './footerElements.js'

const Footer = () => {

  return (
    <div>
      <FlagBorder
      der src='Images/decorative_border.png' width='100%' height='50px'></FlagBorder>
      <FooterContainer>
        <h2>Follow us on Social Media</h2>
          <Icon href='http://www.facebook.com' target='_blank'>
            <img src='Images/icons/facebook_icon.png' alt="Facebook" width="50" height="50"></img>
          </Icon>
          <Icon href='https://www.instagram.com/immies_jellies/' target='_blank'>
            <img src='Images/icons/instagram_icon.png' alt="Instagram" width="50" height="50"></img>
          </Icon>
      </FooterContainer>
    </div>
  )
}

export default Footer;