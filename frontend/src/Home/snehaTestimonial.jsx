import Navbar from "../Mentorship/Navbar";
import "./snehaTestimonial.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import sneha from "../assets/images/Snehadas.png";
import booksession from "../assets/images/book-session.png";
import arrow from "../assets/images/Arrow.png";
import Testimonialcard from "../assets/images/testimonial.png";
import Sntestimonial from "../assets/images/Sntestimonial.png";

export default function SnehaTestimonial() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <>
      <section id="Sneha-Testimonial">
        <Navbar />

        <div className="Sneha-Testimonial">
          <div className="Sneha-left">
            <img src={sneha} alt="" />
            <div className="Sneha-left-content">
              <div className="sneha-profile">
                <h2>Sneha Das</h2>
                <p>
                  IIT Roorkee | 2+ years of Mentorship experience | Anxiety &
                  Stress Management | Personal Development
                </p>
              </div>
              <div className="sneha-thumbnail">
                <div className="sneha-box">
                  <h3>100+</h3>
                  <h4>
                    Students <br /> Mentored
                  </h4>
                </div>
                <div className="sneha-box">
                  <h3>2+</h3>
                  <h4>
                    Years <br /> Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="sneha-right">
            <div className="talk">
              <div className="talk-info">
                <h2>Let's Talk</h2>
                <h3>Have an One-One Session with Sneha!</h3>
              </div>
              <div className="book-session">
                <img src={booksession} alt="" />
                <NavLink to="/Pay">
                  <button className="session-btn">
                    <h2>₹ 500 /-</h2>
                    <img src={arrow} alt="Arrow" />
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="sneha-testimonial">
              <h2>Ratings and Testimonials</h2>

              <div className="sneha-testimonial-cards">
                <div className="sneha-testimonial-card card1">
                  <img src={Sntestimonial} alt="" className="testimonial1" />
                  <div className="sneha-testimonial-text">
                    <p>
                      ..Moreover getting connected felt so easy and I was able
                      to discuss even the minutest problems and find the right
                      approach to resolve them. But the best part about this is
                      I have been able to discuss and get the most genuine
                      suggestions for any other problems besides academics,
                      which not only helps me stay motivated but has also helped
                      me in getting more consistent and disciplined with my
                      routine.
                    </p>
                    <h2>-Shriya</h2>
                  </div>
                </div>

                <div className="card23">
                  <div className="sneha-testimonial-card card2">
                    <img
                      src={Testimonialcard}
                      alt=""
                      className="testimonial2"
                    />
                    <div className="sneha-testimonial-text">
                      <p>
                        ..kya main apne dream ko pahunch paunga yeh sawal
                        hamesha raheta tha aur jab maine Sneha didi ki jee story
                        yt se dekhi toh I feel ki yaar meri problems toh inki
                        problems ke saamne kuch hai hi nahi aur Sneha didi se
                        zoom meetings and google meet pe baat karke ek fire
                        chali ki nahi ab toh mai puri mhenat karunga, and from
                        that day and with Sneha didi's mentorship talks I
                        started to study consistently. In Brief, She is an
                        amazing mentor you can get from this mentorship batch.
                      </p>
                      <h2>-Sumeet Kumar</h2>
                    </div>
                  </div>

                  <div className="sneha-testimonial-card card3">
                    <img
                      src={Testimonialcard}
                      alt=""
                      className="testimonial3"
                    />
                    <div className="sneha-testimonial-text">
                      <p>
                        ..She makes my study planner and give me the solution of
                        my distractions which is very helpful for me....She is
                        very kind and helpful whenever I am in problem she gives
                        me the best solution...My self study efficiency is
                        increasing day by day and the number mistakes that I
                        made in last days become less day by day..
                      </p>
                      <h2>-Kartavya Gupta</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sneha-socialmedia">
                <h2>Let’s Connect</h2>
                <div className="icons">
                  <div className="social-media-btn">
                    <button>
                      <NavLink to="https://www.instagram.com/thesnehadas?igsh=aXpqcnA5NjExYWJ5">
                        <i class="fa-brands fa-2x fa-instagram"></i>
                      </NavLink>
                    </button>

                    <button>
                      <NavLink to="https://youtu.be/uO-YEcGW1KU?si=_zK1U0OTYkYGMuMA">
                        <i className="fa-brands fa-2x fa-youtube"></i>
                      </NavLink>
                    </button>

                    <button>
                      <NavLink to="hhttps://www.linkedin.com/in/sneha-das-000074204">
                        <i className="fa-brands fa-2x fa-linkedin"></i>
                      </NavLink>
                    </button>

                    <button>
                      <NavLink to="https://www.facebook.com/snehadas.naina?mibextid=LQQJ4d">
                        <i className="fa-brands fa-2x fa-facebook"></i>
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
