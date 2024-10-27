import "./Test.css";
import profile from "../../assets/images/profile.png";
import Logo from "../../assets/images/logo.png";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import config from "../../config";

export default function Testheader() {
  const { testId } = useParams();
  const [testDetails, setTestDetails] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response = await fetch(`${config.BASE_URL}/api/mocktest/start-test/${testId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setTestDetails(data.data);

            const durationParts = data.data.test.duration.split(":").map(Number);
            const durationInSeconds = (durationParts[0] * 3600) + (durationParts[1] * 60) + durationParts[2];
            
            const currentTime = new Date().getTime();
            const savedEndTime = localStorage.getItem("endTime");

            if (savedEndTime) {
              const endTime = new Date(savedEndTime).getTime();
              const remainingTime = Math.floor((endTime - currentTime) / 1000); 

              console.log("Remaining Time After Refresh:", remainingTime);
              if (remainingTime > 0) {
                setTimeRemaining(remainingTime);
              } else {
                submitTest();
              }
            } else {
             
              const endTime = currentTime + durationInSeconds * 1000;
              localStorage.setItem("endTime", new Date(endTime).toISOString());  // Save end time in ISO format
              setTimeRemaining(durationInSeconds);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    };

    fetchTestDetails();
  }, [testId, token]);

// const submitTest = () => {
//   localStorage.removeItem("endTime");
//   navigate("/viewresult");
// };
const submitTest = async () => {
  try {
    // Save necessary data to local storage or server here
    // Example: await saveDataToStorageOrServer();

    // Remove end time from local storage
    localStorage.removeItem("endTime");

    // After saving data, navigate to view result page
    navigate("/viewresult");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

useEffect(() => {
  if (timeRemaining <= 0) return;

  const interval = setInterval(() => {
    setTimeRemaining((prevTime) => {
      if (prevTime <= 1) {
        clearInterval(interval);
        submitTest();
      }
      return prevTime > 0 ? prevTime - 1 : 0;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [timeRemaining]);

useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      const currentTime = new Date().getTime();
      const savedEndTime = localStorage.getItem("endTime");
      if (savedEndTime) {
        const endTime = new Date(savedEndTime).getTime();
        const remainingTime = Math.floor((endTime - currentTime) / 1000);
        if (remainingTime <= 0) {
          submitTest();
        }
      }
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);

  const handleBeforeUnload = (event) => {
    event.preventDefault();
    if (timeRemaining <= 0) {
      submitTest();
    }
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  };
}, [timeRemaining]);

  useEffect(() => {    
    const handleBackButton = (event) => {
      event.preventDefault();
      navigate("/");
      
    };
    window.history.pushState(null, null, window.location.href);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);

  const formatTime = (durationInSeconds) => {
    const h = Math.floor(durationInSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((durationInSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = (durationInSeconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };
  if (!testDetails) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="test-top">
        <div className="test-heading">
          <div className="test-heading-left">
            <NavLink to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
            <div>
              <h3 className="mocktest-name">{testDetails.test.name}</h3>
            </div>
          </div>

          <div className="test-heading-right">
            <img src={profile} alt="Profile" />
            <div className="test-candidateinfo">
              <h2>Candidate Name: {testDetails.user.name}</h2>
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
    </>
  );
}