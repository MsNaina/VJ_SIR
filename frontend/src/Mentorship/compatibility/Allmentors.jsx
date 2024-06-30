import React , {useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import "./Allmentor.css";
import Default from "../../assets/images/defaultimg.jpg"

export default function AllMentor() {
  const location = useLocation();
  const {
    // allocatedMentor,
    extraMentors,
    compatibilityScores,
   
  } = location.state;

  const mentors = [
    { ...extraMentors[0], ...compatibilityScores[0] },
    { ...extraMentors[1], ...compatibilityScores[1] },
    { ...extraMentors[2], ...compatibilityScores[2] },
  ];

  return (
    <>
      <section id="mentors">
        <Navbar />

        <div className="mentors">
          <h2>
            Your <span>Compatible</span> Mentors
          </h2>

          <div className="mentor-cards">
            {mentors.map((mentor, index) => (
              <div className="mentor-card" key={index}>
                <img
                  src={mentor.profile_photo || Default}
                  alt=""
                  className="profile-photo"
                />
                <div className="Mentor-info">
                  <div className="mentor-info">
                    <h3> {mentor.Name}</h3>
                    <div className="mentor-IIT">
                      <i className="fa-solid fa-location-dot fa-2x"></i>
                      <h4>{mentor.IIT}</h4>
                    </div>
                  </div>
                  <h5>Compatibility Score: {mentor.compatibility}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
