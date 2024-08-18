import "./Wavefooter.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/images/logo.png";
export default function WaveFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <>
      <section id="Wave-footer">
        <div className="wave-footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
          >
            <path
              className="wave-large"
              fill="#B0E3B5"
              fillOpacity="1"
              d="M0,128L80,128C160,128,320,128,480,106.7C640,85,800,73,960,78C1120,83,1280,94,1360,104.7L1440,115L1440,400L1360,400C1280,400,1120,400,960,400C800,400,640,400,480,400C320,400,160,400,80,400L0,400Z"
            ></path>
            <path
              className="wave-medium"
              fill="#B0E3B5"
              fillOpacity="1"
              d="M0,160L80,160C160,160,320,160,480,138.7C640,117,800,85,960,80C1120,75,1280,96,1360,106.7L1440,117L1440,400L1360,400C1280,400,1120,400,960,400C800,400,640,400,480,400C320,400,160,400,80,400L0,400Z"
            ></path>
          </svg>

          <div className="wave-content">
            <div className="part1">
              <div className="part11">
                <NavLink to="/" onClick={scrollToTop}>
                  <img src={Logo} alt="Logo" />
                </NavLink>
                <h3>Vishal Joshi (VJ) Sir</h3>
              </div>
              <p>
                Embark on a transformative journey with VJ Sir’s Mentorship
                Sessions, where each session is not just a class but a step
                closer to mastering Inorganic Chemistry. Enroll now
                at VJsir.com and experience education that goes beyond
                boundaries.
              </p>
            </div>

            <div className="part2-container">
              <div className="part2">
                <h3>Mentorship Batches</h3>
                <p>JEE Main, Advanced & NEET</p>
                <p>Mentorship Batch 2025</p>
              </div>
            </div>

            <div className="part3-container">
              <div className="part3">
                <h3>Quick Links</h3>
                <p>
                  <HashLink to="/Mentorship" onClick={scrollToTop}>
                    Mentorship Batch
                  </HashLink>
                </p>

                <p>
                  <HashLink to="/#FAQ">FAQs</HashLink>
                </p>
              </div>
            </div>

            <div className="part4">
              <h3>Subscribe Now</h3>
              <div className="part41">
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
        </div>
      </section>
    </>
  );
}
