import React from 'react';
import './FeatureSection.css';
import icon1 from './images/3.png'; 
import icon2 from './images/4.png';
import icon3 from './images/5.png';

function FeatureSection() {
  return (
    <div className='feature-section'>
      <button className='center-button'>Powers</button>
      <h2 className='center-heading1'>Crafting quality experiences through innovative <span className="break-line"></span> and imaginative means.</h2>
      <div className='feature-boxes'>
        <div className='feature-box1'>
        <img src={icon1} alt='Feature 1' />
          <h3>Experience</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className='feature-box2'>
        <img src={icon2} alt='Feature 2' />
          <h3>Innovative</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className='feature-box3'>
        <img src={icon3} alt='Feature 3' />
          <h3>Imaginative</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
