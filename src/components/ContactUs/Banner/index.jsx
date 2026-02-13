import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Banner_Content() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="container banner-contact-container"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <h3 className="banner-contect-header">Contact Us</h3>
        <ul className="banner-contact-list">
          <li className="banner-contact-lists">
            <Link to={"/"} className="banner-home-route">
              Home
            </Link>
          </li>
          <li className="banner-contact-lists">/</li>
          <li className="banner-contact-lists">Contact Us</li>
        </ul>
      </div>
    </>
  );
}

export default Banner_Content;
