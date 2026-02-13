import React, { useState, useEffect } from "react";
import "./index.css";
import Logo_Img from "../../../assets/Images/hermon-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneFlip,
  faClock,
  faLocationDot,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar_items() {
  const location = useLocation();
  const isActive = ["/aboutUs", "/ourteam"].includes(location.pathname);
  return (
    <>
      <>
        {/* <!-- Top Bar --> */}
       <div class="topbar p-2">
          <div class="container d-flex justify-content-between">
            <ul class="d-flex">
              <li className="Top-nav-content">
                <FontAwesomeIcon icon={faPhoneFlip} />{" "}
                <a href="tel:+919841652232">+91-98416-52232</a>
              </li>
              {/* <li className="Top-nav-content">
              <FontAwesomeIcon icon={faClock} /> Mon-Fri 10:00 AM - 7:00 PM
              </li> */}
              <li className="Top-nav-content">
                <FontAwesomeIcon icon={faLocationDot} />{" "}
                <Link
                  to={
                    "https://www.google.com/maps/place/HERMON+SOLUTIONS+-+Development+office/@12.908417,80.095472,11z/data=!4m6!3m5!1s0x3a52f5003fe19ee3:0x52570e1682f1691f!8m2!3d12.9084167!4d80.0954722!16s%2Fg%2F11ybdsyzbb?hl=en&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
                  }
                  target="_blank"
                >
                  New Perungalathur, Chennai - 600063 Tamilnadu, India.{" "}
                </Link>
              </li>
            </ul>
            <ul class="d-flex">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-name-1"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-name"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-name"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-name"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar_main_container1 sticky-top bg-white">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={Logo_Img} alt="Logo" width="150" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link navbar-link-content" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link navbar-link-content ${
                      isActive ? "active" : ""
                    }`}
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Company <FontAwesomeIcon icon={faAngleDown} />
                  </a>
                  <ul className="dropdown-menu navbar-dropdown-main">
                    <li>
                      <NavLink
                        className="dropdown-item Navbar-dropdown-items"
                        to={"/aboutUs"}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item Navbar-dropdown-items"
                        to={"/ourteam"}
                      >
                        Our Team
                      </NavLink>
                    </li>
                  </ul>
                </li>
                
                <li className="nav-item">
                  <NavLink
                    to={"/services"}
                    className="nav-link navbar-link-content"
                    activeClassName="active"
                  >
                    Services
                  </NavLink>
                </li>
                  <li className="nav-item">
                                    <NavLink
                                      to={"/product"}
                                      className="nav-link navbar-link-content"
                                      activeClassName="active"
                                    >
                                      Products
                                    </NavLink>
                                  </li>
                <li className="nav-item">
                  <NavLink
                    to={"/case-study"}
                    className="nav-link navbar-link-content"
                  >
                    {" "}
                    Case Study
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/our-portfolio"}
                    className="nav-link navbar-link-content"
                  >
                    {" "}
                    Porfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/contactus"}
                    className="nav-link navbar-link-content"
                    activeClassName="active"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>


      </>
    </>
  );
}

export default Navbar_items;
