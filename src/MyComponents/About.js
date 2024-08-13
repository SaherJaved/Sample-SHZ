import React, { useState } from 'react';
import aboutImage from './images/6.png'; 
import './About.css';

function About() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="container">
      <div className="image-side">
        <img src={aboutImage} alt='Developer working on a project' />
      </div>
      <div className="content-side">
        <nav className="content-navbar">
          <ul>
            <li>
              <button
                className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => setActiveSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`nav-button ${activeSection === 'languages' ? 'active' : ''}`}
                onClick={() => setActiveSection('languages')}
              >
                Languages
              </button>
            </li>
          </ul>
        </nav>
        <div className="content-paragraphs">
          {activeSection === 'about' && (
            <>
              <p className='p1'>
                I'm a skilled developer with expertise in multiple languages and frameworks, passionate about problem-solving and innovation. I excel in collaborating with teams to deliver robust solutions and thrive on staying updated with the latest technologies. Clear communication is key in my approach, ensuring seamless project execution and success.
              </p>
              <p className='p2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </>
          )}
          {activeSection === 'languages' && (
            <p className='p3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
