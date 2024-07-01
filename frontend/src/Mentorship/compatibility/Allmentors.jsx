import React , { useEffect , useState} from "react";
import {useLocation , NavLink , useNavigate} from "react-router-dom";
import Navbar from "../Navbar";
import "./Allmentor.css";
import axios from "axios"
import Default from "../../assets/images/defaultimg.jpg"

export default function AllMentor() {
  const location = useLocation();
const [mentors, setMentors] = useState([]);//
const navigate = useNavigate();//

  // const { extraMentors, compatibilityScores } = location.state;

  // const mentors = [
  //   { ...extraMentors[0], ...compatibilityScores[0] },
  //   { ...extraMentors[1], ...compatibilityScores[1] },
  //   { ...extraMentors[2], ...compatibilityScores[2] },
  // ];

  useEffect(() => {
    const { extraMentors, compatibilityScores } = location.state || {};
    if (extraMentors && compatibilityScores) {
      setMentors([
        { ...extraMentors[0], ...compatibilityScores[0] },
        { ...extraMentors[1], ...compatibilityScores[1] },
        { ...extraMentors[2], ...compatibilityScores[2] },
      ]);
    }
  }, [location.state]);

 const handleMeetMentor = async () => {
   const token = localStorage.getItem("access_token");
   if (!token) {
     console.error("No token found in local storage");
     alert("Please login again to continue.");
     navigate("/login");
     return;
   }
   try {
     const response = await axios.get(
       "http://127.0.0.1:8000/mentorship/get-mentor",
       {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );
     const result = response.data;
     console.log("API Response:", result);

     if (result.message === "Alloted Mentor Details fetched successfully") {
       const { alloted_mentor, alloted_mentor_compatibility } = result.data;
       navigate("/mentor", {
         state: {
           mentor: alloted_mentor,
          //  compatibility: alloted_mentor_compatibility,
         },
       });
     } else {
       console.log("Failed to fetch mentor details");
     }
   } catch (error) {
     console.error("Error fetching mentor details:", error);
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
