import React from "react";
import "./index.css";
import Service_Image from "../../../assets/Images/home-service-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsToCircle,
  faChartPie,
  faHandsHoldingChild,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Home_Service() {
  return (
    <>
      <div class="service mt-5">
        <div class="container">
          <div
            class="default-section-title default-section-title-middle"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h6 className="home-service-heading">OUR SERVICES</h6>
            <h3 className="home-service-content">
              A service is an action or offering that delivers value to users by
              fulfilling a specific need or solving a problem.
            </h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div className="col-md-4 mt-2" data-aos="zoom-in">
          {/* <Link to={"/services"} className="service-decode-line"> */}
            <div class="serive-aug-card">
              <div class="title">Web Applications</div>
              <div class="icon">
                <i class="fa-thin fa-laptop-code"></i>
              </div>
              <div class="content">
                <p>
                  We develop robust, scalable, and secure web applications
                  tailored to meet your business goals. Our solutions are
                  optimized for performance and crafted using technologies to
                  ensure seamless user experiences across all browsers and
                  devices.
                </p>
              </div>
              <div>
                <button class="default-home-button">
                <Link
                  to={"/services"}
                  className="service-decode-line text-light"
                >
                  Read More
                </Link>
              </button>
              </div>
            </div>
        </div>
        <div className="col-md-4 mt-2" data-aos="zoom-in">
            <div class="serive-aug-card">
              <div class="title">Mobile App </div>
              <div class="icon">
                <i class="fa-thin fa-mobile-screen-button"></i>
              </div>
              <div class="content">
                <p>
                  Our mobile app development services cover both Android and iOS
                  platforms. We specialize in creating user-friendly,
                  high-performance apps that engage users and deliver results —
                  from concept to launch and beyond.
                </p>
              </div>
              <div>
              <button class="default-home-button">
                <Link
                  to={"/services"}
                  className="service-decode-line text-light"
                >
                  Read More
                </Link>
              </button>
            </div>
            </div>
        </div>
        <div className="col-md-4 mt-2" data-aos="zoom-in">
          <div class="serive-aug-card">
            <div class="title">Web Hosting</div>
            <div class="icon">
              <i class="fa-thin fa-server"></i>
            </div>
            <div class="content">
              <p>
                If you are looking for hosting service, or to host one or a
                number of sites as part of a total web solution, we provide a
                range of professional managed hosting services, including ASP,
                PHP and Java hosting.
              </p>
            </div>
            <div>
              <button class="default-home-button">
                <Link
                  to={"https://shop.hermonwebhosting.com/"}
                  target="blank"
                  className="service-decode-line text-light"
                >
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_Service;

// <div className="row" data-aos="zoom-in">
//   <div className="col-md-3 mt-2">
//     <div class="home-hs-service-card pb-2 text-start">
//       <h3 class="home-hs-service-card-title">Web Applications</h3>
//       <p class="home-hs-service-card-content">
//         We develop robust, scalable, and secure web applications
//         tailored to meet your business goals. Our solutions are
//         optimized for performance and crafted using modern
//         technologies to ensure seamless user experiences across all
//         browsers and devices.
//       </p>
//       <Link to={"/Services"}>
//         <div class="card__arrow">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             height="15"
//             width="15"
//           >
//             <path
//               fill="#fff"
//               d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
//             ></path>
//           </svg>
//         </div>
//       </Link>
//     </div>
//   </div>
//   <div className="col-md-3 mt-2">
//     <div class="home-hs-service-card text-start">
//       <h3 class="home-hs-service-card-title">
//         Mobile App Development
//       </h3>
//       <p class="home-hs-service-card-content">
//         Our mobile app development services cover both Android and iOS
//         platforms. We specialize in creating user-friendly,
//         high-performance apps that engage users and deliver results —
//         from concept to launch and beyond.
//       </p>
//       <Link to={"/Services"}>
//         <div class="card__arrow">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             height="15"
//             width="15"
//           >
//             <path
//               fill="#fff"
//               d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
//             ></path>
//           </svg>
//         </div>
//       </Link>
//     </div>
//   </div>
//   <div className="col-md-3 mt-2">
//     <div class="home-hs-service-card text-start">
//       <h3 class="home-hs-service-card-title">UI/UX Design</h3>
//       <p class="home-hs-service-card-content">
//         We design intuitive and engaging user interfaces backed by
//         solid UX research. Our goal is to create digital experiences
//         that are not only visually stunning but also functionally
//         effective, driving user satisfaction and business growth.
//       </p>
//       <Link to={"/Services"}>
//         <div class="card__arrow">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             height="15"
//             width="15"
//           >
//             <path
//               fill="#fff"
//               d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
//             ></path>
//           </svg>
//         </div>
//       </Link>
//     </div>
//   </div>
//   <div className="col-md-3 mt-2">
//     <div class="home-hs-service-card text-start">
//       <h3 class="home-hs-service-card-title">Web Hosting</h3>
//       <p class="home-hs-service-card-content">
//         If you are looking for hosting service, or to host one or a
//         number of sites as part of a total web solution, we provide a
//         range of professional managed hosting services, including ASP,
//         PHP and Java hosting.
//       </p>
//       <Link to={"https://shop.hermonwebhosting.com/"} target="blank">
//         <div class="card__arrow">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             height="15"
//             width="15"
//           >
//             <path
//               fill="#fff"
//               d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
//             ></path>
//           </svg>
//         </div>
//       </Link>
//     </div>
//   </div>
// </div>
