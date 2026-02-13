import React, { useState, useEffect } from "react";
import "./index.css";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";
import No_image from "../../../assets/Images/no-image.jpeg";

function Service_Details() {
  const [id, setGetId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [platform, setPlateform] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [MulImage, setMulImage] = useState([]);

  // getid params,

  useEffect(() => {
    const queryParams = window.location.pathname;
    const myArray = queryParams.split("/");
    setGetId(myArray[3]);
    GetApiUpdate(myArray[3]);
  }, []);

  const GetApiUpdate = async (id) => {
    try {
      const response = await LoginAPI.caseStudyGet(id);
      const data = response.responseData.caseStudyList;

      setGetId(data.id);
      setTitle(data.title);
      setDescription(data.description);
      setPlateform(data.platform_name);
      setCategory(data.category_id);
      const imageUrl = `${baseURL}/${data.mainImage.path}${data.mainImage.altered_file_name}`;
      setImage(imageUrl);
      const galleryImagePaths = data.gallaryImages.map(
        (img) => `${baseURL}${img.path}${img.altered_file_name}`
      );
      setMulImage(galleryImagePaths);
    } catch {}
  };
  return (
    <>
      <div class="service-details">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 col-12">
              <div class="service-details-text-area text-start">
                <img
                  src={image ? image : No_image}
                  onError={(e) => {
                    e.target.src = No_image;
                  }}
                  alt="image"
                />
                <h3>{title}</h3>
                <p className="detail-service-para">{description}</p>

                <ul class="details-list">
                  <li>
                    <i class="far fa-arrow-alt-circle-right"></i>{" "}
                    <strong>Plateform-Name : </strong> {platform}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 col-12">
              <div class="sidebar-content pt-30">
                <div class="sidebar-card search-box">
                  <form>
                    <div class="input-group detail-service-input">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Here.."
                        required
                      />
                      <button class="btn" type="submit">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="sidebar-card categories text-start">
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <a class="active" href="#">
                        <i class="fas fa-angle-right"></i> Business
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-angle-right"></i> Research
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-angle-right"></i> Development
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-angle-right"></i> Branding
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-angle-right"></i> Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-angle-right"></i> Support
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="sidebar-card categories text-start">
                  <h3>Gallery Images</h3>
                  <div className="row">
                    {MulImage.map((img, index) => (
                      <div className="col-md-6 mt-3" key={index}>
                        <div className="card border-0">
                          <img src={img} alt={`Gallery ${index}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service_Details;
