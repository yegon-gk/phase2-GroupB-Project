import React from 'react';
import './Footer.css'; 
//import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="brand-section">
          <h1 className="brand-title">AdventureAwaits.com</h1>
          <p className="brand-description">Choose your favourite destination</p>
        </div>
        <div className="social-icons">
          <div className="social-icon-container">
            <a href="#"><BsInstagram size={25} /></a>
          </div>
          <div className="social-icon-container">
            <BsFacebook size={25} />
          </div>
          <div className="social-icon-container">
            <BsLinkedin size={25} />
          </div>
          <div className="social-icon-container">
            <BsTwitter size={25} />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-column">
          <h3 className="footer-header">Project</h3>
          <ul className="footer-list">
            <li>Changing</li>
            <li>Status</li>
            <li>Licence</li>
            <li>All Versions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Community</h3>
          <ul className="footer-list">
            <li>GitHub</li>
            <li>Issues</li>
            <li>Project</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Help</h3>
          <ul className="footer-list">
            <li>Support</li>
            <li>Troubleshooting</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Others</h3>
          <ul className="footer-list">
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
            <li>Licence</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
