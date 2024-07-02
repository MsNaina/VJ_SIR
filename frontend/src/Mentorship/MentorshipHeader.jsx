import "./MentorshipHeader.css";
import { NavLink } from "react-router-dom";
import Mentorship from "../assets/images/Mentorship.png";
import Discountt from "../assets/images/Discount (2).png"
import comp from "../assets/images/comp.png";
export default function MentorshipHeader() {

  return (
    <>
      <section className="Mentorship-Header">
        <div className="Mentorship-header-left">
          <img src={Mentorship} alt="" />
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
              <h2>for 3 Months</h2>
            </div>
            <img src={Discountt} alt="" />
          </div>
          <div className="Mentorship-header-btn">
            <NavLink to= "/highlights"> Buy Now </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
