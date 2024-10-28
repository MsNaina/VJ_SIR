import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../../Mentorship/Navbar";
import "../level.css";
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import config from "../../config";
const token =localStorage.getItem("access_token")

const Series = () => {
  const [tests, setTests] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/api/mocktest/series/`);
        if (response.data && response.data.data) {
          setTests(response.data.data);
          console.log(response.data.data)
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the test data:", error);
        setError("Failed to fetch test data.");
        setLoading(false);
      }
    };
    fetchTests();
  }, []);

  const handleAttemptClick = async (seriesId) => {
    try {
      const response = await axios.get(`${config.BASE_URL}/api/mocktest/series/${seriesId}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (response.data && response.data.data) {  
        navigate(`/mocktest/${seriesId}`, { state: { tests: response.data.data } });
      }
    } catch (error) {
      console.error("Error fetching tests for the series:", error);
      
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      alert("Failed to fetch tests. Please try again later.");
    }
  };
  return (
    <>
      <Helmet>
        <title>Mock Test Series - VJ Nucleus</title>
      </Helmet>
      <Navbar />
      <section id="level-select">
        <div className="level-heading">
          <h1>Test Series</h1>
        </div>

        <div className="level-select">
          {loading ? (
            <p>Loading tests...</p>
          ) : error ? (
            <p>{error}</p>
          ) : tests.length > 0 ? (
            tests.map((test) => (
              <div className="level-container" key={test.id}>
                <div className="level">
                  <div className="level-Line"></div>
                  <h3>{test.name}</h3>
                  {test.description && <p>{test.description}</p>}
                </div>
                <div className="level-button">
                  <button onClick={() => handleAttemptClick(test.id)}>
                    Attempt &gt;&gt;
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No test series available.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Series;
