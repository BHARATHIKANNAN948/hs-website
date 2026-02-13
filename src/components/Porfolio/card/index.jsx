import React, { useEffect, useState } from "react";
import "./index.css";
import Case_Image_01 from "../../../assets/Images/case-1.jpg";
import Case_Image_02 from "../../../assets/Images/case-2.jpg";
import Case_Image_03 from "../../../assets/Images/case-3.jpg";
import Case_Image_04 from "../../../assets/Images/case-4.jpg";
import Case_Image_05 from "../../../assets/Images/case-5.jpg";
import Case_Image_06 from "../../../assets/Images/case-6.jpg";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";
import No_image from "../../../assets/Images/no-image.jpeg";
import { Link } from "react-router-dom";

function Portfolio_card() {
  const [list, setList] = useState([]);

  const PortfolioList = async () => {
    try {
      const responseData = await LoginAPI.portfolioList();

      if (responseData.apiStatus.code === "200") {
        setList(responseData.responseData.PortfolioList);
      } else {
        // alert.error(responseData.apiStatus.message);
      }
    } catch {
      // alert.error("An error occurred while fetching the list.");
    }
  };
  useEffect(() => {
    PortfolioList();
  }, []);
  return (
    <div className="case ptb-100">
      <div className="card-container">
        <div className="default-section-title default-section-title-middle">
          <h6>Portfolio</h6>
          <h3>Our Recent Portfolio</h3>
        </div>

        <div className="section-header">
          <div className="grid-container">
            <div className="row">
              {list.map((value, index) => (
                <div className="col-md-4" key={index}>
                  <Link
                    to={`/portfolio/Details/${value.id}`}
                    className="portfolio-link-get"
                  >
                    <div className="case-card case-card-portfolio">
                      <div className="case-card-img">
                        <img
                          src={
                            value.imgData?.path
                              ? `${baseURL}${value.imgData.path}${value.imgData.altered_file_name}`
                              : No_image
                          }
                          alt="image"
                          className="case-study-image"
                        />
                        <div className="overlay">
                          <i className="fas fa-plus"></i>
                        </div>
                      </div>
                      <div className="case-study-text">
                        <p>{value.category_name}</p>
                        <h4>{value.title}</h4>
                      </div>
                      <div className="case-study-more">
                        <p>
                          View Details{" "}
                          <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              {/* <div className="col-md-4">

            <div className="case-card case-card-portfolio">
              <div className="case-card-img">
                <img src={Case_Image_02} alt="Moving Walls" />
                <div className="overlay">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="case-study-text">
                <p>Web Application</p>
                <h4>Moving Walls</h4>
              </div>
              <div className="case-study-more">
                <p>View Details <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
              </div>
            </div>
            </div>
            <div className="col-md-4">

            <div className="case-card case-card-portfolio">
              <div className="case-card-img">
                <img src={Case_Image_03} alt="Araciyal" />
                <div className="overlay">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="case-study-text">
                <p>Web Application</p>
                <h4>Araciyal</h4>
              </div>
              <div className="case-study-more">
                <p>View Details <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
              </div>
            </div>
            </div>
            <div className="col-md-4">

            <div className="case-card case-card-portfolio">
              <div className="case-card-img">
                <img src={Case_Image_04} alt="Edition Award Voting App" />
                <div className="overlay">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="case-study-text">
                <p>Mobile App</p>
                <h4>Edition Award Voting App</h4>
              </div>
              <div className="case-study-more">
                <p>View Details <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
              </div>
            </div>
            </div>
            <div className="col-md-4">

            <div className="case-card case-card-portfolio">
              <div className="case-card-img">
                <img src={Case_Image_05} alt="Provet" />
                <div className="overlay">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="case-study-text">
                <p>Mobile App</p>
                <h4>Provet</h4>
              </div>
              <div className="case-study-more">
                <p>View Details <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
              </div>
            </div>
            </div>
            <div className="col-md-4">

            <div className="case-card case-card-portfolio">
              <div className="case-card-img">
                <img src={Case_Image_06} alt="Taxi App" />
                <div className="overlay">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div className="case-study-text">
                <p>Mobile App</p>
                <h4>Taxi App</h4>
              </div>
              <div className="case-study-more">
                <p>View Details <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
              </div>
            </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio_card;
