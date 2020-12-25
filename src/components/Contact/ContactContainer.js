import React, { useState } from 'react';
import {
  ContactWrapper
} from './ContactContainerElements.js'

const ContactContainer = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Message: ${message}`)
  }

  return (
    <ContactWrapper>
      <h1>CONTACT US</h1>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"></input>
      <input onChange={(e) => setName(e.target.value)} placeholder="Name" type="Name"></input>
      <input onChange={(e) => setMessage(e.target.value)} placeholder="Message"></input>
      <button onClick={handleSubmit}>Submit</button>
    </ContactWrapper>
  )
}

export default ContactContainer;