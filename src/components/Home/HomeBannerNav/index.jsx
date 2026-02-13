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
import Home_Banner from "../../Home/Banner-compo";
import Carosuel_Img from "../../../assets/Images/biz-dash.jpg";
import Carosuel_Img1 from "../../../assets/Images/araciyal-user.jpg";
import Carosuel_Img2 from "../../../assets/Images/pink-user.jpg";
import Carosuel_Img3 from "../../../assets/Images/araciya-admin.jpg";
import Carosuel_Img4 from "../../../assets/Images/pink-admin (2).jpg";
import Carusoul_Dot from "../../../assets/Images/carusoul-image-dot.png";
import Carusoul_Circle from "../../../assets/Images/carusoul-image-round.png";
import NewLaptop from "../Banner-compo/new";

function HomeNavBanner() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isActive = ["/aboutUs", "/ourteam"].includes(location.pathname);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
    <div className="banner-override-fix">
      <div className="banner-home-navbar-new mb-5">
        {/* <!-- Top Bar --> */}
        <div class="topbar p-2">
          <div class="container">
            <div className="row">
              <div className="col-md-10 col-lg-6">
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
              </div>

              <div className="col-md-2 col-lg-6 text-end">
                <a
                  href="https://www.facebook.com/HermonSolutions2009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-name-1"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hermon-solutions-7aa891288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-name"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                {/* <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-name"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a> */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-name"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar --> */}
        <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
          <div className="container">
            <nav className="navbar text-start navbar-expand-lg navbar_main_container">
              <a className="navbar-brand" href="/">
                <img src={Logo_Img} alt="Logo" width="150" />
              </a>
              <button
                className={`navbar-toggle ${isCollapsed ? "collapsed" : "x"}`}
                type="button"
                onClick={handleToggle}
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={!isCollapsed}
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link navbar-link-content"
                      to="/"
                      activeClassName="active"
                    >
                      Home
                    </NavLink>
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
                         Our Experts
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
            </nav>
          </div>
        </div>
        <div className="container check-check">
          <NewLaptop />
        </div>
      </div>
      </div>
    </>
  );
}

export default HomeNavBanner;
