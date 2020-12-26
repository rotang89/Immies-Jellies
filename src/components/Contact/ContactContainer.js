import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import {
  ContactWrapper,
  Title,
  Message,
  Image,
  ContactForm,
  ContactInput,
  InfoForm,
  MessageForm,
  ContactButton,
  Error
} from './ContactContainerElements.js'

const ContactContainer = () => {

  const [name, setName] = useState(false)
  const [email, setEmail] = useState(false)
  const [subject, setSubject] = useState(false)
  const [message, setMessage] = useState(false)

  function sendEmail(e) {
    (!e.target.name.value.length) ? setName(true) : setName(false);
    (/\S+@\S+\.\S+/.test(e.target.email.value) === false) ? setEmail(true) : setEmail(false);
    (!e.target.subject.value.length) ? setSubject(true) : setSubject(false);
    (!e.target.message.value.length) ? setMessage(true) : setMessage(false);
    e.preventDefault();
    console.log(e.target.name.value)
    // emailjs.sendForm('service_sq09ece', 'template_k2fw9qr', e.target, 'user_5Rlib5Re3OYFnCkvuhcRd')
    //   .then((result) => {
    //       console.log(result.text);
    //       e.target.reset()
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }

  return (
    <ContactWrapper>
      <Title>
        <h1>CONTACT US</h1>
        <Message>
          Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Message>
      </Title>
      <Image src='Images/Contact_Image.jpg' height='100%'/>
      <ContactForm name="contact" onSubmit={sendEmail}>
        <ContactInput>
          <h3>Your Name</h3>
          <InfoForm type="text" name="name" placeholder='Name'/>
          {name ? <Error>Please enter your name</Error> : null}
        </ContactInput>
        <ContactInput>
          <h3>Your Email</h3>
          <InfoForm type="email" name="email" placeholder='Email'/>
          {email ? <Error>Please enter valid email</Error> : null}
        </ContactInput>
        <ContactInput>
          <h3>Your Subject</h3>
          <InfoForm type="text" name="subject" placeholder='Subject'/>
          {subject ? <Error>Please enter subject</Error> : null}
        </ContactInput>
        <ContactInput>
          <h3>Your Message</h3>
          <MessageForm name="message" placeholder='Type your message here...'></MessageForm>
          {message ? <Error>Please enter your message</Error> : null}
        </ContactInput>
        <p>
          <ContactButton type="submit">Send</ContactButton>
        </p>
      </ContactForm>
    </ContactWrapper>
  )
}

export default ContactContainer;