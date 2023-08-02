import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs"
import './Footer.css'


function Footer() {
  return (
    <div className="flex-container">
      <div className="first-flex-wrap">
        <div className="brand-section">
          <h1 className="font-bold text-3xl mb-2">AdventureAwaits.com</h1>
          <p className="text-sm text-slate-300">
            Choose your favourite destination
          </p>
        </div>
        <div className="social-icons">
          <div className="social-icon-container">
            <a href=""><BsInstagram size={25} /></a>
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

      <div className="second-flex-wrap">
        <div className="column">
          <h3 className="font-bold mb-2 tracking-wide text-xl">Project</h3>
          <ul className="leading-8">
            <li>Changing</li>
            <li>Status</li>
            <li>Licence</li>
            <li>All Versions</li>
          </ul>
        </div>

        <div className="column">
          <h3 className="font-bold mb-2 tracking-wide text-xl">Community</h3>
          <ul className="leading-8">
            <li>GitHub</li>
            <li>Issues</li>
            <li>Project</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div className="column">
          <h3 className="font-bold mb-2 tracking-wide text-xl">Help</h3>
          <ul className="leading-8">
            <li>Support</li>
            <li>Troubleshooting</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="column">
          <h3 className="font-bold mb-2 tracking-wide text-xl">Others</h3>
          <ul className="leading-8">
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
