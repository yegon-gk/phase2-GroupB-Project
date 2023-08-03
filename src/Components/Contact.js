import React, { useState } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for your feedback.");

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  return (
    <div className="contact-container">
      <Navbar />
      <h1 className="header">Reach out to us!</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
        />

        <button className="btn" type="submit">
          Send Message
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactForm;
