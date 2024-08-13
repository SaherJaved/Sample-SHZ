import React from 'react';
import './Feedback.css';
import logo1 from './images/12.png';
import logo2 from './images/13.png';
import logo3 from './images/14.png';
import ratings from './images/ratings.png';

function Feedback() {
  return (
    <div className="testimonials-section">
      <h1 className="section-heading">
        Consistently achieving a <em>100% satisfaction <span className="break-line"></span> rate</em>,
        exceeding expectations with every<span className="break-line"></span> 
        project delivery.
      </h1>
      <div className="testimonials-container">
        <div className="testimonial-box1">
          <div className="testimonial-row row1">
            <img src={logo1} alt="Client Logo 1" className="client-logo" />
            <div className="client-info">
              <div className="client-name">
                Antalia
                <div className="client-rating">
                  <span className="rating-value">(4.9)</span>
                  <img src={ratings} alt="Rating" className="rate-logo" />
                </div>
              </div>
              <p className="client-description">Client</p>
            </div>
          </div>
          <div className="testimonial-row row2">
            <p className="testimonial-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>

        <div className="testimonial-box2">
          <div className="testimonial-row row1">
            <img src={logo2} alt="Client Logo 2" className="client-logo" />
            <div className="client-info">
              <div className="client-name">
                Michael
                <div className="client-rating">
                  <span className="rating-value">(4.9)</span>
                  <img src={ratings} alt="Rating" className="rate-logo" />
                </div>
              </div>
              <p className="client-description">Client</p>
            </div>
          </div>
          <div className="testimonial-row row2">
            <p className="testimonial-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>

        <div className="testimonial-box3">
          <div className="testimonial-row row1">
            <img src={logo3} alt="Client Logo 3" className="client-logo" />
            <div className="client-info">
              <div className="client-name">
                James
                <div className="client-rating">
                  <span className="rating-value">(4.9)</span>
                  <img src={ratings} alt="Rating" className="rate-logo" />
                </div>
              </div>
              <p className="client-description">Client</p>
            </div>
          </div>
          <div className="testimonial-row row2">
            <p className="testimonial-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
