import React, { useEffect, useState } from "react";
import Navbar from "../../components/Common/Navbar";
import Home_Service from "../../components/Home/Service-compo";
import Home_Banner from "../../components/Home/Banner-compo";
import Home_About from "../../components/Home/About-compo";
import Home_Choose from "../../components/Home/Choose-compo";
import Home_Testimonial from "../../components/Home/Testimoral-compo";
import Home_CaseStudy from "../../components/Home/CaseStudy-compo";
import Home_Logo from "../../components/Home/Scroll-Logo";
import Footer from "../../components/Common/Footer";
import Title from "../../components/Common/Title";
import Navbar_items from "../../components/Common/Nav";
import Banner_Main from "../../components/Home/Banner-compo/ban";
import WorkFlowComponent from "../../components/Home/WorkFlow";
import HomeCount from "../../components/Home/Home-Count";
import NewLaptop from "../../components/Home/Banner-compo/new";
import HomeNavBanner from "../../components/Home/HomeBannerNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import './index.css'

function Home() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);

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
      <Title title="Home | Hermon Solutions">
        <HomeNavBanner />
        <div className="container">
          <Home_About />
          <Home_Service />
          <Home_Choose />
          <WorkFlowComponent />
          <Home_Logo />
        </div>
        <HomeCount />
        {/* <Home_Testimonial /> */}
        <div className="container mt-4">
          <Home_CaseStudy />
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

export default Home;
