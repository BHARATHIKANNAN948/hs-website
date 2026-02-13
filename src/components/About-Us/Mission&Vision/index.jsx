import React from "react";
import "./index.css";

function Mission_About() {
  return (
    <>
       <div class="default-section-title default-section-title-middle mt-5">
          <h6>Our Foundation</h6>
          <h5 className="about-mission-heading-content">Built on mission, vision, and values, our foundation drives innovation, trust, and lasting impact.</h5>
        </div>
      <div class="about-grid-container">
        <div class="about-grid-item about-bg-image about-bg-1" data-aos="fade-right"></div>

        <div class="about-grid-item about-text-green" data-aos="fade-down">
          <h2> Our Vision</h2>
          <p>
            Our vision is to become a global leader in delivering reliable and
            transformative digital services. We strive to shape a smarter future
            where businesses thrive through intelligent technology, data-driven
            decisions, and authentic brand experiences.
          </p>
        </div>

        <div class="about-grid-item about-bg-image about-bg-2" data-aos="fade-left"></div>

        <div class="about-grid-item about-text-white" data-aos="fade-right">
          <h2>Our Mission</h2>
          <p>
            our mission is to deliver innovative, customer-centric solutions
            that drive measurable results. We aim to empower businesses through
            technology, strategy, and seamless digital experiences tailored to
            meet evolving market needs.
          </p>
        </div>

        <div class="about-grid-item about-bg-image about-bg-3" data-aos="fade-up"></div>

        <div class="about-grid-item about-text-orange" data-aos="fade-left">
          <h2>Our Values</h2>
          <p>
           Integrity, innovation, and impact — these values are the foundation of everything we do. We believe in building trust, embracing creativity, and always delivering value that matters to clients and communities.
          </p>
        </div>
      </div>
    </>
  );
}

export default Mission_About;
