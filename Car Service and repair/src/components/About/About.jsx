import React from 'react';
import './About.css';
import aboutImage from '../../assets/about.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <p>Welcome to our premier auto service center, where excellence meets expertise. With over 15 years of experience in the automotive industry, we pride ourselves on delivering top-quality service and customer satisfaction.</p>
            <div className="about-features">
              <div className="feature">
                <h3>Expert Team</h3>
                <p>Certified mechanics with years of experience</p>
              </div>
              <div className="feature">
                <h3>Quality Service</h3>
                <p>State-of-the-art equipment and genuine parts</p>
              </div>
              <div className="feature">
                <h3>Customer First</h3>
                <p>Dedicated to exceeding your expectations</p>
              </div>
            </div>
            <button className="about-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 