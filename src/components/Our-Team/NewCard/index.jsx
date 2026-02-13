import React, { useEffect, useState } from "react";
import Ceo_image from "../../../assets/Images/team-collape/TL5.png";
import Staff_image_1 from "../../../assets/Images/team-collape/TL6.png";
import Staff_image_2 from "../../../assets/Images/team-collape/TL7.png";
import Staff_image_3 from "../../../assets/Images/team-collape/TL4.png";
import Team_image_1 from "../../../assets/Images/team-collape/bc.with bk.jpg";
import Team_image_2 from "../../../assets/Images/team-collape/ImportedPhoto_1743413928841.jpg";
import Team_image_3 from "../../../assets/Images/team-collape/image-2.jpg";
import Team_image_4 from "../../../assets/Images/team-collape/imgteam2.JPEG";
import Team_image_5 from "../../../assets/Images/team-collape/ourteam-img-5.jpg";
import card_border_img from "../../../assets/Images/team-collape/01-APR.png";
import card_border_img2 from "../../../assets/Images/team-collape/harizondle.png";
import Header_underline from "../../../assets/Images/team-collape/header underline.png";
import Teammate_01 from "../../../assets/Images/team-collape/selva-gem.webp";
import Teammate_02 from "../../../assets/Images/team-collape/thaslim.webp";
import Teammate_03 from "../../../assets/Images/team-collape/praveen.png";
import Teammate_04 from "../../../assets/Images/team-collape/Personal02.png";
import Teammate_05 from "../../../assets/Images/team-collape/TL2.png";
import Teammate_06 from "../../../assets/Images/team-collape/personal01.webp";
import Teammate_07 from "../../../assets/Images/team-collape/hasim.png";
import Teammate_08 from "../../../assets/Images/team-collape/syed-gamer.png";
import Teammate_09 from "../../../assets/Images/team-collape/praveenvp-img.png";
import "./index.css";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";
import Loading from "../../Loading";

