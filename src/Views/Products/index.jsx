import React, { useEffect, useState } from "react";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Title from "../../components/Common/Title";
import Footer from "../../components/Common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import Banner_Product from "../../components/Products/banner";
import Products_Hermon from "../../components/Products/product_data";

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
      <Title title="Products | Hermon Solutions">
        <Sub_Navbar />
        <Banner_Product />
        <div className="container">
          <div className="mb-5">
           <Products_Hermon />
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
