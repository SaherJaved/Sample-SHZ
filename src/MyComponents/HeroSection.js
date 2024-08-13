import React from 'react';
import './HeroSection.css';
import heroImage from './images/1.png'; 
import iconImage from './images/2.png'; 
import lineImage from './images/line.png'; 

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h1 className='headi'>
          I am a <span className='highlighted'>developer</span>
        </h1>
        <img src={lineImage} alt='Line' className='hero-line-image' />
        <h1 className='headi'>
          who likes to solve <br />
          problems with <br />
          coding.
        </h1>
        <div className='hero-buttons'>
          <button className='text-button'>Have a Project - Let’s Chat</button>
          <button className='icon-button'>
            <img src={iconImage} alt='Icon' />
          </button>
        </div>
      </div>
      <div className='hero-image'>
        <img src={heroImage} alt='Description of the hero section' />
      </div>
    </div>
  );
}

export default HeroSection;
