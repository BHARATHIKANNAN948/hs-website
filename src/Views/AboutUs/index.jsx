import React, { useEffect, useState } from "react";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Title from "../../components/Common/Title";
import Footer from "../../components/Common/Footer";
import Banner_About from "../../components/About-Us/Banner";
import Home_About from "../../components/Home/About-compo";
import Home_Logo from "../../components/Home/Scroll-Logo";
import Home_Service from "../../components/Home/Service-compo";
import Home_Choose from "../../components/Home/Choose-compo";
import About_Team from "../../components/About-Us/Card";
import Mission_About from "../../components/About-Us/Mission&Vision";
import About_First from "../../components/About-Us/about-new-meaning";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
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
      <Title title="AboutUs | Hermon Solutions">
        <Sub_Navbar />
        <Banner_About />
        <div className="container">
          <div className="mb-5">
            <About_First />
            <Mission_About />
          </div>
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

export default AboutUs;
