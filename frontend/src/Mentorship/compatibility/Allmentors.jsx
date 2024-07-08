import React, { useEffect, useState } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./Allmentor.css";
import axiosInstance from "../../refresh";
import config from "../../config"
export default function AllMentor() {
  const location = useLocation();
  const [mentors, setMentors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const { extraMentors, compatibilityScores } = location.state || {};
    if (extraMentors && compatibilityScores) {
      setMentors([
        { ...extraMentors[0], compatibility: compatibilityScores[0] },
        { ...extraMentors[1], compatibility: compatibilityScores[1] },
        { ...extraMentors[2], compatibility: compatibilityScores[2] },
      ]);
    }
  }, [location.state]);

   const getProfilePhotoUrl = (path) => {
     if (path) {
       return `${config.BASE_URL}${path}`;
     }
     return "/media/mentor_pfp/image.png";
   };

  const handleMeetMentor = async () => {
    const token = localStorage.getItem("access_token");

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    };
    if (!token) {
   
      alert("Please login again to continue.");
      navigate("/login");
      return;
    }
    try {
      const response = await axiosInstance.get(
        `${config.BASE_URL}/api/mentorship/get-mentor`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = response.data;

      if (result.message === "Alloted Mentor Details fetched successfully") {
        const { alloted_mentor, alloted_mentor_compatibility } = result.data;
        navigate("/mentor", {
          state: {
            mentor: alloted_mentor,
            compatibility: alloted_mentor_compatibility,
          },
        });
      } else {
        console.log("Failed to fetch mentor details");
      }
    } catch (error) {
      alert("Error fetching mentor details. Please try again later.");
    }
  };
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
                  src={getProfilePhotoUrl(mentor.profile_photo)}
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
                  <h5>
                    Compatibility Score:{" "}
                    {(mentor.compatibility * 100).toFixed(2)}%
                  </h5>
                </div>
              </div>
            ))}
          </div>

          <div className="mentor-btn">
            <button onClick={handleMeetMentor}>
              <NavLink to="/mentor">Meet Your Mentor</NavLink>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
