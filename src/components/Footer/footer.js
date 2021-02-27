import React from 'react';
import {
  SocialContainer,
  ContactContainer,
  Icon,
  Wrapper,
  ContactInfo
} from './footerElements.js'

const Footer = () => {

  return (
    <Wrapper>
      <ContactContainer>
        <h3>Contact</h3>
        <ContactInfo>(123)456-7890</ContactInfo>
        <ContactInfo><a href="mailto:example@domain.com">example@domain.com</a></ContactInfo>
      </ContactContainer>
      <SocialContainer>
        <h3>Follow us on Social Media</h3>
          <Icon href='http://www.facebook.com' target='_blank'>
            <img src='Images/icons/facebook_icon.png' alt="Facebook" width="50" height="50"></img>
          </Icon>
          <Icon href='https://www.instagram.com/immies_jellies/' target='_blank'>
            <img src='Images/icons/instagram_icon.png' alt="Instagram" width="50" height="50"></img>
          </Icon>
      </SocialContainer>
    </Wrapper>
  )
}

export default Footer;