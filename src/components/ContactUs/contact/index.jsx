import React from "react";

function Contact_Number() {
  return (
    <>
      <div class="row mb-4">
        <div class="col-md-12 col-lg-6 col-xl-6">
          <div class="contact-card" data-aos="fade-right">
            <div className="d-flex text-start">
              <div class="contact-icon-card">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h5 class="contact-address-content">
                  Registered Office Address :
                </h5>
                <p className="contact-address-para">
                  Door No. 1/200, Plot No. 203, Shanthi Nagar Extension,
                  Sirugalathur, Chennai - 600063, Tamil Nadu, India.
                </p>
                <div className="d-flex text-start">
                  {/* <div class="contact-icon-card">
                  <i class="fa-solid fa-location-dot"></i>
                </div> */}
                  <div className="contact-address-2">
                    <h5 class="contact-address-content">
                      Development Office Address :
                    </h5>
                    <p>
                      G1, No. 10 Fortune House, Bharathi Street, Srinivasa
                      Nagar, Perungalathur, Chennai - 600063
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 col-xl-6">
          <div class="contact-card1" data-aos="fade-down">
            <div className="d-flex text-start">
              <div class="contact-icon-card1">
                <i class="fa-solid fa-envelope-open-text"></i>
              </div>
              <div class="mt-4">
                <h5 class="contact-address-content">Our Email :</h5>
                <p>contact@hermonsolutions.com</p>
                <div></div>
              </div>
            </div>
          </div>
          <div class="contact-card1" data-aos="fade-up">
            <div className="d-flex text-start">
              <div class="contact-icon-card1">
                <i class="fa-solid fa-mobile-screen-button"></i>
              </div>
              <div class="mt-4">
                <h5 class="contact-address-content">Our Phone :</h5>
                <p>+91 98416 52232</p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact_Number;
