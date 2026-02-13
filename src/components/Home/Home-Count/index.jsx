import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ProjectImage from "../../../assets/Images/count-img-project.png";
import ClientImage from "../../../assets/Images/client-count-img.png";
import TeamImage from "../../../assets/Images/ourteam-count.png";
import AwardImage from "../../../assets/Images/award-count.png";
import "./index.css";
const HomeCount = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });


   const startYear = 2009;
  const currentYear = new Date().getFullYear();
  const totalExperience = currentYear - startYear;

  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= totalExperience) {
        clearInterval(interval);
      }
    }, 100); 
    return () => clearInterval(interval);
  }, [totalExperience]);

  return (
    <div ref={ref} className="home-count-wrapper mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 text-start pt-5" data-aos="fade-right">
            <h6 className="count-title-experirnce">
              We have <span className="experience-year-count">{count} Years</span> of
              experience
            </h6>
            <p>
              Get the highest quality IT services from the best tech provider in
              Chennai.
            </p>
          </div>
          <div className="col-lg-8" data-aos="fade-left">
            <div className="count-container">
              <div className="count-box">
                <img
                  src={ClientImage}
                  alt="project-img"
                  className="project-img-count"
                />
                <h2>{inView ? <CountUp end={450} duration={4} /> : 0}+</h2>
                <p>Happy Clients</p>
              </div>
              <div className="count-box">
                <img
                  src={ProjectImage}
                  alt="project-img"
                  className="project-img-count"
                />
                <h2>{inView ? <CountUp end={900} duration={4} /> : 0}+</h2>
                <p>Total Projects</p>
              </div>
              <div className="count-box">
                <img
                  src={AwardImage}
                  alt="project-img"
                  className="project-img-count"
                />
                <h2>{inView ? <CountUp end={50} duration={4} /> : 0}+</h2>
                <p>Award Achieved</p>
              </div>
              {/* <div className="count-box">
                <img
                  src={TeamImage}
                  alt="project-img"
                  className="project-img-count"
                />
                <h2>{inView ? <CountUp end={15} duration={4} /> : 0}+</h2>
                <p>Dedicated Staff</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCount;
