import React, { useEffect, useState } from "react";
import Navbar from "../../components/Common/Navbar";
import Footer from "../../components/Common/Footer";
import Title from "../../components/Common/Title";
import Banner_Team from "../../components/Our-Team/Banner";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Card_Team from "../../components/Our-Team/Card";
import Our_NewCard from "../../components/Our-Team/NewCard";
import Navbar_items from "../../components/Common/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

function Our_Team() {
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
      <Title title="Our Team | Hermon Solutions">
        {/* <Navbar_items /> */}
        <Sub_Navbar />
        <Banner_Team />
        <div className="container">
          {/* <Card_Team /> */}
          <Our_NewCard />
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

export default Our_Team;
