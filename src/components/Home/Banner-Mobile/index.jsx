import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import MobileFrame from "../../../assets/Images/banner-mobile/home-ba-new.png"; // frame
import "./index.css";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";

function MobileCarousel() {
  const [list, setList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const BannerLaptopList = async () => {
    try {
      const response = await LoginAPI.bannerMobileList();
      if (response.apiStatus.code === "200") {
        setList(response.responseData);
      }
    } catch {
    } finally {
    }
  };

  useEffect(() => {
    BannerLaptopList();
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="mobile-frame-wrapper">
      {/* Outside Title & Description (sync with active slide) */}
      {list.length > 0 && (
        <div className="outside-banner-text">
          <h1 className="banner-carusoul-container text-white mt-4">
            {list[activeIndex]?.title}
          </h1>
          <p
            className="text-light banner-mobile-new-desc"
            dangerouslySetInnerHTML={{
              __html: list[activeIndex]?.description,
            }}
          ></p>
        </div>
      )}

      <div className="carousel-inside-frame">
        <Carousel
          interval={7000}
          controls={false}
          indicators={false}
          pause="hover"
          activeIndex={activeIndex}
          onSelect={handleSelect}    
        >
          {list.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`${baseURL}${item.path}`}
                alt={item.title}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {list.length > 1 && (
          <>
            <button
              className="carousel-control-prev carousel-control-prev11"
              type="button"
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? list.length - 1 : prev - 1
                )
              }
            >
              <i className="fa-solid fa-chevron-left carousel-arrows-rightandleft"></i>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next carousel-control-next11"
              type="button"
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === list.length - 1 ? 0 : prev + 1
                )
              }
            >
              <i className="fa-solid fa-chevron-right carousel-arrows-rightandleft"></i>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>

      {/* frame overlay */}
      <img
        src={MobileFrame}
        alt="mobile frame"
        className="mobile-frame-overlay"
      />
    </div>
  );
}

export default MobileCarousel;
