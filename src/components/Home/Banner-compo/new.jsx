import React, { useEffect, useState } from "react";
import "./new.css";
import Carosuel_Img from "../../../assets/Images/biz-dash.jpg";
import Carosuel_Img1 from "../../../assets/Images/araciyal-user.jpg";
import Carosuel_Img2 from "../../../assets/Images/pink-user.png";
import Carosuel_Img3 from "../../../assets/Images/araciya-admin.jpg";
import Carosuel_Img4 from "../../../assets/Images/pink-admin.jpg";
import Carusoul_Dot from "../../../assets/Images/carusoul-image-dot.png";
import Carusoul_Circle from "../../../assets/Images/carusoul-image-round.png";
import Choose_Image_01 from "../../../assets/Images/banner-mobile/home-banner-mobile1.png";
import Choose_Image_02 from "../../../assets/Images/banner-mobile/home-banner-img2.png";
import Choose_Image_03 from "../../../assets/Images/banner-mobile/hame-banner-mobile3.png";
import Choose_Image_05 from "../../../assets/Images/mobileappsingle5.png";
import MobileFrame from "../../../assets/Images/laptop-final-screen.png";

import Banner_Mobile from "./mobile";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";
import Loading from "../../Loading";
import MobileCarousel from "../Banner-Mobile";

function NewLaptop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateClass, setAnimateClass] = useState("slide-in");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const carousel = document.getElementById("carouselLaptop");

    const onSlide = (event) => {
      const direction = event.direction;
      if (direction === "left") {
        setAnimateClass("slide-out-left");
      } else {
        setAnimateClass("slide-out-right");
      }

      setTimeout(() => {
        setCurrentIndex((prev) =>
          direction === "left"
            ? (prev + 1) % list.length
            : (prev - 1 + list.length) % list.length
        );
        setAnimateClass(
          direction === "left" ? "slide-in-left" : "slide-in-right"
        );
      }, 50);
    };

    carousel?.addEventListener("slide.bs.carousel", onSlide);
    return () => {
      carousel?.removeEventListener("slide.bs.carousel", onSlide);
    };
  }, [list]);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // list,

  const BannerLaptopList = async () => {
    setLoading(true);
    try {
      const response = await LoginAPI.bannerLaptopList();

      if (response.apiStatus.code === "200") {
        setList(response.responseData.BannerData);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    BannerLaptopList();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const carouselElement = document.querySelector("#carouselLaptop");
      if (carouselElement) {
        const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: 5000,
          ride: "carousel",
        });

        carousel.next();
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div data-aos="zoom-in">
        {isDesktop ? (
          <>
            {loading ? (
              <div className="p-5 mt-5 mb-5">
                <Loading />
              </div>
            ) : (
              <>
                <div className="w-100 mt-4 row align-items-center text-center text-md-start banner-hs-checking">
                  <div className="col-md-2 p-0">
                    <img
                      src={Carusoul_Dot}
                      alt="dot-Image"
                      className="carusoul-dot-image shape-1 bounce-animation img-fluid"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="carousel slide" id="carouselText">
                      <div
                        className="carousel-inner"
                        // data-aos="zoom-in-up"
                        // data-aos-delay="200"
                        // data-aos-duration="1000"
                        // data-aos-easing="ease-in-out"
                      >
                        <div
                          className={`text-center carousel-title-wrapper ${animateClass}`}
                        >
                          <section className="hero">
                            <div className="container-fluid">
                              <div className="text-center">
                                <h1 className="banner-carusoul-container text-white">
                                  {list[currentIndex]?.title}
                                </h1>
                                <p
                                  className="text-light banner-lap-desc"
                                  dangerouslySetInnerHTML={{
                                    __html: list[currentIndex]?.description,
                                  }}
                                >
                                  {/* {slides[currentIndex].description} */}
                                </p>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 text-end p-0">
                    <img
                      src={Carusoul_Circle}
                      alt="Circle-Image"
                      className="carusoul-circle-image shape-2 img-fluid"
                    />
                  </div>
                </div>
                {/* <div className="why-choose-laptop-img m-0 p-0">
                  <div
                    id="carouselLaptop"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="5000"
                  >
                    <div className="carousel-inner">
                      {list.map((value, index) => (
                        <div
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                          key={value.id}
                        >
                          <section className="hero">
                            <div className="container-fluid">
                              <div className="text-center mt-3">
                                <img
                                  src={`${baseURL}/${value.path}${value.altered_file_name}`}
                                  alt="Dashboard UI"
                                  className="img-fluid"
                                  style={{borderRadius:"5px"}}
                                />
                              </div>
                            </div>
                          </section>
                        </div>
                      ))}
                    </div>
                    {list.length > 1 && (
                      <>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselLaptop"
                          data-bs-slide="prev"
                        >
                          <i class="fa-solid fa-chevron-left carousel-arrows-rightandleft"></i>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselLaptop"
                          data-bs-slide="next"
                        >
                          <i class="fa-solid fa-chevron-right carousel-arrows-rightandleft"></i>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </>
                    )}
                  </div>
                </div> */}
                <div className="laptop-frame-wrapper">
                  <div className="carousel-inside-frame-laptop">
                    <div
                      id="carouselLaptop"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="5000"
                    >
                      <div className="carousel-inner bg-white lap-carosouel-in">
                        {list.map((value, index) => (
                          <div
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                            key={value.id}
                          >
                            <section className="hero">
                              <div className="container-fluid">
                                <div className="text-center mt-3">
                                  <img
                                    src={`${baseURL}/${value.path}${value.altered_file_name}`}
                                    alt={value.title}
                                    className="d-block w-100"
                                    style={{ borderRadius: "5px" }}
                                  />
                                </div>
                              </div>
                            </section>
                          </div>
                        ))}
                      </div>

                      {list.length > 1 && (
                        <>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselLaptop"
                            data-bs-slide="prev"
                          >
                            <i className="fa-solid fa-chevron-left carousel-arrows-rightandleft"></i>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselLaptop"
                            data-bs-slide="next"
                          >
                            <i className="fa-solid fa-chevron-right carousel-arrows-rightandleft"></i>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* frame overlay */}
                  <img
                    src={MobileFrame}
                    alt="laptop frame"
                    className="laptop-frame-overlay"
                  />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {/* <Banner_Mobile /> */}
            <MobileCarousel />
          </>
        )}
      </div>
    </>
  );
}

export default NewLaptop;
