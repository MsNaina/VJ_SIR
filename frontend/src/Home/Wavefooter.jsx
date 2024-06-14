import "./Wavefooter.css";
import { NavLink } from "react-router-dom";
export default function WaveFooter() {

   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth", // for smoothly scrolling
     });
   };
   
  return (
    <>
      <section id="Wave-footer">
        <div className="wave-footer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
            <path
              fill="#B0E3B5"
              fill-opacity="1"
              d="M0,128L80,128C160,128,320,128,480,106.7C640,85,800,53,960,48C1120,43,1280,64,1360,74.7L1440,85L1440,400L1360,400C1280,400,1120,400,960,400C800,400,640,400,480,400C320,400,160,400,80,400L0,400Z"
            ></path>
          </svg>

          <div className="wave-content">
            <div className="part1">
              <div className="part11">
                <NavLink to="/" onClick={scrollToTop}>
                  <img src="images\logo.png" alt="" />
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

            <div className="part2">
              <h3>Mentorship Batches</h3>
              <p>JEE Main & Advanced</p>
              <p>Mentorship Batch 2025</p>
            </div>

            <div className="part3">
              <h3>Quick Links</h3>
              <p>Mentorship Batch 2025</p>
              <p>FAQs</p>
            </div>

            <div className="part4">
              <h3>Subscribe Now</h3>

              <div className="part41">
                <i class="fa-brands fa-2x fa-instagram"></i>
                <i class="fa-brands fa-2x fa-youtube"></i>
                <i class="fa-brands fa-2x fa-linkedin"></i>
                <i class="fa-brands fa-2x fa-facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
