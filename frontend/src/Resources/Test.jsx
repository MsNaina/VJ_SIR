import "./Test.css";
import React, { useState, useEffect } from "react";
import profile from "../assets/images/profile.png";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function Test() {
  const initialTime = 3 * 60 * 60; // 3 hours in seconds

  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // UseEffect to calculate remaining time based on saved endTime in localStorage
  useEffect(() => {
    const savedEndTime = localStorage.getItem("endTime");

    if (savedEndTime) {
      const currentTime = new Date().getTime();
      const endTime = new Date(savedEndTime).getTime();
      const remainingTime = Math.floor((endTime - currentTime) / 1000);

      if (remainingTime > 0) {
        setTimeRemaining(remainingTime);
      } else {
        submitTest();
      }
    } else {
      const endTime = new Date().getTime() + initialTime * 1000;
      localStorage.setItem("endTime", new Date(endTime).toISOString());
    }
  }, []);

  // Timer logic to update timeRemaining every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const newTime = prevTime > 0 ? prevTime - 1 : 0;
        if (newTime <= 0) {
          submitTest();
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Save the updated endTime to localStorage whenever timeRemaining changes
  useEffect(() => {
    const endTime = new Date().getTime() + timeRemaining * 1000;
    localStorage.setItem("endTime", new Date(endTime).toISOString());
  }, [timeRemaining]);

  // Submit test function
  const submitTest = () => {
    setIsSubmitted(true);
    // Add your test submission logic here, e.g., send data to API
    console.log("Test submitted due to tab switch or time up");
    localStorage.removeItem("endTime"); // Clear timer on submit
  };

  // Handle visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && !isSubmitted) {
        submitTest();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isSubmitted]);

  // Format time as hh:mm:ss
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <section id="Test">
        <div className="test">
          <div className="test-top">
            <div className="test-heading">
              <div className="test-heading-left">
                <NavLink to="/">
                  <img src={Logo} alt="Logo" />
                </NavLink>
                <div>
                  <h2>JEE MAINS MOCK TEST SERIES</h2>
                  <h3>Mock Test - 1</h3>
                </div>
              </div>

              <div className="test-heading-right">
                <img src={profile} alt="Profile" />
                <div className="test-candidateinfo">
                  <h2>Candidate Name:</h2>
                  <h3>Subject Name:</h3>
                  <h3>
                    Time Remaining: <span>{formatTime(timeRemaining)}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="testtype">
            <h3>JEE MAINS</h3>
          </div>

          {isSubmitted && (
            <div className="test-submitted">
              <h2>The test has been submitted.</h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
