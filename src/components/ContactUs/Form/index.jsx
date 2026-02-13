import React, { useState } from "react";
import "./index.css";
import { ContactMessage } from "../../Service-api/apiserver";
import { toast } from "react-toastify";
import LoginAPI from "../../../api/adminlogin";

function Contact_Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState(false);

  const ContactUsForm = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (!name || !email || !phoneno || !message) {
      return;
    }

    const Payload = {
      userDetails: {
        Name: name,
        Email: email,
        Phone: phoneno,
        Message: message,
      },
    };

    setIsSubmitting(true);

    try {
      const response = await LoginAPI.contactUs(Payload);

      if (response.apiStatus.code === "200") {
        setName("");
        setEmail("");
        setPhoneNo("");
        setMessage("");
        toast.success(response.apiStatus.message);
        setSubmit(false);
      } else {
        toast.error(response.apiStatus.message);
      }
    } catch (error) {
      toast.error("Failed to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e) => {
      let value = e.target.value;
      if (value === "" || /^\+?[0-9]*$/.test(value)) {
         setPhoneNo(value);
      }
   };
 

  return (
    <>
      <div>
        <div class="row mt-4 mb-5">
          <div class="col-md-12 col-lg-6 col-xl-6 order-2 order-lg-1" data-aos="fade-up">
            <div class="card_left_container bg-f9faff">
              <h6 class="card_left_header">Contact Us</h6>
              <h3 class="card_left_content">How Can We Help You?</h3>
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {submit && name.length == 0 ? (
                        <div className="text-danger error-message-required">
                          <span>*Name is required</span>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {submit && email.length === 0 ? (
                        <div className="text-danger error-message-required">
                          *Email is required
                        </div>
                      ) : (
                        <>
                          {email.length > 0 &&
                            !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i) && (
                              <div className="text-danger error-message-required">
                                *Invalid email format
                              </div>
                            )}
                        </>
                      )}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="text"
                        maxLength={14}
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Phone Number"
                        value={phoneno}
                        onChange={handlePhoneChange}
                      />
                      {submit && phoneno.length == 0 ? (
                        <div className="text-danger error-message-required">
                          <span>*Phone no is required</span>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div class="col-md-12">
                    <textarea
                      class="form-control form-control-1"
                      id="floatingTextarea"
                      placeholder="Your Messages.."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  {submit && message.length == 0 ? (
                    <div className="text-danger error-message-required">
                      <span>*Message is required</span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  className="mt-4"
                  onClick={ContactUsForm}
                  disabled={isSubmitting}
                >
                  <button className="contact_left_btn">
                    {" "}
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-6 order-1 order-lg-2" data-aos="fade-up">
            <div class="card border-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0579994737117!2d80.09189207518033!3d12.908416687387192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5003fe19ee3%3A0x52570e1682f1691f!2sHERMON%20SOLUTIONS%20-%20Development%20office!5e0!3m2!1sen!2sin!4v1710840833547!5m2!1sen!2sin"
                height="495"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact_Form;
