import React, { useEffect, useState } from "react";
import "./index.css";
import No_Data_Found from "../../../assets/Images/no-data-founnd.jpg";
import { Link } from "react-router-dom";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";
import Loading from "../../Loading";
function Service_Card() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setGetId] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // const [popupLoading, setPopupLoading] = useState(false);

  const ServiceList = async () => {
    setLoading(true);
    try {
      const response = await LoginAPI.serviceList();

      if (response.apiStatus.code === "200") {
        setList(response.responseData.PortfolioList);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    ServiceList();
  }, []);

  // const ServiceGet = async (serviceId) => {
  //   // setPopupLoading(true);
  //   setTitle("");
  //   setDescription("");
  //   setImage("");

  //   try {
  //     const response = await LoginAPI.serviceGet(serviceId);

  //     if (response.apiStatus.code === "200") {
  //       const data = response.responseData;
  //       const FullImagePath = `${baseURL}${data.path}`;

  //       setGetId(data.id);
  //       setTitle(data.title);
  //       setDescription(data.description);
  //       setImage(FullImagePath);
  //       setShowPopup(true);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching service:", error);
  //   } finally {
  //     // setPopupLoading(false);
  //   }
  // };

  const [expandedvalues, setExpandedItems] = useState({});
  function truncateText(text, maxLetters, id, key) {
    if (!text) return "";

    const plainText = stripHtmlTags(text).replace(/\s/g, ""); // remove spaces
    const originalText = stripHtmlTags(text); // keep original with spacing for display

    // If expanded, show full text
    if (expandedvalues[`${id}-${key}`]) {
      return originalText;
    }

    let count = 0;
    let result = "";

    for (let i = 0; i < originalText.length; i++) {
      if (originalText[i] !== " ") {
        count++;
      }

      result += originalText[i];

      if (count >= maxLetters) break;
    }

    return result + "...";
  }

  const toggleExpand = (id, key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [`${id}-${key}`]: !prev[`${id}-${key}`],
    }));
  };

  function stripHtmlTags(str) {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  }

  return (
    <>
      <div>
        {loading ? (
          <div className="p-5 mt-5 mb-5">
            <Loading />
          </div>
        ) : list.length === 0 ? (
          <div className="text-center">
            <img src={No_Data_Found} alt="" className="no-data-found-img" />
          </div>
        ) : (
          <div className="row">
            <div class="default-section-title default-section-title-middle">
              <h6>Services</h6>
              <h3>Powering Business Growth with Smart, Scalable Services.</h3>
            </div>
            {list.map((value, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <article id="stage" data-theme="light" data-aos="flip-left">
                  <div class="service-updated-card collapsed">
                    <div class="service-updated-card-bg"></div>
                    <div class="service-updated-card-info">
                      <img src={`${baseURL}${value.path}`} width="600" alt="" 
                       onClick={() => {
                          setGetId(value.id);
                          setTitle(value.title);
                          setDescription(value.description);
                          setImage(`${baseURL}${value.path}`);
                          setShowPopup(true);
                        }}
                         />
                      <div class="person">
                        <h3 className="serive-card-next-update-title">
                          {value.title}
                        </h3>
                        <span className="serive-card-next-update-category">
                          {truncateText(
                            value.description,
                            125,
                            value.id,
                            "description"
                          )}

                          {stripHtmlTags(value.description).replace(/\s/g, "")
                            .length > 16 && (
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
                              {/* {expandedvalues[`${value.id}-description`]
                                ? "Show less"
                                : "Show more"} */}
                            </span>
                          )}
                        </span>
                      </div>
                      <div
                        class="service-updated-card-bottom"
                        // data-bs-toggle="modal"
                        // data-bs-target="#ServicePopup"
                        // onClick={() => ServiceGet(value.id)}
                        onClick={() => {
                          setGetId(value.id);
                          setTitle(value.title);
                          setDescription(value.description);
                          setImage(`${baseURL}${value.path}`);
                          setShowPopup(true);
                        }}
                      >
                        <button className="card-new-btn-read">View</button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
            {/* <div
              className="modal fade"
              id="ServicePopup"
              tabIndex="-1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="ServicePopupLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                  <div className="modal-header border-0">
                    <h1
                      className="modal-title"
                      id="ServicePopupLabel"
                    >
                     
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-start">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={image}
                          alt="Service"
                          className="service-popup-img"
                        />
                      </div>
                      <div className="col-md-6 pt-5">
                        <h3 className="service-popup-title fs-5"> {title}</h3>
                        <p
                          className="service-popup-paragraph"
                          dangerouslySetInnerHTML={{
                            __html: description,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {showPopup && (
              <div className="popup-overlay">
                <div className="popup-box">
                  <div
                    className="popup-close"
                    onClick={() => setShowPopup(false)}
                  >
                    ×
                  </div>
                  <div className="popup-img">
                    <img src={image} alt="Service" />
                  </div>
                  <div className="popup-content text-start">
                    <h3 className="service-popup-title fs-5 mt-4"> {title}</h3>
                    <p
                      className="service-popup-paragraph"
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Service_Card;
