import "./MentorshipHeader.css";
import { NavLink } from "react-router-dom";
export default function MentorshipHeader() {
  return (
    <>
      <section className="Mentorship-Header">
        <div className="Mentorship-header-left">
          <img src="images\M-VJ SIR.png" alt="" />
        </div>

        <div className="Mentorship-header-right">
          <div className="Mentorship-header-text">
            <h1>Mentorship Program</h1>
            <h3>
              for JEE Main and <br />
              Advanced
            </h3>
            <p>
              Unlock personalized success with our mentorship batch, offering
              tailored guidance, continuous monitoring, exclusive sessions with
              VJ Sir, rapid doubt resolution, and customized daily practice
              problems based on AI/ML analysis.
            </p>
          </div>

          <div className="Mentorship-header-price">
            <div className="mentorship-header-price">
              <h3>₹5,000/-</h3>
              <h4>₹8,000</h4>
            </div>

            <div className="Mentorship-header-discount">
              <img src="images\mentorshipdiscount.png" alt="" />

              <div className="mentorship-header-discount">
                <img src="images\pencil.png" alt="" />
                <p>Discount of 37.5% applied</p>
              </div>
            </div>
          </div>

          <div className="Mentorship-header-btn">
            <button className="mentorship-header-btn1">
              <NavLink to="./Compatibility">
                <img src="images\plus 1.png" alt="" />
                Check Compatibility
              </NavLink>
            </button>

            <a href="">Buy Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
