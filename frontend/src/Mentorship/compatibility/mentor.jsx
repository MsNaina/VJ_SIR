import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Default from "../../assets/images/defaultimg.jpg";
import "./mentor.css";

export default function Mentor() {
    const location = useLocation();
    const { mentor} = location.state || {};

    if (!mentor) {
      return <div>No mentor details available.</div>;
    }
    
   const getProfilePhotoUrl = (path) => {
     if (path) {
       return `http://127.0.0.1:8000/${path}`;
     }
     return "/media/mentor_pfp/image.png";
   };

  return (
    <>
      <section id="Mentor">
        <Navbar />
        <div className="Mentor">
          <h1>
            Meet <span>Your</span> Mentor
          </h1>

          <div className="my-mentor">
            <div className="Mentor-left">
              <div className="mentor-profile">
                <img
                  src={getProfilePhotoUrl(mentor.profile_photo)}
                  alt=""
                  className="profile-photo"
                />
                <h2>{mentor.Name}</h2>
                <div className="mentor-Info">
                  <i className="fa-solid fa-location-dot fa-2x"></i>
                  <h4>{mentor.IIT}</h4>
                </div>
              </div>
            </div>
            <div className="Mentor-right">
              <p>{mentor.about}</p>
              <div className="mentor-knowmore">
                <a href="">
                  <NavLink>Know More</NavLink>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
