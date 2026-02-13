import React, { useEffect, useState } from "react";
import Title from "../../components/Common/Title";
import Sub_Navbar from "../../components/Common/SubNavbar";
import New_Portfolio_Card from "../../components/Porfolio/NewCard";
import Footer from "../../components/Common/Footer";
import Porfolio_Banner from "../../components/Porfolio/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Porfolio_Banner_List from "../../components/Porfolio/NewCard/banner";

function CategoryList_Portfolio() {
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
      <Title title="Portfolio Details | Hermon Solutions">
        <Sub_Navbar />
        <Porfolio_Banner_List />
        <New_Portfolio_Card />
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

export default CategoryList_Portfolio;
