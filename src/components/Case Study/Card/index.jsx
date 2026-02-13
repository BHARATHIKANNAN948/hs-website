import React, { useEffect, useState } from "react";
import "./index.css";
import Case_Image_01 from "../../../assets/Images/case-1.jpg";
import { Link } from "react-router-dom";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";
import No_image from "../../../assets/Images/no-image.jpeg";
import Loading from "../../Loading";
import No_Data_Found from "../../../assets/Images/no-data-founnd.jpg";

function CaseStudy_Card() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const CaseStudyList = async () => {
    setLoading(true);
    try {
      const responseData = await LoginAPI.casestudyList();

      if (responseData.apiStatus.code === "200") {
        setList(responseData.responseData.caseStudyList);
      } else {
        // alert.error(responseData.apiStatus.message);
      }
    } catch {
      // toast.error("An error occurred while fetching the list.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    CaseStudyList();
  }, []);
  return (
    <>
      <div class="case ptb-100">
        <div className="container">
          <div
            class="default-section-title default-section-title-middle"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h6>Case Study</h6>
            <h3>Our Recent Case Study</h3>
          </div>
          <div className="row justify-content-center">
            {loading ? (
              <div className="p-5">
                <Loading />
              </div>
            ) : list.length === 0 ? (
              <div className="text-center">
                <img src={No_Data_Found} alt="" className="no-data-found-img" />
              </div>
            ) : (
              list.map((value, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4"
                  key={index}
                  data-aos="zoom-in-right"
                >
                  <Link to={`/case/details/${value.id}`}>
                    <div
                      className="case-study-new-custom-card"
                      style={{
                        backgroundImage: `url(${baseURL}${value.imgData.path}${value.imgData.altered_file_name})`,
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
                        <Link to={`/case/details/${value.id}`}>
                          <i className="fa fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
        {/* <div class="container">
          <div
            class="default-section-title default-section-title-middle"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h6>Case Study</h6>
            <h3>Our Recent Case Study</h3>
          </div>
          <div class="section-header mb-5">
            <div class="row justify-content-center">
              {loading ? (
                <div className="p-5">
                  <Loading />
                </div>
              ) : list.length === 0 ? (
                <div className="text-center">
                  <img
                    src={No_Data_Found}
                    alt=""
                    className="no-data-found-img"
                  />
                </div>
              ) : (
                list.map((value, index) => (
                  <div
                    class="col-lg-4 col-md-6 col-sm-6 col-12"
                    key={index}
                    data-aos="zoom-in-right"
                  >
                    <Link to={`/case/details/${value.id}`}>
                      <div class="case-card border">
                        <img
                          src={
                            value.imgData?.path
                              ? `${baseURL}${value.imgData.path}${value.imgData.altered_file_name}`
                              : No_image
                          }
                          alt="image"
                          className="case-study-image"
                        />

                        <div class="case-study-text">
                          <div className="case-study-icon-con d-flex flex-row align-items-center">
                            <Link to={`/case/details/${value.id}`}>
                              {" "}
                              <i class="fa-regular fa-eye"></i>{" "}
                            </Link>
                          </div>
                          <div className="case-study-text-place">
                            <div>
                              <p>{value.category_name} </p>
                              <h4>{value.title}</h4>
                            </div>
                            <div className="calender-case-study-ad">
                              <span>
                                <i className="fa-solid fa-calendar-days"></i>{" "}
                                {value.release_date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default CaseStudy_Card;
