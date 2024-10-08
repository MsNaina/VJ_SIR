import React, { useState, useEffect } from "react";
import axiosInstance from "../../refresh";
import "./Mentorprofile.css";
import Navbar from "../Navbar";
import config from "../../config";

export default function MentorProfile() {
  const [mentorDetails, setMentorDetails] = useState(null);
  const [error, setError] = useState(null); // Add an error state to track issues

  useEffect(() => {
    const fetchMentorDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `${config.BASE_URL}/api/mentorship/get-mentor`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setMentorDetails(response.data.data.alloted_mentor);
      } catch (error) {
        console.error("Error fetching mentor details:", error.response || error.message);
        setError("Error fetching mentor details."); // Update error state
      }
    };

    fetchMentorDetails();
  }, []);

  if (error) {
    return <div>{error}</div>; // Display error message if there's an issue
  }

  if (!mentorDetails) {
    return <div>Loading...</div>; // Loading state while mentor details are fetched
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
                  ? `${mentorDetails.profile_photo}`
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
                <label htmlFor="city">City</label>
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
