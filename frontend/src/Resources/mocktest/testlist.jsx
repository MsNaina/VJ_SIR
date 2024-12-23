import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 

import { useLocation } from "react-router-dom";
import Navbar from "../../Mentorship/Navbar";
import "../level.css";
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import config from '../../config'; 
const token =localStorage.getItem("access_token")

const TestList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const tests = location.state?.tests || [];
  const attempts = tests.attempts || [];
  const live_tests = tests.live_tests || [];
  const test = tests.tests || [];
  
  const handleAttemptClick = async (test, isAttempted = false) => {
    if (isAttempted) {
        navigate(`/result/${test.test.id}`)
      } 
    else if(test.status){
      alert(test.status)
    }
    else {
      try {
        navigate(`/instructions/${test.id}`, { state: { test } });
      } catch (error) {
        console.error("Error navigating to the instructions page:", error);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(tests).length > 0) {
      setLoading(false);
    }
  }, [tests]);

  const closePopup = () => setShowPopup(false);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/api/user/my-permissions/`, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        if (response.data && response.data.is_admin) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Error fetching permissions:", error);
      }
    };
    fetchPermissions();
  }, []);


  return (
    <>
      <Helmet>
        <title>Mock Test List - VJ Nucleus</title>
      </Helmet>
      <Navbar />
      <section id="level-select">
        <div className="level-heading">
          <h1>Tests in Series</h1>
          {isAdmin && (
            <div className="classroom-btn">
              <button style={{marginTop:'0px'}}>
                <NavLink to="/test/admin-create">+ Create Test</NavLink>
              </button>
            </div>
          )}
        </div>

        <div className="alltests">
          <div className="testName">
            <h2>Mock Tests</h2>
          </div>
          <div className="level-select">
            {test.length > 0 ? (
              test.map((test) => (
                <div className="level-container" key={test.id}>
                  <div className="level">
                    <div className="level-Line"></div>
                    <h3>{test.name || test.test?.name || "Test Name Unavailable"}</h3>
                  </div>
                  <div className="level-button">
                    <p></p>
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

          {/* Live Tests Section */}
          <div className="testName">
            <h2>Live Tests</h2>
          </div>
          <div className="level-select">
            {live_tests.length > 0 ? (
              live_tests.map((test) => (
                <div className="level-container" key={test.id}>
                  <div className="level">
                    <div className="level-Line"></div>
                    <h3>{test.name || test.test?.name || "Test Name Unavailable"}</h3>
                  </div>
                  <div className="level-button">
                    <p></p>
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

          {/* Attempted Tests Section */}
          <div className="testName">
            <h2>Attempted Tests</h2>
          </div>
          <div className="level-select">
            {attempts.length > 0 ? (
              attempts.map((test) => (
                <div className="level-container" key={test.id}>
                  <div className="level">
                    <div className="level-Line"></div>
                    <h3>{test.name || test.test?.name || "Test Name Unavailable"}</h3>
                  </div>
                  <div className="level-button">
                    <p></p>
                    
                    <button onClick={() => handleAttemptClick(test, true)}>
                      Result &gt;&gt;
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No tests available.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestList;
