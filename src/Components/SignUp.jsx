import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signupcontainer">
      <Navbar />
      <div className="signupimage">
        <h2 className="signupheading">Sign Up</h2>
      </div>
      <div className="signupform">
        <h2>Sign Up</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />
          <br />
          <label>Email:</label>
          <input type="email" name="email" required />
          <br />
          <label>Password:</label>
          <input type="password" name="password" required />
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;
