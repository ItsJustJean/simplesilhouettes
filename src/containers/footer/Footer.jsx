import React from 'react';
import simpleLogo from 'C:/simplesilhouettes/src/assets/white-logo.svg';
import './footer.css';

const Footer = () => (
  <div className="simple__footer section__padding">
    <div className="simple__footer-heading">
      <h1 className="gradient__text">Join us on the revolution:</h1>
    </div>

    <div className="simple__footer-btn">
      <p>New Arrivals</p>
    </div>

    <div className="simple__footer-links">
      <div className="simple__footer-links_logo">
        <img src={simpleLogo} alt="simple_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="simple__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="simple__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="simple__footer-links_div">
        <h4>Get in touch</h4>
        <p>8341 Sw 124th Ave</p>
        <p>786-473-0182</p>
        <p href="mailto:JeanEliasDev@gmail.com">JeanEliasDev@gmail.com</p>
      </div>
    </div>

    <div className="simple__footer-copyright">
      <p>@2021 Simple Silhouettes. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;