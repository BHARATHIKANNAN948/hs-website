import React from "react";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Service_Details from "../../components/Services/Details";
import Banner_Details from "../../components/Services/Detail-Banner";
import Banner_Case_Details from "../../components/Case Study/Banner-Details";
import Footer from "../../components/Common/Footer";
import Title from "../../components/Common/Title";
import Portfolio_Details_Component from "../../components/Porfolio/details";

function Portfolio_Details() {
  return (
    <>
      <Title title="CaseStudy Details | Hermon Solutions">
        <Sub_Navbar />
        <Banner_Case_Details />
        <Portfolio_Details_Component />
        <Footer />
      </Title>
    </>
  );
}

export default Portfolio_Details;
