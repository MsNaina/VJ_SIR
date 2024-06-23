import "./contact.css";
import { Link } from "react-router-dom";
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
                  <i class="fa-solid fa-location-dot fa-2x"></i>

                  <div className="info-text">
                    <h3>Address</h3>
                    <h4>Kota, Rajasthan, India</h4>
                  </div>
                </div>

                <div className="phone">
                  <i class="fa-solid fa-phone fa-2x"></i>

                  <div className="info-text">
                    <h3>Phone Number</h3>
                    <h4>+91XXXXXXXXXX</h4>
                  </div>
                </div>

                <div className="mail">
                  <i class="fa-regular fa-envelope fa-2x"></i>

                  <div className="info-text">
                    <h3>E-mail</h3>
                    <h4>vjsir.123@gmail.com</h4>
                  </div>
                </div>
              </div>

              <div className="contact-line"></div>

              <div className="social-media">
                <h3>Follow Us :</h3>
                <div className="social-media-btn">
                  <button>
                    <Link to="https://www.instagram.com/vishaljoshi.vjsir?igsh=MXdpaDh0anYzZWphOA==">
                      <i class="fa-brands fa-2x fa-instagram"></i>
                    </Link>
                  </button>
                  <button class="fa-brands fa-2x fa-youtube"></button>
                  <button>
                    <Link to="https://www.linkedin.com/in/vishaljoshivjsir?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsU%2Fw8UrWT0GlOYG2sv9vuw%3D%3D">
                      <i class="fa-brands fa-2x fa-linkedin"></i>
                    </Link>
                  </button>
                  <button class="fa-brands fa-2x fa-facebook"></button>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <h1>Send a Message</h1>

              <input type="text" name="" id="" required placeholder="Name" />
              <input type="email" name="" id="" required placeholder="E-mail" />

              <textarea
                name=""
                id="textarea"
                cols="1"
                rows="10"
                placeholder="Message"
              ></textarea>

              <button className="contact-btn">SUBMIT</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
