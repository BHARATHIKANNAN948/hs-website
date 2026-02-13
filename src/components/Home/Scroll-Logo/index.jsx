import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Partner_Logo_01 from "../../../assets/Images/logos/agile.png";
import Partner_Logo_02 from "../../../assets/Images/logos/century.png";
import Partner_Logo_03 from "../../../assets/Images/logos/edisonawards_logo.png";
import Partner_Logo_04 from "../../../assets/Images/logos/go to oraganisation.png";
import Partner_Logo_05 from "../../../assets/Images/logos/pinkads_logo.png";
import Partner_Logo_06 from "../../../assets/Images/logos/world tamil tv.png";
import Partner_Logo_07 from "../../../assets/Images/logos/chitra_enterprises_logo.jpg";
import Partner_Logo_08 from "../../../assets/Images/logos/fptl_logo.png";
import Partner_Logo_09 from "../../../assets/Images/logos/ganapathy_logo.png";
import Partner_Logo_10 from "../../../assets/Images/logos/geebee_logo.png";
import Partner_Logo_11 from "../../../assets/Images/logos/primac_logo-png.png";
import Partner_Logo_12 from "../../../assets/Images/logos/grasiouswords_logo.png";
import Partner_Logo_13 from "../../../assets/Images/logos/jgm_logo.png";
import Partner_Logo_14 from "../../../assets/Images/logos/neptech_logo.png";
import Partner_Logo_15 from "../../../assets/Images/logos/nutick_logo.png";
import Partner_Logo_16 from "../../../assets/Images/logos/praeter_logo.png";
import Partner_Logo_17 from "../../../assets/Images/logos/promusicals_logo.jpg";
import Partner_Logo_18 from "../../../assets/Images/logos/risingsun_logo.png";
import Partner_Logo_19 from "../../../assets/Images/logos/ValsamisLogo.png";
import Partner_Logo_20 from "../../../assets/Images/logos/vivaagam_logo.png";
import Partner_Logo_21 from "../../../assets/Images/logos/wtcc_logo.png";
import Partner_Logo_22 from "../../../assets/Images/logos/stemz_logo_2.png";
import Partner_Logo_23 from "../../../assets/Images/logos/skanda.png";
import Partner_Logo_24 from "../../../assets/Images/logos/client-new.webp";
import LoginAPI from "../../../api/adminlogin";
import { baseURL } from "../../../api/api";

function Home_Logo() {
  const scrollRef = useRef(null);
  const [list, setList] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollAmount = 1;
    let animationFrame;

    const scroll = () => {
      if (scrollRef.current && !isHovered) {
        // <-- stop scroll if hovered
        scrollRef.current.scrollLeft += scrollAmount;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  const OurClientList = async () => {
    try {
      const response = await LoginAPI.clientList();

      if (response.apiStatus.code === "200") {
        setList(response.responseData);
      }
    } catch {
    } finally {
    }
  };
  useEffect(() => {
    OurClientList();
  }, []);

  return (
    <div className="mobile-size-top pt-5">
      <div
        class="default-section-title default-section-title-middle"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h6 className="home-service-heading">OUR HAPPY CLIENTS</h6>
        <h3 className="home-service-content">
          Our happy clients share their stories and how we helped them succeed
        </h3>
      </div>
      <div className="scrollable-container-1">
        <div
          className="scrollable-container mb-4"
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="d-flex gap-5">
            {[...list, ...list].map((client, index) => (
              <img
                key={client.id || index}
                src={`${baseURL}/${client.path}`}
                alt={`Client Logo ${client.id}`}
                className="logo-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_Logo;
