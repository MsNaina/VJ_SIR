import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./compatibility.css";
import Navbar from "../Navbar";

const CompatibilityStage1 = () => {
  const [formData, setFormData] = useState({
    gender: "",
    state: "",
    maths_rank: "",
    chemistry_rank: "",
    physics_rank: "",
    medium: "",
    medium_change: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const navigate = useNavigate();

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Ladakh",
    "Jammu and Kashmir",
  ];

  const handleChange = (e) => {
    const value =
      e.target.name === "maths_rank" ||
      e.target.name === "chemistry_rank" ||
      e.target.name === "physics_rank"
        ? parseInt(e.target.value)
        : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("Access token not found in localStorage.");
        return;
      }
      const response = await axios.post(
        "http://127.0.0.1:8000/mentorship/get-mentor",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const responseData = response.data.data;
      setResponseMessage(response.data.message);

      navigate("/Mentorship/Compatibility/allocated-mentor", {
        state: {
          allocatedMentor: responseData.alloted_mentor,
          compatibilityScore: responseData.alloted_mentor_compatibility,
          extraMentors: [
            responseData.extra_mentor_1,
            responseData.extra_mentor_2,
            responseData.extra_mentor_3,
          ],
          compatibilityScores: [
            responseData.extra_mentor_1_compatibility,
            responseData.extra_mentor_2_compatibility,
            responseData.extra_mentor_3_compatibility,
          ],
        },
      });
    } catch (error) {
      if (
        error.response &&
        error.response.data.message === "Mentor has already been alloted"
      ) {
        alert("Mentor has already been allotted to you.");
      } else {
        console.error("Error submitting form:", error);
        setResponseMessage("Error submitting form.");
      }
    }
  };

  return (
    <section id="Compatibility">
      <Navbar />

      <div className="Compatibility">
        <h2>Compatibility Test</h2>
        <div className="compatibility-info">
          <form onSubmit={handleSubmit} action="POST">
            <div className="form-group"></div>

            <div className="form-group Flex">
              <div className="input-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  className="Coform"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="state">State</label>
                <select
                  id="state"
                  name="state"
                  className="Coform"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group Flex">
              <div className="input-group">
                <label htmlFor="medium">Medium</label>
                <select
                  id="medium"
                  name="medium"
                  className="Coform"
                  value={formData.medium}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="medium_change">
                  Are you changing your medium?
                </label>
                <select
                  id="medium_change"
                  name="medium_change"
                  className="Coform"
                  value={formData.medium_change}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <h3>How You Rate Yourself In:</h3>
              <div className="Flex rate">
                <div className="input-group">
                  <label htmlFor="maths_rank">Maths :</label>
                  <select
                    id="maths_rank"
                    name="maths_rank"
                    className="Coform"
                    value={formData.maths_rank}
                    onChange={handleChange}
                    required
                  >
                    <option value=""></option>
                    <option value="1">1 (weakest)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (strongest)</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="chemistry_rank">Chemistry :</label>
                  <select
                    id="chemistry_rank"
                    name="chemistry_rank"
                    className="Coform"
                    value={formData.chemistry_rank}
                    onChange={handleChange}
                    required
                  >
                    <option value=""></option>
                    <option value="1">1 (weakest)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (strongest)</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="physics_rank">Physics :</label>
                  <select
                    id="physics_rank"
                    name="physics_rank"
                    className="Coform"
                    value={formData.physics_rank}
                    onChange={handleChange}
                    required
                  >
                    <option value=""></option>
                    <option value="1">1 (weakest)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (strongest)</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="coformbtn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityStage1;
