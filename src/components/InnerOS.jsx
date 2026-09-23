import React from 'react';
import './InnerOS.scss';
// Import high-res yoga hero pic here or place it in public/
// import yogaHeroBg from '../assets/yoga-hero.jpg'; 

const InnerOS = () => {
  return (
    <div className="inner-os-container">
      
      {/* --- PARALLAX HERO SECTION --- */}
      <section className="parallax-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="inner-os-title">InnerOS</h1>
          <h3 className="inner-os-subtitle">
            Mindfulness as the Ultimate Operating System.
          </h3>
          <p className="hero-credentials">300-Hour RYT | Hot Yoga Practitioner</p>
        </div>
      </section>

      {/* Placeholder for the Philosophy Section */}
      <section className="philosophy-section">
        <div className="content-container">
          <h2>The Practice</h2>
          <p>Scrolling content to reveal the parallax effect above...</p>
          <div style={{ height: "60vh" }}></div> {/* Temporary spacing to test scroll */}
        </div>
      </section>

    </div>
  );
};

export default InnerOS;