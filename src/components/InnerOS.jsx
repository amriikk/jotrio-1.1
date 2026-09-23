import React from 'react';
import './InnerOS.scss';
import iOS_Articles from './iOS_Articles';
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
          <div className="philosophy-text">
            <p>
                In the year preceding the 2020 lockdowns, I lost my mother. During the profound stillness that followed—and amidst the historic protests sweeping through Los Angeles—I found myself rebuilding my foundation from the ground up using two distinct tools: code and yoga.
            </p>
            <p>
                While serving on the founding team at the DTLA CorePower Yoga studio and completing my 300-hour RYT certification, I was simultaneously immersed in a full-stack engineering bootcamp. That dual discipline of physical grounding and technical logic became my lifeline. It provided the clarity and force necessary to return to UC Santa Barbara in 2021 to finish my undergraduate studies. Later, propelled by the passing of my grandfather, I pushed that momentum even further, culminating in my 2026 graduation from the Robert Mehrabian College of Engineering.
            </p>
            <p>
                Yoga taught me that breath is the ultimate mechanism for balance, strength, and power. The Eight Limbs of Yoga offer more than just physical asana; they provide a systematic framework for getting grounded and closer to knowing thyself. 
            </p>
            <p>
                This practice is my <b>InnerOS</b>—the quiet, resilient operating system that powers everything I build.
            </p>
          </div>
          {/* --- DIGITAL INTEGRATION SECTION --- */}
      <section className="digital-application-section">
        <div className="content-container">
          <h2>Digital Integration</h2>
          <p className="section-intro">Translating analog practice into digital architecture.</p>
          
          <div className="app-showcase-card">
            <div className="app-info">
              <h3>Yoga Journal App</h3>
              <p>
                A dedicated platform engineered to track practice cadence, log mindfulness milestones, and explore the Eight Limbs. Designing a seamless, distraction-free UX to bridge holistic wellness with modern architecture.
              </p>
              <div className="tech-stack">
                <span>React.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>UI/UX Design</span>
              </div>
              <a href="#" className="view-project-btn">Case Study Coming Soon</a>
            </div>
            <div className="app-visual">
              {/* You will eventually replace this div with an actual <img /> of the app interface */}
              <div className="image-placeholder">App Interface Preview</div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>
    <iOS_Articles />
    </div>
  );
};

export default InnerOS;