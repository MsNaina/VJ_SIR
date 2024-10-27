import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../refresh";
import Go from "../assets/images/Go.png";
import config from "../config";
import "./passionate.css";

export default function Passionate() {
  const [mentor, setMentor] = useState(null);
  const [error, setError] = useState(null); // Handle any errors
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await axiosInstance.get(
          `${config.BASE_URL}/api/mentorship/random-mentor`
        );
        setMentor(response.data);
      } catch (error) {
        console.error("Error fetching random mentor:", error.response || error.message);
        setError("Error fetching random mentor."); // Track error in state
      }
    };

    fetchMentor();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const getProfilePhotoUrl = (path) => {
    return path ? `${path}` : "/media/mentor_pfp/image.png";
  };

  const checkPermissions = async () => {
    try {
      const response = await axiosInstance.get(
        `${config.BASE_URL}/api/user/my-permissions/`
      );
      const { is_payment_done, is_mentor_alloted } = response.data;

      if (!is_payment_done) {
        navigate("/Payment", {
          state: { message: "Please confirm your payment." },
        });
      } else if (is_payment_done && !is_mentor_alloted) {
        navigate("/Mentorship/Compatibility");
      } else {
        navigate("/MentorProfile");
      }
    } catch (error) {
      console.error("Error checking permissions:", error.response || error.message);
      navigate("/Payment", {
        state: { message: "Please confirm your payment." },
      });
    }
  };

  if (error) {
    return <div>{error}</div>; // Show error message if there's an issue
  }

  return (
    <>
      <section id="Passionate">
        <div className="passionate-heading">
          <h1>
            Passionate <span>Mentors</span>
          </h1>
          <h2>Dedicated To Help You</h2>
          <div className="passionate-pera">
            <div className="passionate-line"></div>
            <p>
              “A mentor is like a sturdy trellis, guiding and supporting a young
              vine as it reaches towards the sun, helping it climb higher and
              blossom into its full potential.”
            </p>
          </div>
        </div>

        <div className="mentorship-footer">
          <h1>
            Connect <br /> and <br />
            Grow.
          </h1>
          <div className="mentorship-footerimg">
            <button onClick={checkPermissions} className="go">
              <img src={Go} alt="" />
            </button>
            {mentor && (
              <div className="mentor-container">
                <img
                  className="profile"
                  src={getProfilePhotoUrl(mentor.profile_photo)}
                  alt={mentor.Name}
                />
                <div className="mentor-overlay">
                  <h2>{mentor.Name}</h2>
                  <h3> -{mentor.IIT}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
