import React from "react";
import "./index.css";
import Logo_Img from "../../../assets/Images/hermon-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div class="footer p-5 bg-f9faff mt-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="footer-logo-area">
                <img
                  class="black-logo"
                  src={Logo_Img}
                  alt="logo"
                  className="footer-logo"
                />
                <p className="footer-logo-btm-content mt-4">
                  Hermon Solutions is a leading provider of digital and IT
                  services, offering expert solutions in software development,
                  consulting, and business transformation. With a strong
                  foundation in innovation and client satisfaction, we empower
                  businesses to work smarter, grow faster, and achieve more.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="footer-links footer-contact-list">
                <h3 className="footer-heading">Get In Touch</h3>
                <p className="footer-line"></p>
                <div class="footer-content-card">
                  <i class="fas fa-map-marker-alt"></i>
                  <h5 className="footer-logo-btm-content">Location:</h5>
                  <p className="footer-logo-btm-content">
                    <a href="#">
                      G1, No. 10 Fortune House, Bharathi Street, Srinivasa
                      Nagar, New Perungalathur, Chennai - 600063 Tamil Nadu,
                      India.
                    </a>
                  </p>
                </div>
                <div class="footer-content-card">
                  <i class="fas fa-envelope"></i>
                  <h5 className="footer-logo-btm-content">Email:</h5>
                  <p className="footer-logo-btm-content">
                    <a href="mailto:hello@izan.com">
                      contact@hermonsolutions.com
                    </a>
                  </p>
                </div>
                <div class="footer-content-card">
                  <i class="fas fa-mobile-alt"></i>
                  <h5 className="footer-logo-btm-content">Phone:</h5>
                  <p className="footer-logo-btm-content">
                    <a href="tel:13454567877">+91 98416 52232</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="footer-links footer-quick-links">
                <h3 className="footer-heading">Quick Links</h3>
                <p className="footer-line"></p>

                <ul>
                  <li>
                    <Link to={"/aboutUs"} className="footer-social-link">
                      <i class="fas fa-angle-right"></i> <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/services"} className="footer-social-link">
                      <i class="fas fa-angle-right"></i>{" "}
                      <span>Our Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/case-study"} className="footer-social-link">
                      <i class="fas fa-angle-right"></i> <span>Case Study</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ourteam"} className="footer-social-link">
                      <i class="fas fa-angle-right"></i> <span>Our Team</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contactus"} className="footer-social-link">
                      <i class="fas fa-angle-right"></i> <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="footer-links footer-newsletter">
                <h3 className="footer-heading">Follow Us</h3>
                <p className="footer-line"></p>
                {/* <p className="footer-logo-btm-content">
                  Subscribe To Our Newsletter To Get Our Update News!
                </p>
                <form>
                  <div class="input-group footer-logo-btm-content">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Email"
                    />
                    <button class="btn" type="submit">
                      <i class="far fa-paper-plane"></i>
                    </button>
                  </div>
                </form> */}
                <div class="footer-social-icons">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/HermonSolutions2009"
                        target="_blank"
                        className="footer-social-link"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="footer-social-link"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/hermon-solutions-7aa891288"
                        target="_blank"
                        className="footer-social-link"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-f9faff">
        <div className="container">
          <h1 className="hermon-foot">HERMON</h1>
        </div>
      </div> */}
      <div class="copyright bg-f9faff">
        <div class="container pt-3 border-top">
          <div className="row">
            <div className="col-md-6 text-start">
              <p className="footer-copy-right">
                Copyright @ {new Date().getFullYear()}, All Rights Reserved By{" "}
                <span className="footer-hrmon"> Hermon Solutions.</span>
              </p>
            </div>
            <div className="col-md-6 text-end">
              <span className="footer-privacy-policy">
                <Link
                  to={"/Privacy/Policy"}
                  className="text-decoration-none text-dark"
                >
                  Privacy Policy
                </Link>
              </span>
              <span>/</span>
              <span className="footer-term-condition">
                <Link
                  to={"/Terms&Condition"}
                  className="text-decoration-none text-dark"
                >
                  Terms & Conditions
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
