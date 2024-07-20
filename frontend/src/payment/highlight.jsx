import Navbar from "../Mentorship/Navbar";
import "./highlight.css"
import { Helmet } from 'react-helmet-async';
import { NavLink } from "react-router-dom";
const Highlight = () => {
  return (
    <>
    <Helmet>
      <title>highlights - vj nucleus</title>
    </Helmet>
      <section id="Highlights">
        <Navbar />
        <div className="Highlights">
          <div className="Highlights-left"></div>
          <div className="Highlights-right">
            <div className="highlight-content">
              <h1>About the class</h1>
              <p>
                "The Silver Plan is designed for students seeking personalized
                mentoring and structured guidance to excel in their JEE & NEET
                exams." It Will be Conducted By Vishal joshi Sir.
              </p>

              <div className="highlights">
                <h1>Highlights</h1>
                <ul>
                  <li>Personalised DPPs</li>
                  <li>Get your mentor based on compatibility</li>
                  <li>Monthly Parent-teacher Meetings</li>
                  <li>Mock tests</li>
                  <li>Weekly meeting with vishal joshi sir</li>
                  <li>Timetable planning for success</li>
                  <li>Test paper Analysis</li>
                  <li>Interaction with JEE & NEET toppers (monthly)</li>
                  <li>rapid doubt solutions</li>
                </ul>
              </div>

              <div className="Requirements">
                <h1>Requirements</h1>
                <div className="requirements">
                  <ul>
                    <li>Your Dedication & Commitment To follow Us</li>
                  </ul>
                  <div className="highlight-btn">
                    <button>
                      <NavLink to="/payment"> Next</NavLink>
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
};
export default Highlight;
