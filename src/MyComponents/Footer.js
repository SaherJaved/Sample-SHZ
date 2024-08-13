// src/MyComponents/Footer.js
import React from 'react';
import './Footer.css';
import fullWidthImage from './images/nav.png';


function Footer() {
  return (
  <>
  
    <div className="full-width-image">
        <img src={fullWidthImage} alt="Full Width" />
      </div>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h1 className="company-name">SHZ.</h1>
        </div>
        <div className="footer-right">
          <p>© 2023 The SHZ, All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
