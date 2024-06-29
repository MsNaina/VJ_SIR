import "./contact.css";
import { NavLink } from "react-router-dom";
export default function Contact() {
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
              <form action="https://formspree.io/f/movaanqe" method="POST">
                <input
                  type="text"
                  name="username"
                  id=""
                  required
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="Email"
                  id=""
                  required
                  placeholder="E-mail"
                />

                <textarea
                  name="message"
                  id="textarea"
                  cols="4"
                  rows="10"
                  placeholder="Message"
                ></textarea>
                <input className="contact-btn" type="submit" value="SUBMIT" />
               
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
