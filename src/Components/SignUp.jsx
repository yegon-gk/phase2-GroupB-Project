import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setShowAlert(true);
    window.alert("Sign up successful! Please log in.");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    window.alert("Login successful!");
  };

  return (
    <div className="signup-container">
      <Navbar />
      <div className="signup-image">
        <h2 className="signup-heading">Sign Up</h2>
      </div>
      <div className="flex-container">
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Sign Up</button>
          </form>
          {showAlert && (
            <p style={{ color: "green" }}>
              Sign up successful! Please <a href="/login">Log In</a>.
            </p>
          )}
        </div>

        <div className="form-container login-container">
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input type="email" name="email" required />
            <br />
            <label>Password:</label>
            <input type="password" name="password" required />
            <br />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;
