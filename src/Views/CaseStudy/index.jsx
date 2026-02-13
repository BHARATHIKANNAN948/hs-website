import React, { useEffect, useState } from "react";
import Footer from "../../components/Common/Footer";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Banner_CaseStudy from "../../components/Case Study/Banner";
import CaseStudy_Card from "../../components/Case Study/Card";
import Title from "../../components/Common/Title";
import CaseStudy_Details from "../../components/Case Study/Card/detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function CaseStudy() {
 
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
      <Title title="Case Study | Hermon Solutions">
        <Sub_Navbar />
        <Banner_CaseStudy />
        <div className="container">
          <CaseStudy_Card />
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

export default CaseStudy;
