import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  return (
    <div>
      <h1 className="header">Send a message to us!</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label id="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} />

        <label id="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChange} />

        <label id="message">Message:</label>
        <textarea id="message" name="message" value={message} onChange={handleChange} />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
