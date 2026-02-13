import React, { useEffect, useState } from "react";
import Footer from "../../components/Common/Footer";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Title from "../../components/Common/Title";
import Banner_Policy from "../../components/Private-Policy/Banner";
import Privacy_Content from "../../components/Private-Policy/Content";
import Banner_Terms from "../../components/Term&Condition/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import TermsConditon_Content from "../../components/Term&Condition/content";

function Term_Condition() {
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
      <Title title="Terms & Conditions | Hermon Solutions">
        <Sub_Navbar />
        <Banner_Terms />
        <TermsConditon_Content />
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

export default Term_Condition;
