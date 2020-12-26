import React from 'react';
import {
  ContactWrapper,
  Title,
  Message,
  Image,
  ContactForm,
  ContactInput,
  InfoForm,
  MessageForm,
  ContactButton
} from './ContactContainerElements.js'

const ContactContainer = () => {

  return (
    <ContactWrapper>
      <Title>
        <h1>CONTACT US</h1>
        <Message>
          Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Message>
      </Title>
      <Image src='Images/Contact_Image.jpg' height='100%'/>
      <ContactForm name="contact" action="POST" data-netlify-recaptcha="true" data-netlify="true">
        <ContactInput>
          <h3>Your Name</h3>
          <InfoForm type="text" name="name" placeholder='Name'/>
        </ContactInput>
        <ContactInput>
          <h3>Your Email</h3>
          <InfoForm type="email" name="email" placeholder='Email'/>
        </ContactInput>
        <ContactInput>
          <h3>Your Message</h3>
          <MessageForm name="message" placeholder='Type your message here...'></MessageForm>
        </ContactInput>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <ContactButton type="submit">Send</ContactButton>
        </p>
      </ContactForm>
    </ContactWrapper>
  )
}

export default ContactContainer;