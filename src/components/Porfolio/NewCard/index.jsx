import "./index.css";
import DigitalMarketing from "../../../assets/Images/service-images/degitalmarketing.jpg";
import { useEffect, useRef, useState } from "react";
import LoginAPI from "../../../api/adminlogin";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../Loading";
import No_image from "../../../assets/Images/no-image.jpeg";
import { baseURL } from "../../../api/api";
import No_Data_Found from "../../../assets/Images/no-data-founnd.jpg";
import caseImage from "../../../assets/Images/case-7.jpg";
import Popup from "./pop";

function New_Portfolio_Card() {
  const location = useLocation();
  const categoryName = location.state?.category_name;
  const [loading, setLoading] = useState(false);
  const [portfoliolist, setPortfolioList] = useState([]);
  // const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  // new state for popup slider
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupImages, setPopupImages] = useState([]); // array of image URLs for slider
  const [popupStartIndex, setPopupStartIndex] = useState(0); // index to open at

  const CategoryGet = async () => {
    setLoading(true);

    try {
      const responseGet = await LoginAPI.portfolioCategoryGet({
        pageIndex: 0,
        dataLength: 12,
        category_name: categoryName,
      });

      if (responseGet.apiStatus.code === "200") {
        setPortfolioList(responseGet.responseData.PortfolioData);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    CategoryGet();
  }, []);

  // truncate,
  const [expandedItems, setExpandedItems] = useState({});
  const truncateText = (text, charLimit, expandedCharLimit, id, key) => {
    if (!text) return "";

    const isExpanded = expandedItems[`${id}-${key}`];

    if (text.length <= charLimit || isExpanded) {
      return (
        <>
          {text.slice(0, expandedCharLimit)}
          {text.length > expandedCharLimit ? "..." : ""}
        </>
      );
    }

    return text.slice(0, charLimit) + "...";
  };
  const toggleExpand = (id, key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [`${id}-${key}`]: !prev[`${id}-${key}`],
    }));
  };

  // portfolio get,

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const PortfolioGet = async (id, index) => {
    // setLoading(true);
    try {
      const responseValue = await LoginAPI.portfolioGet(id);

      if (responseValue.apiStatus.code === "200") {
        const data = responseValue.responseData;

        setTitle(data.title);
        setDescription(data.description);
        setImage(data.path);
        setDate(data.release_date);
        setSelectedIndex(index);

        // Build popupImages from current portfoliolist (use baseURL + path)
        const imgs = portfoliolist.map((item) =>
          item.path ? `${baseURL}${item.path}` : No_image
        );
        setPopupImages(imgs);

        // Set slider start index to the clicked card index
        setPopupStartIndex(index);

        // Open the popup slider
        setPopupOpen(true);
      }
    } catch {
    } finally {
      // setLoading(false);
    }
  };
  function stripHtmlTags(str) {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  }

  // const handleNext = () => {
  //   if (selectedIndex < portfoliolist.length - 1) {
  //     const nextIndex = selectedIndex + 1;
  //     PortfolioGet(portfoliolist[nextIndex].id, nextIndex);
  //   }
  // };

  // const handlePrev = () => {
  //   if (selectedIndex > 0) {
  //     const prevIndex = selectedIndex - 1;
  //     PortfolioGet(portfoliolist[prevIndex].id, prevIndex);
  //   }
  // };

  //
  const images = [
    "https://picsum.photos/800/400?random=1",
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
    "https://picsum.photos/800/400?random=4",
    "https://picsum.photos/800/400?random=5",
    "https://picsum.photos/800/400?random=6",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navRefs = useRef([]);

  // ✅ Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // ✅ Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Home") setCurrentIndex(0);
      else if (event.key === "End") setCurrentIndex(images.length - 1);
      else if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + popupImages.length) % popupImages.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % popupImages.length);
  };

  const handleNavClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (navRefs.current[currentIndex]) {
      navRefs.current[currentIndex].focus();
    }
  }, [currentIndex]);
  useEffect(() => {
    if (popupOpen) {
      setCurrentIndex(popupStartIndex);
    }
  }, [popupOpen, popupStartIndex]);

  return (
    <>
      <div className="container">
        <div
          class="default-section-title default-section-title-middle"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {portfoliolist.length > 0 && (
            <>
              <h6 className="list-port-sub-heading">
                {portfoliolist[0].category_name}
              </h6>
              {/* <h3>Our recent {portfoliolist[0].category_name}</h3> */}
              <h3>Latest {portfoliolist[0].category_name} Insights</h3>
              <Link to={"/our-portfolio"}>
                <button className="portfolio-list-back-btn">
                  {/* <i class="fas fa-angle-left port-back-icon"></i> Back */}
                  <i class="fas fa-arrow-left"></i> Back
                </button>
              </Link>
            </>
          )}
        </div>
        <div className="row mt-4 justify-content-center">
          {loading ? (
            <div className="p-5">
              <Loading />
            </div>
          ) : portfoliolist.length === 0 ? (
            <div className="text-center">
              <img src={No_Data_Found} alt="" className="no-data-found-img" />
              <div>
                <Link to={"/our-portfolio"}>
                  <button className="portfolio-list-back-btn">
                    {/* <i class="fas fa-angle-left port-back-icon"></i> Back */}
                    <i class="fas fa-arrow-left"></i> Back
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            portfoliolist.map((value, index) => (
              <>
                {/* <div className="col-md-4 mb-5" key={index} data-aos="fade-down">
                  <div class="card portfolio-custom-card">
                    <div class="row g-0 d-flex flex-md-row flex-column-reverse">
                      <div class="col-md-7 text-start p-4 d-flex flex-column justify-content-center">
                        <h3 class="portfolio-list-card-title">{value.title}</h3>
                        <p class="portfolio-list-card-text">
                          {truncateText(
                            stripHtmlTags(value.description),
                            70,
                            100,
                            value.id,
                            "description"
                          )}
                          {stripHtmlTags(value.description).split(" ").length >
                            5 && (
                            <span
                              className="text-primary mt-1"
                              style={{
                                cursor: "pointer",
                                display: "block",
                              }}
                              onClick={() =>
                                toggleExpand(value.id, "description")
                              }
                            >
                              {expandedItems[`${value.id}-description`]
                          ? "Show less"
                          : "Show more"}
                            </span>
                          )}
                        </p>
                        <button
                          className="portfolio-list-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#listview"
                          onClick={() => {
                            setSelectedPortfolio(value);
                          }}
                        >
                          Read More
                        </button>
                      </div>

                      <div class="col-md-5">
                        <img
                          src={
                            value.path ? `${baseURL}${value.path}` : No_image
                          }
                          class="portfolio-card-img"
                          alt="Responsive Image"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div
                  class="col-md-6 col-lg-4 col-xl-4 mb-4"
                  key={index}
                  data-aos="fade-up"
                >
                  {/* <div
                    className="category-port-list-profile-card border"
                    style={{ backgroundImage: `url(${baseURL}${value.path})` }}
                  >
                    <div className="category-port-list-profile-overlay text-start">
                      <div className="w-100 d-flex justify-content-center align-items-center overlay-eye-wrapper">
                        <div
                          className="category-port-list-profile-icons pt-5"
                          data-bs-toggle="modal"
                          data-bs-target="#listview"
                          onClick={() => {
                            PortfolioGet(value.id, index);
                          }}
                        >
                          <i className="fa-solid fa-eye"></i>
                        </div>
                      </div>

                      <div className="w-100 overlay-bottom-text">
                        <div>
                          <span>
                            <strong>{value.category_name}</strong>
                          </span>
                          <h3 className="category-port-list-card-title">
                            {value.title}
                          </h3>
                        </div>
                        <div className="pt-4">
                          <span>
                            <i className="fa-solid fa-calendar-days"></i>{" "}
                            {value.release_date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    // data-bs-toggle="modal"
                    // data-bs-target="#listview"
                    // onClick={() => {
                    //   PortfolioGet(value.id, index);
                    // }}
                    onClick={() => {
                      PortfolioGet(value.id, index);
                    }}
                  >
                    <div
                      className="case-study-new-custom-card"
                      style={{
                        backgroundImage: `url(${baseURL}${value.path})`,
                      }}
                    >
                      <div className="case-study-new-card-overlay">
                        <div>
                          <p className="m-0">{value.category_name} </p>
                          <h4>{value.title}</h4>
                        </div>
                        <div>
                          <p className="pt-3">
                            {" "}
                            <i className="fa-solid fa-calendar-days"></i>{" "}
                            {value.release_date}
                          </p>
                        </div>
                      </div>
                      <div className="case-study-new-hover-overlay">
                        <div
                          onClick={() => {
                            PortfolioGet(value.id, index);
                          }}
                        >
                          <i className="fa fa-eye"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
        {/* <div
          class="modal fade"
          id="listview"
          tabindex="-1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-0">
                <h1
                  class="modal-title service-popup-title fs-5"
                  id="exampleModalLabel"
                >
                  {title}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-start">
                {portfoliolist.length > 1 && (
                  <>
                    <button
                      className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
                      style={{ zIndex: 1050, marginLeft: "-100px" }}
                      onClick={handlePrev}
                      disabled={selectedIndex === 0}
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                      className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
                      style={{ zIndex: 1050, marginRight: "-100px" }}
                      onClick={handleNext}
                      disabled={selectedIndex === portfoliolist.length - 1}
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </>
                )}
                <div>
                  <span className="case-get-caleder">
                    <i className="fa-solid fa-calendar-days case-get-caleder-icon"></i>{" "}
                    {date}
                  </span>
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                  className="mt-2"
                >
                </p>
                <div className="card border rounded-0">
                  <img
                    src={image ? `${baseURL}${image}` : No_image}
                    alt="Responsive Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <Popup /> */}

        {popupOpen && (
          <div
            className="portfolio-popup-overlay"
            role="dialog"
            aria-modal="true"
          >
            <div className="portfolio-popup-inner">
              <button
                className="popup-close-btn"
                onClick={() => setPopupOpen(false)}
                aria-label="Close slider"
              >
                &times;
              </button>

              <div className="portfolio-pop-image-slider">
                <section className="portfolio-pop-slider__content">
                  <button
                    type="button"
                    className="portfolio-pop-slider-control--button prev-button"
                    onClick={handlePrev}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="portfolio-pop-icon arrow-left-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                      />
                    </svg>
                  </button>

                  <main className="portfolio-pop-image-display">
                    <img
                      src={popupImages[currentIndex]}
                      alt={`Slide ${currentIndex + 1}`}
                      className="main-image"
                    />
                  </main>

                  <button
                    type="button"
                    className="portfolio-pop-slider-control--button next-button"
                    onClick={handleNext}
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="portfolio-pop-icon arrow-right-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                      />
                    </svg>
                  </button>
                </section>

                <div className="portfolio-pop-details-section text-start">
                  {portfoliolist.length > 0 && (
                    <>
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="popup-image-title">
                        {portfoliolist[currentIndex]?.title || "No Title"}
                      </h3>
                      <p className="popup-image-date">
                        <i className="fa-solid fa-calendar-days"></i>{" "}
                        {portfoliolist[currentIndex]?.release_date}
                      </p>
                      </div>
                      <p
                        className="popup-image-description"
                        dangerouslySetInnerHTML={{
                          __html:
                            portfoliolist[currentIndex]?.description ||
                            "No description available.",
                        }}
                      ></p>
                      
                    </>
                  )}
                </div>
              </div>
            </div>

            <nav className="portfolio-pop-slider-navigation">
              {popupImages.map((src, index) => (
                <button
                  key={index}
                  className={`portfolio-pop-nav-button ${
                    index === currentIndex ? "active" : ""
                  }`}
                  aria-selected={index === currentIndex}
                  onClick={() => handleNavClick(index)}
                  ref={(el) => (navRefs.current[index] = el)}
                >
                  <img
                    className="portfolio-pop-thumbnail"
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}

export default New_Portfolio_Card;
