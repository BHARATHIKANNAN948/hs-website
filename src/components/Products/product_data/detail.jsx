import React, { useEffect, useState } from "react";
// import Title from "../../../shared/Title";
import No_Image from "../../../assets/Images/no-image.jpeg";
import full from "../../../assets/Images/about/full-stack-web-development.png";
import frondend from "../../../assets/Images/about/frond.png";
import Backend from "../../../assets/Images/about/back.png";
import Database from "../../../assets/Images/about//database.png";
import Html from "../../../assets/Images/platform/html.png";
import Css from "../../../assets/Images/platform/css.png";
import Js from "../../../assets/Images/platform/js.png";
import Bootstrap from "../../../assets/Images/platform/boot.png";
import Reactjs from "../../../assets/Images/platform/react.png";
import Php from "../../../assets/Images/platform/php.png";
import Sql from "../../../assets/Images/platform/mysql.png";
import "./index.css";
import { baseURL } from "../../../api/api";
import LoginAPI from "../../../api/adminlogin";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import Loading from "../../Loading";

function Product_Details_Component() {
  const { id } = useParams();
  const [setid, setGetId] = useState();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [platformname, setPlatform] = useState("");
  const [categoryname, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [overview, setOverview] = useState("");
  const [challenges, setChallenges] = useState("");
  const [solutions, setSolutions] = useState("");
  const [image, setImage] = useState("");
  const [multipleimg, setMulImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [list, setMediaList] = useState([]);
  const [platformimg, setPlatformImage] = useState([]);
  const [platformnamenew, setPlatformNamenew] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const recordsPerPage = 20;

  const ImageGetApi = async (page) => {
    setLoading(true);
    try {
      const response = await LoginAPI.productGet({
        id: id,
        pageIndex: page - 1,
        dataLength: recordsPerPage,
      });

      if (response.apiStatus.code === "200") {
        const data = response.responseData.productview;
        const GalleryData = response.responseData.productview.gallery_image;
        const platformdata = response.responseData.productview.platform_details;

        const FullImagePath = `${baseURL}${data.path}`;
        const galleryImagePaths = GalleryData.map(
          (img) => `${baseURL}${img.path}`
        );
        const platformImg = platformdata.map(
          (img) => `${baseURL}${img.image_path}`
        );
        setGetId(data.id);
        setTitle(data.title);
        setDate(data.release_date);
        setCategory(data.category_name);
        setPlatform(data.platform_name);
        setDescription(data.description);
        setOverview(data.project_overview);
        setChallenges(data.challenges);
        setSolutions(data.solutions);
        setPlatformNamenew(data.platform_details.technology_name);
        setImage(FullImagePath);
        setMulImage(galleryImagePaths);
        setPlatformImage(platformImg);

        setMediaList(response.responseData.listData || []);
        const totalRecords = response.responseData.totalRecordCount;
        setTotalRecords(totalRecords);
        if (galleryImagePaths.length > 0) {
          setImage(galleryImagePaths[0]);
          setSelectedIndex(0); // 🔑 Reset to first image
        } else {
          setImage(FullImagePath);
          setSelectedIndex(-1); // no selection
        }
        setMulImage(galleryImagePaths);
      } else {
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    ImageGetApi(currentPage);
  }, [currentPage]);
  useEffect(() => {
    if (id) {
      setCurrentPage(1);
      ImageGetApi(currentPage);
    }
  }, [id]);

  // Pagination Method
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const renderPaginationItems = () => {
    let items = [];
    const maxPageNumbersToShow = 3;
    const halfRange = Math.floor(maxPageNumbersToShow / 2);

    let startPage, endPage;
    if (totalPages <= maxPageNumbersToShow) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= halfRange) {
      startPage = 1;
      endPage = maxPageNumbersToShow;
    } else if (currentPage + halfRange >= totalPages) {
      startPage = totalPages - maxPageNumbersToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - halfRange;
      endPage = currentPage + halfRange;
    }

    if (startPage > 1) {
      items.push(
        <Pagination.Item
          key="1"
          active={1 === currentPage}
          onClick={() => handlePageChange(1)}
        >
          1
        </Pagination.Item>
      );
      if (startPage > 2) {
        items.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
      }
    }

    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
      }
      items.push(
        <Pagination.Item
          key={totalPages}
          active={totalPages === currentPage}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return items;
  };

  // Pagination Method end
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const handleImageClick = (imgUrl, index) => {
  //   const newGallery = [...multipleimg];
  //   const oldMainImage = image;

  //   newGallery[index] = oldMainImage;
  //   setImage(imgUrl);
  //   setMulImage(newGallery);
  // };
  const handleImageClick = (imgUrl, index) => {
    setImage(imgUrl);
    setSelectedIndex(index);
  };

  return (
    <>
      {/* <Title title="gallery photo details | Pink"> */}
      <div className="container">
        {loading ? (
          <div className="p-5 mt-5 mb-5">
            <Loading />
          </div>
        ) : (
          <div className="row mb-5">
            <h6 className="list-port-sub-heading">Product</h6>
            <h3>
              <strong>Product Details</strong>
            </h3>
            <Link to={"/product"}>
              <button className="portfolio-list-back-btn mb-4 mt-2">
                {/* <i class="fas fa-angle-left port-back-icon"></i> */}
                <i class="fas fa-arrow-left"></i> Back
              </button>
            </Link>
            <div
              className="col-lg-8 col-md-12 col-sm-12 col-12"
              data-aos="fade-up"
            >
              <div className="card border-0 rounded-0">
                <img
                  src={image ? image : No_Image}
                  onError={(e) => {
                    e.target.src = No_Image;
                  }}
                  alt=""
                  className="rounded"
                />
              </div>

              <div class="sidebar-card categories text-start d-block d-lg-none mt-5">
                <h3>Gallery Images</h3>
                <div className="row">
                  {multipleimg.length > 0 && (
                    <div className="gallery-img-detail-multi">
                      <div className="row">
                        {multipleimg.map((img, index) => (
                          <div
                            className="col-4 col-sm-2 col-md-4 mt-4"
                            key={index}
                          >
                            <div
                              className={`card border-0 rounded-0 position-relative ${
                                selectedIndex === index
                                  ? "gallery-selected"
                                  : ""
                              }`}
                              style={{ cursor: "pointer" }}
                              onClick={() => handleImageClick(img, index)}
                            >
                              <img
                                src={img}
                                alt={`Gallery ${index}`}
                                className="rounded"
                              />
                              {selectedIndex === index && (
                                <i className="fas fa-check-circle gallery-tick"></i>
                              )}
                            </div>
                          </div>
                        ))}
                        {/* {totalRecords > recordsPerPage && (
                            <div className="d-flex justify-content-end mt-3">
                              <div className="store-pagination">
                                <Pagination>
                                  <Pagination.Prev
                                    onClick={() =>
                                      handlePageChange(currentPage - 1)
                                    }
                                    disabled={currentPage === 1}
                                  />
                                  {renderPaginationItems()}
                                  <Pagination.Next
                                    onClick={() =>
                                      handlePageChange(currentPage + 1)
                                    }
                                    disabled={currentPage === totalPages}
                                  />
                                </Pagination>
                              </div>
                            </div>
                          )} */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 text-start d-flex justify-content-between">
                <span className="home_celebrity_header">{title}</span>
                {/* <span className="case-get-caleder pt-2">
                  <i className="fa-solid fa-calendar-days case-get-caleder-icon"></i>{" "}
                  {date}
                </span> */}
              </div>
              <div className="text-start">
                <p className="case-get-detail-web">{categoryname}</p>
              </div>
              <div className="text-start">
                {/* <h6>
                  <strong>Overview :</strong> 
                </h6> */}
                <p
                  dangerouslySetInnerHTML={{ __html: description }}
                  style={{ textAlign: "justify" }}
                ></p>
              </div>
              <div class="accordion" id="accordionExample">
                {overview && overview.trim() !== "" && (
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOver"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i class="fas fa-clipboard-list me-1"></i> Project
                        Overview
                      </button>
                    </h2>
                    <div
                      id="collapseOver"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p
                          dangerouslySetInnerHTML={{ __html: overview }}
                          style={{ textAlign: "justify" }}
                        ></p>
                      </div>
                    </div>
                  </div>
                )}
                {challenges && challenges.trim() !== "" && (
                  <div class="accordion-item mt-3">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i class="fas fa-exclamation-triangle me-1"></i> The
                        Challenges
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p
                          dangerouslySetInnerHTML={{ __html: challenges }}
                          style={{ textAlign: "justify" }}
                        ></p>
                      </div>
                    </div>
                  </div>
                )}

                {solutions && solutions.trim() !== "" && (
                  <div class="accordion-item mt-3">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i class="fas fa-lightbulb me-1"></i> The Solutions
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p
                          dangerouslySetInnerHTML={{ __html: solutions }}
                          style={{ textAlign: "justify" }}
                        ></p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              class="col-lg-4 col-md-12 col-sm-12 col-12"
              data-aos="fade-left"
            >
              <div class="sidebar-content-details">
                <div class="sidebar-card categories text-start d-none d-lg-block">
                  <h3>Gallery Images</h3>
                  <div className="row">
                    {multipleimg.length > 0 && (
                      <div className="gallery-img-detail-multi">
                        <div className="row">
                          {multipleimg.map((img, index) => (
                            <div className="col-md-4 mt-4" key={index}>
                              <div
                                className={`card border-0 rounded-0 position-relative ${
                                  selectedIndex === index
                                    ? "gallery-selected"
                                    : ""
                                }`}
                                style={{ cursor: "pointer" }}
                                onClick={() => handleImageClick(img, index)}
                              >
                                <img
                                  src={img}
                                  alt={`Gallery ${index}`}
                                  className="rounded"
                                />
                                {selectedIndex === index && (
                                  <i className="fas fa-check-circle gallery-tick"></i>
                                )}
                              </div>
                            </div>
                          ))}
                          {totalRecords > recordsPerPage && (
                            <div className="d-flex justify-content-end mt-3">
                              <div className="store-pagination">
                                <Pagination>
                                  <Pagination.Prev
                                    onClick={() =>
                                      handlePageChange(currentPage - 1)
                                    }
                                    disabled={currentPage === 1}
                                  />
                                  {renderPaginationItems()}
                                  <Pagination.Next
                                    onClick={() =>
                                      handlePageChange(currentPage + 1)
                                    }
                                    disabled={currentPage === totalPages}
                                  />
                                </Pagination>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {platformimg.length > 0 && (
                  <div class="sidebar-card categories text-start">
                    <h3>Technologies :</h3>
                    <div className="row">
                      {platformimg.map((imgplatform, index) => (
                        <div className="col-2" key={index}>
                          <div className="card border-0">
                            <img src={imgplatform} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div class="sidebar-card categories text-start">
                  <h3>Other Case Studies</h3>
                  <ul>
                    {list.map((value, index) => (
                      <li key={index}>
                        <Link to={`/case/details/${value.id}`}>
                          <i class="fas fa-angle-right"></i> {value.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* </Title> */}
    </>
  );
}

export default Product_Details_Component;
