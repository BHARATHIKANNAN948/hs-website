import React, { useEffect, useState } from "react";
import "./index.css";
import Image from '../../../assets/Images/about-mission-1.jpeg'
import LoginAPI from "../../../api/adminlogin";
import Loading from "../../Loading";
import No_Data_Found from "../../../assets/Images/no-data-founnd.jpg";
import { baseURL } from "../../../api/api";
import No_image from "../../../assets/Images/no-image.jpeg";
import { Link } from "react-router-dom";

function Products_Hermon() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [categoryName, setCategoryName] = useState("");

  // List Api,

  const ProductList = async () => {
    setLoading(true);

    try {
      const response = await LoginAPI.productList();

      if (response.apiStatus.code === "200") {
        setList(response.responseData.productList);
        // setCategoryName(response.responseData.CategoryList.category_name);
      } else {
        // toast.error("Data not binding...");
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    ProductList();
  }, []);

    // truncate

  const [expandedItems, setExpandedItems] = useState({});
  const truncateText = (text, wordLimit, expandedLimit, id, key) => {
    if (!text) return "";
    const words = text.split(" ");

    if (words.length <= wordLimit || expandedItems[`${id}-${key}`]) {
      if (words.length > wordLimit && expandedItems[`${id}-${key}`]) {
        return (
          <>
            {words.slice(0, wordLimit).join(" ")}
            <br />
            {words.slice(wordLimit, expandedLimit).join(" ")}
          </>
        );
      }
      return text;
    }

    return words.slice(0, wordLimit).join(" ") + "...";
  };

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
      <div
        className="default-section-title default-section-title-middle"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <h6>Products</h6>
        <h3>Our Recent Products</h3>
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
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-5" data-aos="zoom-in-left">
              <div className="product-hs-card">
                <div className="product-hs-card-header">
                  <img
                    src={value.imgData ? `${baseURL}${value.imgData.path}` : No_image}
                    alt="Product"
                    className="product-hs-card-image"
                  />
                </div>


                <div className="product-hs-card-body text-start">
                  <h4 className="teams-card-title">
                    {value.title}
                  </h4>
                   {truncateText(
                        stripHtmlTags(value.description),
                        13,
                        12,
                        value.id,
                        "description"
                      )}
                </div>

                <div className="product-hs-card-footer">
                  <Link
                   to={`/product/details/${value.id}`}
                  >
                    <button className="teams-card-btn-route"> Explore <i class="fas fa-compass"></i></button>
                  </Link>
                </div>
              </div>
            </div>
          )))}
      </div>
    </>
  );
}

export default Products_Hermon;
