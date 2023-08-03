import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    isMessageSent: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ isMessageSent: true });
    setTimeout(() => {
      this.setState({
        name: '',
        email: '',
        message: '',
        isMessageSent: false,
      });
    }, 2000);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, message, isMessageSent } = this.state;

    return (
      <div>
        <h1 class="header">Send a message to us!</h1>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label id="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />

          <label id="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={this.handleChange} />

          <label id="message">Message:</label>
          <textarea id="message" name="message" value={message} onChange={this.handleChange} />

          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
