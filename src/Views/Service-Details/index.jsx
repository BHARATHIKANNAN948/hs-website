import React from "react";
import Sub_Navbar from "../../components/Common/SubNavbar";
import Service_Details from "../../components/Services/Details";
import Banner_Details from "../../components/Services/Detail-Banner";
import Title from "../../components/Common/Title";
import Footer from "../../components/Common/Footer";

function Service_Detail() {
  return (
    <>
      <Title title="Service Details | Hermon Solutions">
        <Sub_Navbar />
        <Banner_Details />
        <Service_Details />
        <Footer />
      </Title>
    </>
  );
}

export default Service_Detail;
