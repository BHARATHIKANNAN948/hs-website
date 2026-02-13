import React, { useEffect, useState } from "react";
import Footer from "../../components/Common/Footer";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Banner_Services from "../../components/Services/Banner";
import Service_Card from "../../components/Services/Card";
import Title from "../../components/Common/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Title title="Services | Hermon Solutions">
        <Sub_Navbar />
        <Banner_Services />
        <div className="container">
          <Service_Card />
        </div>
        <Footer />
      </Title>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="btn back-to-top-btn position-fixed"
          title="Go to top"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      )}
    </>
  );
}

export default Services;
