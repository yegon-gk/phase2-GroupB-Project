import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div>
          <h1 className="brand-title">globalwonder.co.ke</h1>
        </div>
        <div className="social-icons">
          <div className="social-icon-container">
            <a href="/">
              <BsInstagram size={25} />
            </a>
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
          <h3 className="footer-header">Products</h3>
          <ul className="footer-list">
            <li>SafetyFist Essentials</li>
            <li>Translingua Connect</li>
            <li>Ecostay Inovations</li>
            <li>Local Gems Concierge</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Community</h3>
          <ul className="footer-list">
            <li>Hospitality Hive</li>
            <li>Travel Tales</li>
            <li>Avid Adventures</li>
            <li>Local Explorers</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Support & Care Center</h3>
          <ul className="footer-list">
            <li>Stay Connected</li>
            <li>Booking & Accomadation</li>
            <li>24/7 Assistance </li>
            <li>Personalized home</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Others</h3>
          <ul className="footer-list">
            <li>Terms Of Service</li>
            <li>Privacy & Data</li>
            <li>Code of Conduct</li>
            <li>Liability and Disputes</li>
          </ul>
        </div>
      </div>

      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} AdventureAwaits.com. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
