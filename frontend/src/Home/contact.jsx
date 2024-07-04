import "./contact.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import axiosInstance from "../refresh";
import axios from "axios"
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Email is not valid.";
    }
    if (!formData.mobile_no) {
      errors.mobile_no = "Mobile number is required.";
    } else if (formData.mobile_no.length !== 10) {
      errors.mobile_no = "Mobile number must be 10 digits.";
    }
    if (!formData.subject) errors.subject = "Subject is required.";
    if (!formData.message) errors.message = "Message is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/contact/send/",
        formData
      );
      if (response.data.msg === "Email has been sent to your email address.") {
        setSuccessMessage("Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          mobile_no: "",
          subject: "",
          message: "",
        });
        setFormErrors({});
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id="Contact">
        <div className="Contact">
          <div className="contact-text">
            <h1>Contact Us</h1>
            <p>
              Need to get in touch? We're all ears! Whether you have questions,
              feedback, or just want to say hello, we're here to listen. Reach
              out to us through our contact page and we'll get back to you as
              soon as possible.
            </p>
          </div>

          <div className="contact-bottom">
            <div className="contact-left">
              <h2>Get In Touch</h2>
              <p>
                Your thoughts matter to us, so don't hesitate to drop us a line!
              </p>

              <div className="info">
                <div className="address">
                  <i className="fa-solid fa-location-dot fa-2x"></i>

                  <div className="info-text">
                    <h3>Address</h3>
                    <h4>Kota, Rajasthan, India</h4>
                  </div>
                </div>

                <div className="phone">
                  <i className="fa-solid fa-phone fa-2x"></i>

                  <div className="info-text">
                    <h3>Phone Number</h3>
                    <h4>+91 9571741509</h4>
                  </div>
                </div>

                <div className="mail">
                  <i className="fa-regular fa-envelope fa-2x"></i>

                  <div className="info-text">
                    <h3>E-mail</h3>
                    <h4>vishaljoshi@vjnucleus.com</h4>
                  </div>
                </div>
              </div>

              <div className="contact-line"></div>

              <div className="social-media">
                <h3>Follow Us :</h3>
                <div className="social-media-btn">
                  <button>
                    <NavLink to="https://www.instagram.com/vishaljoshi.vjsir">
                      <i className="fa-brands fa-2x fa-instagram"></i>
                    </NavLink>
                  </button>
                  <button>
                    <NavLink to="https://youtube.com/@nucleusvjsir">
                      <i className="fa-brands fa-2x fa-youtube"></i>
                    </NavLink>
                  </button>
                  <button>
                    <NavLink to="https://www.linkedin.com/in/vishaljoshivjsir">
                      <i className="fa-brands fa-2x fa-linkedin"></i>
                    </NavLink>
                  </button>
                  <button>
                    <NavLink to="https://www.facebook.com">
                      <i className="fa-brands fa-2x fa-facebook"></i>
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <h1>Send a Message</h1>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                />
                {formErrors.name && (
                  <p className="error-message">{formErrors.name}</p>
                )}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E-mail"
                />
                {formErrors.email && (
                  <p className="error-message">{formErrors.email}</p>
                )}
                <input
                  type="text"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleChange}
                  required
                  placeholder="Mobile Number"
                />
                {formErrors.mobile_no && (
                  <p className="error-message">{formErrors.mobile_no}</p>
                )}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
                {formErrors.subject && (
                  <p className="error-message">{formErrors.subject}</p>
                )}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                ></textarea>
                {formErrors.message && (
                  <p className="error-message">{formErrors.message}</p>
                )}
                <button className="contact-btn" type="submit">
                  {isLoading ? "Sending..." : "SUBMIT"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
