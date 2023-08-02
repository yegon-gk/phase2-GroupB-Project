import React, { Component } from 'react';

class ContactForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
  };

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ContactForm;
