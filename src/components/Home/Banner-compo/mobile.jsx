import React, { useEffect, useState } from "react";
import Choose_Image_01 from "../../../assets/Images/banner-mobile/home-banner-mobile1.png";
import Choose_Image_02 from "../../../assets/Images/banner-mobile/home-banner-img2.png";
import Choose_Image_03 from "../../../assets/Images/banner-mobile/hame-banner-mobile3.png";
import Choose_Image_04 from "../../../assets/Images/banner-mobile/home-banner-mobile4.png";
import Choose_Image_05 from "../../../assets/Images/banner-mobile/home-banner-mobile5.png";
import "./mobile.css";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";

function Banner_Mobile() {
  const [list, setList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateClass, setAnimateClass] = useState("slide-in");

  useEffect(() => {
    const carousel = document.getElementById("carouselPhone");

    const onSlide = (event) => {
      setAnimateClass("slide-out");

      setTimeout(() => {
        setCurrentIndex(event.to);
        setAnimateClass("slide-in");
      }, 50);
    };

    carousel?.addEventListener("slide.bs.carousel", onSlide);
    return () => {
      carousel?.removeEventListener("slide.bs.carousel", onSlide);
    };
  }, []);

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const carouselElement = document.querySelector("#carouselPhone");
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

  const [deviceClass, setDeviceClass] = useState("");

  useEffect(() => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    setDeviceClass("android-device");
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    setDeviceClass("iphone-device");
  }
}, []);


  return (
    <>
      <div className="banner-mobile-size">
        <div className="carousel slide phone-size-banner pt-4" id="carouselText">
          <div className="carousel-inner ">
            <div
              className={`text-center mt-3 pt-3 carousel-title-wrapper ${animateClass}`}
            >
              <section className="hero">
                <div className="container-fluid">
                  <div className="text-center mt-3">
                    <h1 className="banner-carusoul-container text-white">
                      {list[currentIndex]?.title}
                    </h1>
                    <p
                      className="text-light banner-lap-desc"
                      dangerouslySetInnerHTML={{
                        __html: list[currentIndex]?.description,
                      }}
                    ></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={`why-choose-phone-img m-0 p-0 ${deviceClass}`} >
          <div className="carousel-container-wrapper">
            <div
              id="carouselPhone"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="5000"
            >
              <div className="carousel-inner">
                {list.map((item, index) => (
                  <div
                    key={item.id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <section className="hero">
                      <div className="container-fluid">
                        <div className="text-center mt-3">
                          <img
                            src={`${baseURL}${item.path}`}
                            alt={item.title}
                            className="img-fluid"
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
                    data-bs-target="#carouselPhone"
                    data-bs-slide="prev"
                  >
                    <i class="fa-solid fa-chevron-left carousel-arrows-rightandleft"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselPhone"
                    data-bs-slide="next"
                  >
                    <i class="fa-solid fa-chevron-right carousel-arrows-rightandleft"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner_Mobile;
