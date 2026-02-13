import React from "react";
// import "./index.css";
import Home_About_Img from "../../../assets/Images/about-us-f-1.png";
import { Link } from "react-router-dom";
function About_First() {
  return (
    <>
      <div class="home-about1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6" data-aos="fade-right">
              <div class="home-about-img">
                <img src={Home_About_Img} alt="image" />
              </div>
            </div>
            <div class="col-lg-6 text-start pl-20" data-aos="fade-left">
              <div class="about-text-area">
                <div class="default-section-title">
                  <h6 className="home-service-heading text-start">
                    {/* WHY HERMON SOLUTIONS? */}
                    EXPERIENCE THE HERMON SOLUTIONS DIFFERENCE?
                  </h6>
                  <h3 className="home-service-content text-start">
                    About Hermon Solution – A Trusted Web Development Company in
                    India
                  </h3>
                </div>
                <p className="home-service-card-content">
                  Founded in 2009, <strong>Hermon Solution</strong> is one of the fastest-growing
                  IT companies in India, specializing in web development and
                  digital transformation services. We are committed to
                  delivering innovative, high-quality solutions that drive
                  measurable business results.
                </p>
                <p className="home-service-card-content">
                  At <strong>Hermon Solution</strong>, we go beyond simply maintaining your
                  operations we empower your business to evolve, scale, and
                  succeed in the digital age. Our tailored IT services and
                  business solutions are designed to meet your goals with
                  unmatched precision and reliability.
                </p>
                <p className="home-service-card-content">
                  With a strong focus on on-time delivery, budget-friendly
                  execution, and superior quality, we ensure that your
                  requirements are not only met but exceeded. Our clients
                  benefit from enhanced efficiency, agility, and
                  responsiveness key elements that set us apart in the
                  competitive web development landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_First;
