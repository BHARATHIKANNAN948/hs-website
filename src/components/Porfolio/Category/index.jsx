import React, { useEffect, useState } from "react";
import No_image from "../../../assets/Images/no-image.jpeg";
import No_Data_Found from "../../../assets/Images/no-data-founnd.jpg";
import "./index.css";
import { Link } from "react-router-dom";
import LoginAPI from "../../../api/adminlogin";
import { toast } from "react-toastify";
import Loading from "../../Loading";
import { baseURL } from "../../../api/api";

function Portfolio_Category_Component() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  // List Api,

  const CategoryList = async () => {
    setLoading(true);

    try {
      const response = await LoginAPI.portfolioCategoryList();

      if (response.apiStatus.code === "200") {
        setList(response.responseData.CategoryList);
        setCategoryName(response.responseData.CategoryList.category_name);
      } else {
        // toast.error("Data not binding...");
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    CategoryList();
  }, []);

  return (
    <>
      <div class="team">
        <div
          class="default-section-title default-section-title-middle"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h6>Our Portfolio</h6>
          <h3>Our recent Portfolio</h3>
        </div>
        <div class="section-content">
          <div class="row">
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
                  class="col-lg-4 col-md-6 col-sm-6 col-12 mb-5"
                  key={index}
                  data-aos="flip-up"
                >
                  <div class="team-card">
                     <Link
                        to={"/portfolio/category/list"}
                        state={{ category_name: value.category_name }}
                      >
                    <div class="team-card-img">
                      <img
                        src={value.path ? `${baseURL}${value.path}` : No_image}
                        alt="image"
                        className="border"
                      />
                    </div>
                    </Link>
                    <div class="team-card-text">
                      <h4 className="teams-card-title">
                        {value.category_name}
                      </h4>
                      <p dangerouslySetInnerHTML={{
                        __html: value.category_description,
                      }}></p>
                      <Link
                        to={"/portfolio/category/list"}
                        state={{ category_name: value.category_name }}
                      >
                        <button className="teams-card-btn-route">
                           Explore <i class="fas fa-compass"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio_Category_Component;
