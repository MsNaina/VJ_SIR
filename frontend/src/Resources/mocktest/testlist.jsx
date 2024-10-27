import React from "react";
import {useLocation } from "react-router-dom";
import Navbar from "../../Mentorship/Navbar";
import "../level.css";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";

const TestList = () => {
  const location = useLocation();     
  const navigate = useNavigate();

  const tests = location.state?.tests || [];

  const handleAttemptClick = (test) => {
    try {
      navigate(`/instructions/${test.id}`, { state: { test } });
    } catch (error) {
      console.error("Error navigating to the instructions page:", error);
    }
  };
  

  return (
    <>
      <Helmet>
        <title>Mock Test List - VJ Nucleus</title>
      </Helmet>
      <Navbar />
      <section id="level-select">
        <div className="level-heading">
          <h1>Tests in Series</h1>
        </div>

        <div className="level-select">
          {tests.length > 0 ? (
            tests.map((test) => (
              <div className="level-container" key={test.id}>
                <div className="level">
                  <div className="level-Line"></div>
                  <h3>{test.name}</h3> 
                </div>
                <div className="level-button">
                  <button onClick={() => handleAttemptClick(test)}>
                    Attempt &gt;&gt;
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No tests available.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default TestList;
