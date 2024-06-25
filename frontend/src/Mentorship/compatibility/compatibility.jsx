import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./compatibility.css";
import Navbar from "../Navbar";

export default function CompatibilityStage1() {
  const [formData, setFormData] = useState({
    fullName: "",
    Gender: "",
    state: "",
    maths: "",
    chemistry: "",
    physics: "",
    medium: "",
    changingMedium: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [allocatedMentor, setAllocatedMentor] = useState("");

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:8000/allocate-mentor", formData)
      .then((response) => {
        console.log("Response from backend:", response.data);
        setResponseMessage(response.data.message);
        setAllocatedMentor(response.data.mentor);

        navigate.push({
          pathname: "Mentorship/Compatibility/allocated-mentor",
          state: {
            responseMessage: response.data.message,
            allocatedMentor: response.data.mentor,
          },
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setResponseMessage("Error submitting form.");
      });
  };
  

  return (
    <section id="Compatibility">
      <Navbar/>
      
      <div className="Compatibility">
        <h2>Compatibility Test</h2>
        <div className="compatibility-info">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name :</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group Flex">
              <div className="input-group">
                <label htmlFor="Gender">Gender</label>
                <select
                  id="Gender"
                  name="Gender"
                  className="Coform"
                  value={formData.Gender}
                  onChange={handleChange}
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
                >
                  <option value=""></option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="changingMedium">
                  Are you changing your medium?
                </label>
                <select
                  id="changingMedium"
                  name="changingMedium"
                  className="Coform"
                  value={formData.changingMedium}
                  onChange={handleChange}
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
                  <label htmlFor="maths">Maths :</label>
                  <select
                    id="maths"
                    name="maths"
                    className="Coform"
                    value={formData.maths}
                    onChange={handleChange}
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
                  <label htmlFor="chemistry">Chemistry :</label>
                  <select
                    id="chemistry"
                    name="chemistry"
                    className="Coform"
                    value={formData.chemistry}
                    onChange={handleChange}
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
                  <label htmlFor="physics">Physics :</label>
                  <select
                    id="physics"
                    name="physics"
                    className="Coform"
                    value={formData.physics}
                    onChange={handleChange}
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
          {responseMessage && <p>{responseMessage}</p>}
          {allocatedMentor && (
            <p>Your allocated mentor is: {allocatedMentor}</p>
          )}
        </div>
      </div>
    </section>
  );
}
