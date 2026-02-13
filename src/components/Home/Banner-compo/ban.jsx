import React from "react";
import Carosuel_Img from "../../../assets/Images/ban1.avif";
import Carusoul_Dot from "../../../assets/Images/ban2.jpg";
import Carusoul_Circle from "../../../assets/Images/ban3.jpg";

function Banner_Main() {
  return (
    <>
    {/* <div  style={{ background: "#FAF7F2", padding: "60px 0" }}>
    <div className="container">
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-start">
          <h1 style={{ fontWeight: "bold", fontSize: "50px", color: "#191919" }}>
            Welcome To<br />
            Hermon Solutions<br />
            User Page.
          </h1>
          <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
            Deliver 1:1 experiences across SMS, RCS, and email for every customer with advanced AI that captures, stores, and activates your data.
          </p>
        </div>

        <div className="col-md-6">
          <div id="carouselExample" className="carousel slide carousel-fade mb-5" data-bs-ride="carousel" style={{marginLeft:'100px'}}>
            <div className="carousel-inner" style={{ height: "600px", width:"500px", borderRadius: "15px", overflow: "hidden" }}>
              <div className="carousel-item gallery active" data-bs-interval="3000">
                <img src={Carosuel_Img} className="d-block w-100" alt="Carousel 1" />
              </div>
              <div className="carousel-item gallery" data-bs-interval="3000">
                <img src={Carusoul_Dot} className="d-block w-100" alt="Carousel 2" />
              </div>
              <div className="carousel-item gallery" data-bs-interval="3000">
                <img src={Carusoul_Circle} className="d-block w-100" alt="Carousel 3" />
              </div>
            </div>

            <div className="carousel-indicators" style={{ bottom: "-70px",left:"-70px" }}>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div> */}
    </>
  );
}

export default Banner_Main;
