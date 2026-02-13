import React, { useEffect, useState } from "react";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Service_Details from "../../components/Services/Details";
import Banner_Details from "../../components/Services/Detail-Banner";
import Banner_Case_Details from "../../components/Case Study/Banner-Details";
import Footer from "../../components/Common/Footer";
import Title from "../../components/Common/Title";
import CaseStudy_Details_Component from "../../components/Case Study/Card/detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Product_Details_Component from "../../components/Products/product_data/detail";
import Banner_Product_Details from "../../components/Products/product_data/case-details";

function Product_Details() {
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
      <Title title="CaseStudy Details | Hermon Solutions">
        <Sub_Navbar />
        <Banner_Product_Details />
        {/* <Service_Details /> */}
        <Product_Details_Component />
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

export default Product_Details;
