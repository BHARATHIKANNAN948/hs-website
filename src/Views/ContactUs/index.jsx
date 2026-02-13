import React, { useEffect, useState } from "react";
import Footer from "../../components/Common/Footer";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Banner_Content from "../../components/ContactUs/Banner";
import Contact_Form from "../../components/ContactUs/Form";
import Title from "../../components/Common/Title";
import Contact_Number from "../../components/ContactUs/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
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
      <Title title="Contact Us | Hermon Solutions">
        <Sub_Navbar />
        <Banner_Content />
        <div className="container">
          <Contact_Form />
          <Contact_Number />
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

export default ContactUs;
