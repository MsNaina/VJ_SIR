import React, { useState, useEffect } from "react";
import axiosInstance from "../../refresh";
import "./Mentorprofile.css";
import Navbar from "../Navbar";

export default function MentorProfile() {
  const [mentorDetails, setMentorDetails] = useState(null);

  useEffect(() => {
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
        setMentorDetails(response.data.data.alloted_mentor);
      } catch (error) {
        console.error("Error fetching mentor details:", error);
      }
    };

    fetchMentorDetails();
  }, []);

  if (!mentorDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section id="Mentor-Profile">
        <Navbar />
        <div className="Mentor-Profile">
          <h1>Profile</h1>
          <div className="Mentorprofile-info">
            <img
              src={
                mentorDetails.profile_photo
                  ? `http://127.0.0.1:8000/${mentorDetails.profile_photo}`
                  : "/media/default_profile.jpg"
              }
              alt={mentorDetails.Name}
              style={{ width: 120, height: 120, borderRadius: "10px" }}
            />
            <p>{mentorDetails.Name}</p>
          </div>
          <div className="mentorpersonalinfo">
            <h2>Personal Information</h2>

            <div className="mentorinfo">
              <div className="profile-label">
                <label htmlFor="tel">Mobile No.</label>
                <input
                  id="profile-input"
                  type="tel"
                  value={mentorDetails.mobile_no}
                  readOnly
                />
              </div>
              <div className="profile-label">
                <label htmlFor="email">Email ID</label>
                <input
                  id="profile-input"
                  type="email"
                  value={mentorDetails.email}
                  readOnly
                />
              </div>
              <div className="profile-label">
                <label htmlFor="Text">City</label>
                <input
                  id="profile-input"
                  type="text"
                  value={mentorDetails.state}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
