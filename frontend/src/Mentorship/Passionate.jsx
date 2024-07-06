import "./passionate.css";
import {useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../refresh";
import Go from "../assets/images/Go.png";

export default function Passionate() {
  const [mentor, setMentor] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await axiosInstance.get(
          "http://127.0.0.1:8000/mentorship/random-mentor"
        );
        setMentor(response.data);
      } catch (error) {
        console.error("Error fetching random mentor:", error);
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
    if (path) {
      return `http://127.0.0.1:8000/${path}`;
    }
    return "/media/mentor_pfp/image.png";
  };

  const checkPermissions = async () => {
    try {
      const response = await axiosInstance.get(
        "http://127.0.0.1:8000/api/user/my-permissions/"
      );
      const { is_payment_done, is_mentor_alloted } = response.data;

      if (!is_payment_done) {
        navigate("/Payment", {
          state: { message: "Please confirm your payment." },
        });
      } else if (!is_mentor_alloted) {
        navigate("/Mentorship/Compatibility");
        navigate("/MentorProfile");
        fetchMentorDetails();
      }
    } catch (error) {
      navigate("/Payment", {
        state: { message: "Please confirm your payment." },
      });
    }
  };

  const fetchMentorDetails = async () => {
    try {
      const response = await axiosInstance.get(
        "http://127.0.0.1:8000/mentorship/get-mentor",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      console.log("Mentor details:", response.data);
    } catch (error) {
      console.error("Error fetching mentor details:", error);
    }
  };

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
