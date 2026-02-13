import React, { useEffect, useState } from "react";
import "./index.css";
import CaseStudy_Image_01 from "../../../assets/Images/Home-CaseStudy-card-1.jpg";
import CaseStudy_Image_02 from "../../../assets/Images/Home-CaseStudy-card-2.jpg";
import CaseStudy_Image_03 from "../../../assets/Images/Home-CaseStudy-card-3.jpg";
import { Link } from "react-router-dom";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";

function Home_CaseStudy() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const HomeCaseStudy = async () => {
    setLoading(true);
    try {
      const response = await LoginAPI.homeCaseStudyList();

      if (response.apiStatus.code === "200") {
        setList(response.responseData.caseStudyList);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    HomeCaseStudy();
  }, []);

  return (
    <>
      <div class="blog mb-5 mt-5">
        <div class="container">
          <div
            class="default-section-title default-section-title-middle"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h6 className="home-service-heading">OUR CASE STUDY</h6>
            <h3 className="home-service-content">
              Our Popular Case Study Post
            </h3>
          </div>
          <div class="section-content">
            <div class="row justify-content-center">
              {list.map((value, index) => (
                <div
                  class="col-lg-4 col-md-6 col-sm-12 col-12"
                  key={index}
                  data-aos="zoom-in"
                >
                  <div class="blog-card">
                    <div class="blog-img">
                      <Link to={"/case-study"}>
                        <img
                          src={`${baseURL}${value.imgData.path}${value.imgData.altered_file_name}`}
                          alt="image"
                          className="case-study-img"
                        />
                      </Link>
                    </div>
                    <div class="blog-text-area">
                      <span className="case-study-tech">
                        {value.category_name}
                      </span>

                      <div className="case-study-home-content-date">
                        <h4 className="home-service-card-heading">
                          {value.title}
                        </h4>
                        <p className="pt-3 home-casestudy-date-field">
                          <i class="far fa-calendar-alt case-study-home-icons"></i>{" "}
                          {value.created_time}
                        </p>
                      </div>

                      <div className="text-end">
                        <button class="default-home-button">
                          <Link
                            to={`/case/details/${value.id}`}
                            className="text-decoration-none text-light"
                          >
                            Read More
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button class="default-home-button" style={{padding:"5px 20px"}}>
              <Link
                to={'/case-study'}
                className="text-decoration-none text-light"
              >
                View More...
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_CaseStudy;
