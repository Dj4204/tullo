import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Tullo</h2>
        <p className="about-text">
          Tullo.com is your smart companion to find the <span>best sports and tech coaches</span> near you. 
          Whether you’re looking to improve your game or upgrade your skills, we connect you with 
          expert mentors who guide you every step of the way.
        </p>

        <p className="about-text">
          Our mission is to make learning <span>accessible, personalized, and fun</span>.  
          With Tullo, you don’t just find a coach—you find a mentor who understands your goals and 
          helps you achieve them faster.
        </p>

        <p className="about-highlight">
          🚀 Tullo.com – Where <span>passion meets guidance</span>.
        </p>
      </div>
    </section>
  );
}

export default About;
