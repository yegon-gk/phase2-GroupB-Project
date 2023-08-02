import React, { Component } from 'react';

class ContactForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
  };

  render() {
    return (
      <div>
        <h1>Send a message to us!</h1>
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />

        <button type="submit">Send Message</button>
      </form>
      </div>
    );
  }
}

export default ContactForm;
