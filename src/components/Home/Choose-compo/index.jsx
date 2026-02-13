import React, { useEffect, useState } from "react";
import "./index.css";
import Choose_Image_01 from "../../../assets/Images/mobileapp-single1.png";
import Choose_Image_02 from "../../../assets/Images/mobileapp-single-2.png";
import Choose_Image_03 from "../../../assets/Images/mobileappsingle3.png";
import Choose_Image_04 from "../../../assets/Images/mobileappsingle4.png";
import Choose_Image_05 from "../../../assets/Images/mobileappsingle5.png";
import MobileFrame from "../../../assets/Images/home-mobile-bg.png";
import Service_Image from "../../../assets/Images/home-service-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinesLeaning, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";
import { Carousel } from "react-bootstrap";

function Home_Choose() {
  useEffect(() => {
    const leftCarousel = document.getElementById("carouselLeft");
    const rightCarousel = document.getElementById("carouselRight");

    window.leftCarouselInstance = new window.bootstrap.Carousel(leftCarousel, {
      interval: false,
      ride: false,
    });

    window.rightCarouselInstance = new window.bootstrap.Carousel(
      rightCarousel,
      {
        interval: false,
        ride: false,
      }
    );
  }, []);

  const handleCarouselControl = (direction) => {
    if (direction === "prev") {
      window.leftCarouselInstance.prev();
      window.rightCarouselInstance.prev();
    } else {
      window.leftCarouselInstance.next();
      window.rightCarouselInstance.next();
    }
  };

  const [list, setList] = useState([]);
  const [happyMoment, setHappy] = useState([]);
  const [loading, setLoading] = useState(false);

  const ChooseUsList = async () => {
    setLoading(true);
    try {
      const response = await LoginAPI.chooseUsList();

      if (response.apiStatus.code === "200") {
        setList(response.responseData.MobileappList);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    ChooseUsList();
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div class="why-we-home mb-4">
        <div class="container">
          <div class="row align-items-center text-start">
            <div
              class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12"
              data-aos="fade-right"
            >
              <div class="why-we-text-area pr-20">
                <div
                  class="default-section-title"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <h6 className="home-service-heading">WHY CHOOSE US</h6>
                  <h3 className="home-service-content">
                    Why Choose Us – Your Trusted Partner for Quality and
                    Innovation
                  </h3>
                </div>
                <p className="home-service-card-content">
                  We combine expertise, innovation, and customer satisfaction to
                  deliver outstanding results. Our team is dedicated to offering
                  personalized solutions that meet your goals and exceed
                  expectations. Experience reliability, performance, and
                  long-term value with us.
                </p>
                <div class="why-we-card">
                  <div class="why-we-card-icon">
                    <img src={Service_Image} alt="image" />
                    <FontAwesomeIcon
                      icon={faLinesLeaning}
                      className="home-choose-icon"
                    />
                  </div>
                  <div class="why-we-card-text">
                    <h4 className="home-service-card-heading">
                      Partner With Us – Make Your Next Project a Success Story
                    </h4>
                    <p className="home-service-card-content">
                      We don’t just complete projects, we build success stories.
                      With a proven process and dedicated team
                    </p>
                  </div>
                </div>
                <div class="why-we-card">
                  <div class="why-we-card-icon">
                    <img src={Service_Image} alt="image" />
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      className="home-choose-icon"
                    />
                  </div>
                  <div class="why-we-card-text">
                    <h4 className="home-service-card-heading">
                      Your Next Project Deserves the Best – Let’s Build It
                      Together
                    </h4>
                    <p className="home-service-card-content">
                      From planning to execution, ensures every phase of your
                      project is handled with care and expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12"
              data-aos="fade-left"
            >
              <div className="row d-flex flex-wrap justify-content-center align-items-center mt-4">
                {/* <div className="col-md-6">
                  <div className="why-choose-mobile-img">
                    <div
                      id="carouselLeft"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {list.map((item, index) => (
                          <div
                            key={item.id}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <section className="hero">
                              <div className="container-fluid">
                                <div className="text-center mt-3">
                                  <img
                                    src={`${baseURL}${item.galleryImages[0]?.path}`}
                                    alt={`Slide ${index + 1}`}
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </section>
                          </div>
                        ))}
                      </div>
                      <button className="carousel-control-prev" type="button">
                        <span
                          onClick={() => handleCarouselControl("prev")}
                          className="choose-mobile-btn"
                        >
                          <i className="fa-solid fa-chevron-left carousel-arrows-rightandleft-mobile"></i>
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button">
                        <span
                          onClick={() => handleCarouselControl("next")}
                          className="choose-mobile-btn2"
                        >
                          <i className="fa-solid fa-chevron-right carousel-arrows-rightandleft-mobile"></i>
                        </span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="why-choose-mobile-img">
                    <div
                      id="carouselRight"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {list.map((item, index) => (
                          <div
                            key={item.id}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <section className="hero">
                              <div className="container-fluid">
                                <div className="text-center mt-3">
                                  <img
                                    src={`${baseURL}${item.galleryImages[1]?.path}`}
                                    alt={`Slide ${index + 1}`}
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </section>
                          </div>
                        ))}
                      </div>
                      <button className="carousel-control-prev" type="button">
                        <span
                          onClick={() => handleCarouselControl("prev")}
                          className="choose-mobile-btn"
                        >
                          <i className="fa-solid fa-chevron-left carousel-arrows-rightandleft-mobile"></i>
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button">
                        <span
                          onClick={() => handleCarouselControl("next")}
                          className="choose-mobile-btn2"
                        >
                          <i className="fa-solid fa-chevron-right carousel-arrows-rightandleft-mobile"></i>
                        </span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-6">
                  <div className="mobileapp-frame-wrapper" id="carouselLeft">
                    <div className="carousel-inside-frame-mapp">
                      <Carousel
                        // interval={7000}
                        interval={isHovered ? null : 7000}
                        controls={false}
                        indicators={false}
                        // pause="hover"
                        pause={false}
                        // activeIndex={isHovered ? currentIndex : null}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        {list.map((item, index) => (
                          <Carousel.Item key={index}>
                            <img
                              className="d-block w-100"
                              src={`${baseURL}${item.galleryImages[0]?.path}`}
                              alt={item.title}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                      <button className="carousel-control-prev" type="button">
                        <span
                          onClick={() => handleCarouselControl("prev")}
                          className="choose-mobile-btn"
                        >
                          <i className="fa-solid fa-chevron-left carousel-arrows-rightandleft-mobile"></i>
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button">
                        <span
                          onClick={() => handleCarouselControl("next")}
                          className="choose-mobile-btn2"
                        >
                          <i className="fa-solid fa-chevron-right carousel-arrows-rightandleft-mobile"></i>
                        </span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    <img
                      src={MobileFrame}
                      alt="mobile frame"
                      className="mobileapp-frame-overlay"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mobileapp-frame-wrapper" id="carouselRight">
                    <div className="carousel-inside-frame-mapp">
                      <Carousel
                        // interval={7000}
                        interval={isHovered ? null : 7000}
                        controls={false}
                        indicators={false}
                        // pause="hover"
                        pause={false}
                        // activeIndex={isHovered ? currentIndex : null}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        {list.map((item, index) => (
                          <Carousel.Item key={index}>
                            <img
                              className="d-block w-100"
                              src={`${baseURL}${item.galleryImages[1]?.path}`}
                              alt={item.title}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                      <button className="carousel-control-prev" type="button">
                        <span
                          onClick={() => handleCarouselControl("prev")}
                          className="choose-mobile-btn"
                        >
                          <i className="fa-solid fa-chevron-left carousel-arrows-rightandleft-mobile"></i>
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button">
                        <span
                          onClick={() => handleCarouselControl("next")}
                          className="choose-mobile-btn2"
                        >
                          <i className="fa-solid fa-chevron-right carousel-arrows-rightandleft-mobile"></i>
                        </span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    <img
                      src={MobileFrame}
                      alt="mobile frame"
                      className="mobileapp-frame-overlay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_Choose;
