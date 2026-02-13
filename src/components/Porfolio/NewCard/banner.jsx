import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Porfolio_Banner_List() {
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
        <h3 className="banner-contect-header">Our Portfolio Data</h3>
        <ul className="banner-contact-list">
          <li className="banner-contact-lists">
            <Link to={"/our-portfolio"} className="banner-home-route">
              Portfolio Category
            </Link>
          </li>
          <li className="banner-contact-lists">/</li>
          <li className="banner-contact-lists">Portfolio Category Data</li>
        </ul>
      </div>
    </>
  );
}

export default Porfolio_Banner_List;
