import React from "react";
import "./index.css";
import Home_About_Img from "../../../assets/Images/about-us-f-1.png";
import { Link } from "react-router-dom";
function Home_About() {
  return (
    <>
      <div class="home-about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6" data-aos="slide-up">
              <div class="home-about-img">
                <img src={Home_About_Img} alt="image" />
              </div>
            </div>
            <div class="col-lg-6 text-start pl-20" data-aos="slide-up">
              <div class="about-text-area">
                <div
                  class="default-section-title"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <h6 className="home-service-heading">
                    WHY HERMON SOLUTIONS?
                  </h6>
                  <h3 className="home-service-content">
                    About Us - Empowering Your Digital Experience with
                    Excellence
                  </h3>
                </div>
                <p className="home-service-card-content">
                  Welcome to Hermon solutions, your trusted destination for
                  quality, innovation, and customer-focused digital solutions.
                  We specialize in delivering high-performance services tailored
                  to your goals. Our mission is to turn your vision into results
                  with precision and passion.
                </p>
                <div class="about-list">
                  <ul>
                    <li>
                      Over a decade of experience in building scalable,
                      user-friendly solutions.
                    </li>
                    <li>
                      {" "}
                      Client-first approach with 24/7 support and transparent
                      communication.
                    </li>
                    <li>
                      Committed to quality, performance, and measurable growth.
                    </li>
                  </ul>
                </div>
                <Link
                  to={"/aboutUs"}
                  className="text-decoration-none text-light"
                >
                  <button class="default-home-button">
                    <span className="home-about-btn-route">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_About;
