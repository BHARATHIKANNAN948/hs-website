import React, { useEffect } from "react";
import Carosuel_Img from "../../../assets/Images/biz-dash.jpg";
import Carosuel_Img1 from "../../../assets/Images/araciyal-user.jpg";
import Carosuel_Img2 from "../../../assets/Images/pink-user.png";
import Carosuel_Img3 from "../../../assets/Images/araciya-admin.jpg";
import Carosuel_Img4 from "../../../assets/Images/pink-admin.jpg";
import Carusoul_Dot from "../../../assets/Images/carusoul-image-dot.png";
import Carusoul_Circle from "../../../assets/Images/carusoul-image-round.png";
import "./index.css";
function Home_Banner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const textCarousel = document.querySelector("#carouselText");
    const imageCarousel = document.querySelector("#carouselImage");

    // Defensive check for bootstrap
    if (!window.bootstrap || !window.bootstrap.Carousel) {
      console.error("Bootstrap Carousel is not available.");
      return;
    }

    const textBsCarousel = new window.bootstrap.Carousel(textCarousel);
    const imageBsCarousel = new window.bootstrap.Carousel(imageCarousel);

    const syncSlide = (e) => {
      const direction = e.direction === "left" ? "next" : "prev";
      if (e.target.id === "carouselText") {
        imageBsCarousel[direction]();
      } else {
        textBsCarousel[direction]();
      }
    };

    textCarousel.addEventListener("slide.bs.carousel", syncSlide);
    imageCarousel.addEventListener("slide.bs.carousel", syncSlide);

    return () => {
      textCarousel.removeEventListener("slide.bs.carousel", syncSlide);
      imageCarousel.removeEventListener("slide.bs.carousel", syncSlide);
    };
  }, []);

  const carouselTitles = [
    "Best All In One Platform Powering System",
    "Empower Your Business with Smart Tools",
    "Streamline Workflow and Boost Productivity",
  ];

  return (
    <div className="carousel-main-container">
      {/* <div className="laptop-banner-main">
        <div className="w-100 row align-items-center text-center text-md-start banner-hs-checking">
          <div className="col-4 col-md-2 d-flex justify-content-center">
            <img
              src={Carusoul_Dot}
              alt="dot-Image"
              className="carusoul-dot-image shape-1 bounce-animation img-fluid"
            />
          </div>
          <div className="col-12 col-md-8">
            <div
              id="carouselText"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {carouselTitles.map((title, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    data-bs-interval="5000"
                  >
                    <section className="hero">
                      <div className="container-fluid">
                        <div className="text-center mt-3">
                          <h1 className="banner-carusoul-container text-white">
                            {title}
                          </h1>
                        </div>
                      </div>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-4 col-md-2 d-flex justify-content-center">
            <img
              src={Carusoul_Circle}
              alt="Circle-Image"
              className="carusoul-circle-image shape-2 img-fluid"
            />
          </div>
        </div>
        <div
          id="carouselImage"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {[Carosuel_Img, Carosuel_Img1, Carosuel_Img2,Carosuel_Img3,Carosuel_Img4].map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <section className="hero">
                  <div className="container-fluid">
                    <div className="text-center mt-3">
                      <img src={img} alt="Dashboard UI" className="img-fluid" />
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselImage"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselImage"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Home_Banner;
