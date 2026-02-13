import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Plan from "../../../assets/Images/workflow/card-1-0.png";
import Develop from "../../../assets/Images/workflow/card-2.png";
import Deliver from "../../../assets/Images/workflow/card-3-1.png";

const WorkFlow = [
  {
    id: 1,
    title: "Plan & Strategize",
    description:
      "We begin by understanding your goals and analyzing requirements to create a clear and actionable strategy. Our team studies your business processes, identifies potential challenges, and maps out workflows that align with your objectives. We prioritize efficiency and consistency, ensuring every step is thoughtfully planned to maximize outcomes.",
    image: Plan,
  },
  {
    id: 2,
    title: " Design & Develop",
    description:
      "Once the planning is complete, our team moves on to design and development. We focus on creating user-friendly, visually appealing interfaces that enhance the overall experience. Every feature is developed with scalability, security, and performance in mind. We use modern technologies and best practices, testing each component as it is built.",
    image: Develop,
  },
  {
    id: 3,
    title: "Test & Deliver",
    description:
      "Before launching, we conduct thorough testing to ensure quality, performance, and security. Functional, performance, and security tests are carried out to detect and resolve any issues. Once testing is complete, we deploy the solution and monitor its stability in real-time. Detailed documentation and training are provided if needed, and post-launch support ensures that the solution operates smoothly.",
    image: Deliver,
  },
];
function WorkFlowComponent() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="row mt-5" data-aos="fade-up">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div
            class="why-we-text-area pr-20"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div class="default-section-title">
              <h6 className="home-service-heading">HOW WE WORK?</h6>
              <h3 className="home-service-content">
                A workflow is a step-by-step process used to complete tasks
                efficiently and consistently.
              </h3>
            </div>
          </div>
        </div>
        {WorkFlow.map((value, index) => (
          <div className="col-md-4 mt-2" key={index}>
            <div class="workflow-card text-start">
              <div class="workflow-gradient"></div>
              <p class="workflow-title">{value.title}</p>
              <p className="workflow-label">
                {value.description.length > 110
                  ? value.description.slice(0, 110) + "..."
                  : value.description}
                
              </p>

              <div
                class="workflow-ico"
                onClick={() => {
                  setSelectedItem(value);
                }}
              >
                {/* <Link to={"/our-portfolio"}> */}
                <button className="default-home-button">Read More</button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="home-work-popup-overlay">
          <div className="home-work-popup-box">
            <div
              className="home-work-popup-close"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </div>
            <div className="home-work-popup-img">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>
            <div className="home-work-popup-content text-start">
              <h3 className="service-popup-title fs-5 mt-4">
                {selectedItem.title}
              </h3>
              <p className="service-popup-paragraph">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkFlowComponent;
