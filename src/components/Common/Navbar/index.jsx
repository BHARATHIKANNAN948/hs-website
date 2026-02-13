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

function Navbar() {
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

  useEffect(() => {
    const textCarousel = document.querySelector("#carouselText");
    const imageCarousel = document.querySelector("#carouselImage");

    // Defensive check for bootstrap
    if (!window.bootstrap || !window.bootstrap.Carousel) {
      console.error("Bootstrap Carousel is not available.");
      return;
    }

    const textBsCarousel = new window.bootstrap.Carousel(textCarousel);
    const imageBsCarousel = new window.bootstrap.Carousel(imageCarousel);

    const syncSlide = (e) => {
      const direction = e.direction === "left" ? "next" : "prev";
      if (e.target.id === "carouselText") {
        imageBsCarousel[direction]();
      } else {
        textBsCarousel[direction]();
      }
    };

    textCarousel.addEventListener("slide.bs.carousel", syncSlide);
    imageCarousel.addEventListener("slide.bs.carousel", syncSlide);

    return () => {
      textCarousel.removeEventListener("slide.bs.carousel", syncSlide);
      imageCarousel.removeEventListener("slide.bs.carousel", syncSlide);
    };
  }, []);

  const carouselTitles = [
    "Best All In One Platform Powering System",
    "Empower Your Business with Smart Tools",
    "Streamline Workflow and Boost Productivity",
  ];

  return (
    <>
      <div className="banner-background-img mb-5">
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

        {/* <!-- Navbar --> */}
        <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar_main_container">
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
                      className={`nav-link navbar-link-content ${isActive ? "active" : ""
                        }`}
                      href="#"
                    // data-bs-toggle="dropdown"
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
            </nav>
          </div>
        </div>

        {/* <Home_Banner />    */}
        <div className="carousel-main-container">
          <div className="laptop-banner-main">
            <div className="w-100 row align-items-center text-center text-md-start banner-hs-checking">
              <div className="col-4 col-md-2 d-flex justify-content-center">
                <img
                  src={Carusoul_Dot}
                  alt="dot-Image"
                  className="carusoul-dot-image shape-1 bounce-animation img-fluid"
                />
              </div>
              <div className="col-12 col-md-8">
                <div
                  id="carouselText"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {carouselTitles.map((title, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""
                          }`}
                        data-bs-interval="5000"
                      >
                        <section className="hero">
                          <div className="container-fluid">
                            <div className="text-center mt-3">
                              <h1 className="banner-carusoul-container text-white">
                                {title}
                              </h1>
                            </div>
                          </div>
                        </section>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-2 d-flex justify-content-center">
                <img
                  src={Carusoul_Circle}
                  alt="Circle-Image"
                  className="carusoul-circle-image shape-2 img-fluid"
                />
              </div>
            </div>
            <div
              id="carouselImage"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {[
                  Carosuel_Img,
                  Carosuel_Img1,
                  Carosuel_Img2,
                  Carosuel_Img3,
                  Carosuel_Img4,
                ].map((img, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    data-bs-interval="10000"
                  >
                    <section className="hero">
                      <div className="container-fluid">
                        <div className="text-center mt-3">
                          <img
                            src={img}
                            alt="Dashboard UI"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselImage"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselImage"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