function Our_NewCard() {
  const [list, setList] = useState([]);
  const [leadershiplist, setLeadershipList] = useState([]);
  const [happyMoment, setHappy] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [id, setGetId] = useState("");
  const [image, setImage] = useState("");
  const [popupLoading, setPopupLoading] = useState(false);

  const KeyPlayersList = async () => {
    setLoading(true);
    try {
      const response = await LoginAPI.keyPlayersList();

      if (response.apiStatus.code === "200") {
        setList(response.responseData.teamList);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    KeyPlayersList();
  }, []);

  const HappyMomentList = async () => {
    setLoading(true);
    try {
      const response = await LoginAPI.happyMomentList();

      if (response.apiStatus.code === "200") {
        setHappy(response.responseData.HappyMomentList);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    HappyMomentList();
  }, []);

  const HappyMomentGet = async (index) => {
    const total = happyMoment.length;
    if (total === 0) return;

    if (index < 0) {
      index = total - 1;
    } else if (index >= total) {
      index = 0;
    }

    setPopupLoading(true);
    setImage("");
    setCurrentIndex(index);

    try {
      const serviceId = happyMoment[index]?.id;
      const response = await LoginAPI.happyMomentGet(serviceId);

      if (response.apiStatus.code === "200") {
        const data = response.responseData.TeamDetailsView;
        const FullImagePath = `${baseURL}${data.path}`;

        setGetId(data.id);
        setImage(FullImagePath);
      }
    } catch (error) {
      console.error("Error fetching service:", error);
    } finally {
      setPopupLoading(false);
    }
  };

  // leadership,

  const LeaderShipList = async () => {
    setLoading(true);
    try {
      const response = await LoginAPI.leaderShip();

      if (response.apiStatus.code === "200") {
        setLeadershipList(response.responseData.teamList);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    LeaderShipList();
  }, []);

  return (
    <>
      <div className="container">
        {loading ? (
          <div className="p-5 mt-5 mb-5">
            <Loading />
          </div>
        ) : (
          <>
            <div className="mt-4 mb-4">
              <h2 className="ourteam-header-lead">Leadership</h2>
              <img src={Header_underline} alt="" width="150" />
            </div>

            {leadershiplist.map((leadership, index) => (
              <React.Fragment key={index}>
                <div className="row mt-4 mb-4 align-items-center" key={index}>
                  {index % 2 === 0 ? (
                    <>
                      <div className="col-md-6" data-aos="fade-right">
                        <img
                          src={`${baseURL}${leadership.imgData.path}${leadership.imgData.altered_file_name}`}
                          alt="Missing Our Ceo Image"
                          className="img-card-full"
                        />
                      </div>
                      <div className="col-md-6 text-start" data-aos="fade-left">
                        <h4 className="ceo-name">{leadership.name}</h4>
                        <h6 className="ourteam-role">{leadership.role}</h6>
                        <p
                          className="mt-3 team-role-content"
                          dangerouslySetInnerHTML={{
                            __html: leadership.description,
                          }}
                        ></p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="col-md-6 text-start order-2 order-md-1"
                        data-aos="fade-right"
                      >
                        <h4 className="ceo-name">{leadership.name}</h4>
                        <h6 className="ourteam-role">{leadership.role}</h6>
                        <p
                          className="mt-3 team-role-content"
                          dangerouslySetInnerHTML={{
                            __html: leadership.description,
                          }}
                        ></p>
                      </div>
                      <div
                        className="col-md-6 order-1 order-md-2"
                        data-aos="fade-left"
                      >
                        <img
                          src={`${baseURL}${leadership.imgData.path}${leadership.imgData.altered_file_name}`}
                          alt="Missing Our Ceo Image"
                          className="img-card-full"
                        />
                      </div>
                    </>
                  )}
                </div>
                {index !== list.length - 1 && (
                  <div className="col-md-12 mt-4 mb-4">
                    <img
                      src={card_border_img2}
                      alt=""
                      className="our-team-underline-design"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}

            <div className="mt-4">
              <p className="our-team-main-co-header">[ OUR PROFESSIONALS]</p>
              <h2 className="ourteam-header-lead">Meet Our Key Players</h2>
              <div className=" mb-4">
                <img src={Header_underline} alt="" width="250" />
              </div>
              {list.map((keyplayer, index) => (
                <React.Fragment key={index}>
                  <div className="row mt-4 mb-4 align-items-center">
                    {index % 2 === 0 ? (
                      <>
                        <div className="col-md-6" data-aos="fade-right">
                          <img
                            src={`${baseURL}${keyplayer.path}`}
                            alt="Missing Our Ceo Image"
                            className="img-card-full"
                          />
                        </div>
                        <div
                          className="col-md-6 text-start"
                          data-aos="fade-left"
                        >
                          <h4 className="ceo-name">{keyplayer.name}</h4>
                          <h6 className="ourteam-role">{keyplayer.role}</h6>
                          <p
                            className="mt-4 team-role-content"
                            dangerouslySetInnerHTML={{
                              __html: keyplayer.description,
                            }}
                          ></p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="col-md-6 text-start order-2 order-md-1"
                          data-aos="fade-right"
                        >
                          <h4 className="ceo-name">{keyplayer.name}</h4>
                          <h6 className="ourteam-role">{keyplayer.role}</h6>
                          <p
                            className="mt-4 team-role-content"
                            dangerouslySetInnerHTML={{
                              __html: keyplayer.description,
                            }}
                          ></p>
                        </div>
                        <div
                          className="col-md-6 order-1 order-md-2"
                          data-aos="fade-left"
                        >
                          <img
                            src={`${baseURL}${keyplayer.path}`}
                            alt="Missing Our Ceo Image"
                            className="img-card-full"
                          />
                        </div>
                      </>
                    )}
                  </div>

                  {index !== list.length - 1 && (
                    <div className="col-md-12 mt-4 mb-4">
                      <img
                        src={card_border_img2}
                        alt=""
                        className="our-team-underline-design"
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-4 mb-4">
              <h2 className="ourteam-header-lead">Happy Moments</h2>
              <p className="happy-move-header">in Our Team</p>
              <img src={Header_underline} alt="" width="150" className="mb-4" />

              <div className="row">
                {happyMoment.map((happy, index) => (
                  <div className="col-md-3 mt-4" key={index}>
                    <div
                      className="card border-0"
                      data-bs-toggle="modal"
                      data-bs-target="#ourteampopup"
                      onClick={() => HappyMomentGet(index)}
                      data-aos="zoom-in"
                      // data-aos-delay="200"
                      // data-aos-duration="500"
                      data-aos-easing="ease-in-out"
                    >
                      <img
                        src={`${baseURL}${happy.path}`}
                        alt=""
                        className="our-team-happy-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="modal fade"
                id="ourteampopup"
                tabIndex="-1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="ServicePopupLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header border-0">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body text-start">
                      {popupLoading ? (
                        <div className="text-center my-5">
                          <div
                            className="spinner-border text-primary"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="position-relative text-center">
                            <img
                              src={image}
                              alt="Service"
                              className="service-popup-img"
                              style={{ maxWidth: "100%", height: "auto" }}
                            />
                            
                            {currentIndex > 0 && (
                            <button
                              className="ourteam-carousel-nav-btn left"
                              onClick={() => HappyMomentGet(currentIndex - 1)}
                              disabled={currentIndex === 0}
                            >
                              <i className="fa fa-chevron-left"></i>
                            </button>
                            )}

                            {currentIndex < happyMoment.length - 1 && (
                            <button
                              className="ourteam-carousel-nav-btn right"
                              onClick={() => HappyMomentGet(currentIndex + 1)}
                              disabled={currentIndex === happyMoment.length - 1}
                            >
                              <i className="fa fa-chevron-right"></i>
                            </button>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                    {/* <div className="modal-footer border-0 justify-content-center">
                      <button
                        type="button"
                        className="service-popup-close-btn"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Our_NewCard;
