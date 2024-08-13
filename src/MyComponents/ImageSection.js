import React from 'react';
import './ImageSection.css';
import image1 from './images/7.png';
import image2 from './images/8.png';
import image3 from './images/10.png';
import image4 from './images/9.png';
import image5 from './images/11.png';



function ImageSection() {
  return (
    <div className="image-grid-section">
      <button className="center-button">Portfolio</button>
      <h2 className="center-heading">Crafting cutting-edge solutions with <span className="break-line"></span> code, one line at a time.</h2>
      <div className="image-grid">
        <div className="main-image">
        <img src={image1} alt='Feature 1' />
        </div>
        <div className="side-images">
          <div className="side-image">
          <img src={image2} alt='Feature 1' />
          </div>
          <div className="side-image">
          <img src={image4} alt='Feature 1' />
          </div>
        </div>
        
<div className="last-images">
<div className="last-image">
          <img src={image3} alt='Feature 1' />
          </div>
          <div className="last-image">
          <img src={image5} alt='Feature 1' />
          </div>
</div>
        
      </div>
    </div>
  );
}

export default ImageSection
