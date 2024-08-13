import React from 'react';
import './ContactSection.css';
import mailIcon from './images/mail.png';
import callIcon from './images/call.png';
import locationIcon from './images/loc.png';
import instagramIcon from './images/insta.png';
import linkedinIcon from './images/linkd.png';
import pinterestIcon from './images/pint.png';
import behanceIcon from './images/Be.png';
import linkIcon from './images/copy.png';
import conIcon from './images/connect.png';



function ContactSection() {
  return (
    <div className="contact-section">
      <div className="grid-container">
        <div className="left-side">
          <h4 className="contact-heading">If you have any question feel free to ask me!</h4>
          <div className="button-group">
            <div className="contact-item">
              <div className="contact-button">
                <img src={mailIcon} alt="Email" className="icon" />
              </div>
              <span className="button-text">info@shz.com</span>
            </div>
            <div className="contact-item">
              <div className="contact-button">
                <img src={callIcon} alt="Call" className="icon" />
              </div>
              <span className="button-text">+1 679 988 7689</span>
            </div>
          </div>
          <div className="location-item">
  <div className="location-button">
    <img src={locationIcon} alt="Location" className="icon" />
  </div>
  <div>
    <span className="button-text">ABC street, New York</span>
    <p className="location-text">United States of America</p>
  </div>
</div>
      
          <div className="social-media-box">
            <div className="social-media">
              <p className="social-media-heading">Connect on Social Media</p>
              <div className="social-media-buttons">
                <button className="social-button"><img src={instagramIcon} alt="Instagram" className="icon" /></button>
                <button className="social-button"><img src={linkedinIcon} alt="LinkedIn" className="icon" /></button>
                <button className="social-button"><img src={pinterestIcon} alt="Pinterest" className="icon" /></button>
                <button className="social-button"><img src={behanceIcon} alt="Behance" className="icon" /></button>
                <button className="social-button"><img src={linkIcon} alt="Link" className="icon" /></button>
              </div>
            </div>
          </div>
          </div>
        <div className="right-side-box">
          <div className="right-side">
            <div className="contact-box">
              <img src={conIcon} alt="Connect" className="icon" />
              <h3 className="box-heading">Let’s Connect</h3>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Full Name" className="input-box" />
              <input type="email" placeholder="Email" className="input-box" />
              <textarea placeholder="Tell us about your projects" className="textarea-box"></textarea>
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
