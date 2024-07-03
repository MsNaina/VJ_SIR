import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import "./login.css";
import axios from "axios"

export default function Class() {
 
    const [selectedClass, setSelectedClass] = useState("");
    const navigate = useNavigate();

    const handleNext = async () => {
     const accessToken = localStorage.getItem("access_token");
    
    if (!selectedClass) {
      alert("Please select your class.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/select-class/",
        { student_class: selectedClass },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);

      // Redirect to home page or another page as needed
      navigate("/");
    } catch (error) {
      console.error("Error during class selection:", error);
      alert("Error during class selection. Please try again later.");
    }
  };


  return (
    <section id="LogIn">
      <div className="login-left">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <h2>
          Start Your <span>Perfect</span>
          <br />
          Preparation Today
        </h2>
        <div className="login-bottom">
          <select
            id="class-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            required
            placeholder="Class"
          >
            <option value="" disabled>
              Select your class
            </option>
            <option value="12th">12th</option>
            <option value="11th">11th</option>
            <option value="dropper">Dropper</option>
          </select>
          <button onClick={handleNext} className="login-btn" type="button">
            Next
          </button>
        </div>
      </div>
      <div className="login-right">
        <img src={vjsir} alt="" />
      </div>
    </section>
  );
}
