import React from 'react';
import {
  FooterContainer,
  Icon
} from './footerElements.js'

const Footer = () => {

  return (
    <div>
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