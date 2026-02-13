import React, { useEffect, useState } from "react";
import Home_About from "../../components/Home/About-compo";
import Footer from "../../components/Common/Footer";
import Title from "../../components/Common/Title";
import Porfolio_Component from "../../components/Porfolio/card";
import CaseStudy_Card from "../../components/Case Study/Card";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Porfolio_Banner from "../../components/Porfolio/Banner";
import Contact_Number from "../../components/ContactUs/contact";
import Portfolio_Category_Component from "../../components/Porfolio/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Porfolio() {
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
      <Title title="Portfolio | Hermon Solutions">
        <Sub_Navbar />
        <Porfolio_Banner />
        <div className="container">
          <Portfolio_Category_Component />
          {/* <Porfolio_Component /> */}
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

export default Porfolio;
