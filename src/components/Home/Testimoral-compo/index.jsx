import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel3';  // Direct Import
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TestMonial_Image_01 from '../../../assets/Images/test-1.jpg';
import TestMonial_Image_02 from '../../../assets/Images/test-2.jpg';
import TestMonial_Image_03 from '../../../assets/Images/test-3.jpg';
import Left_Arrow_Image from '../../../assets/Images/left-arrow-2.png';
import Right_Arrow_Image from '../../../assets/Images/right-arrow-2.png';

import './index.css';

function Home_Testimonial() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const options = {
    items: 2,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  return (
    <div className="testimonial testimonial-1 bg-f9faff test-bg-color">
      <div className="shape">
        <div className="shape11" data-speed="0.08" data-revert="true">
          <img src={Left_Arrow_Image} alt="image" />
        </div>
        <div className="shape22" data-speed="0.1" data-revert="true">
          <img src={Right_Arrow_Image} alt="image" />
        </div>
      </div>
      <div className="container">
        <div className="default-section-title default-section-title-middle p-5">
          <h6 className="home-service-heading mt-4">OUR TESTIMONIALS</h6>
          <h3 className="home-service-content">What’s Our Client Saying About Us</h3>
        </div>
        <div className="section-content">
          {isMounted && (
            <OwlCarousel className="testimonial-slider-area owl-theme" {...options}>
              <div className="testimonial-card">
                <i className="fas fa-quote-right quote-icon"></i>
                <div className="testimonial-header">
                  <h4 className="home-service-card-heading">Outstanding Services</h4>
                  <div className="stars">
                    <ul>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li>0.5</li>
                    </ul>
                  </div>
                </div>
                <p className="t-comments">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur luctus tellus, a aliquam tellus mattis  Vestibulum bibendum efficitur felis non blandit elite labore magna aliqua amet ipsum.”</p>
                <div className="testimonial-footer">
                  <img src={TestMonial_Image_01} alt="image" />
                  <div className="testimonial-footer-text">
                    <h4>Mark Parker</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <i className="fas fa-quote-right quote-icon"></i>
                <div className="testimonial-header">
                  <h4 className="home-service-card-heading">Excellent Services</h4>
                  <div className="stars">
                    <ul>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="far fa-star"></i></li>
                      <li>0.4</li>
                    </ul>
                  </div>
                </div>
                <p className="t-comments">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur luctus tellus, a aliquam tellus mattis  Vestibulum bibendum efficitur felis non blandit elite labore magna aliqua amet ipsum.”</p>
                <div className="testimonial-footer">
                  <img src={TestMonial_Image_02} alt="image" />
                  <div className="testimonial-footer-text">
                    <h4>Devid Miler</h4>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <i className="fas fa-quote-right quote-icon"></i>
                <div className="testimonial-header">
                  <h4 className="home-service-card-heading">Perfect Work</h4>
                  <div className="stars">
                    <ul>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li>0.5</li>
                    </ul>
                  </div>
                </div>
                <p className="t-comments">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur luctus tellus, a aliquam tellus mattis  Vestibulum bibendum efficitur felis non blandit elite labore magna aliqua amet ipsum.”</p>
                <div className="testimonial-footer">
                  <img src={TestMonial_Image_03} alt="image" />
                  <div className="testimonial-footer-text">
                    <h4>Peter Parker</h4>
                    <p>Businessman</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home_Testimonial;
