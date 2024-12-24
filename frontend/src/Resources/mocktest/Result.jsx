import "./Result.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../config";
import Navbar from "../../Mentorship/Navbar.jsx";
// import TestAnalysis from "./TestAnalysis";

export default function Result() {
  const navigate = useNavigate();
  const [resultData, setResultData] = useState(null);
  const token = localStorage.getItem("access_token");
  const { testId } = useParams();

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response = await fetch(
          `${config.BASE_URL}/api/mocktest/result/${testId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            setResultData(result.data);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchTestDetails();
  }, [testId, token]);

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      navigate("/testseries");
      localStorage.removeItem("Results");
    };

    window.history.pushState(null, null, window.location.href);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);

  if (!resultData) {
    return <div>Loading...</div>;
  }

  const totalAttempted = resultData.correct + resultData.incorrect;
  const skippedCount = resultData.question_attempts.length - totalAttempted;

  return (
    <section id="Result">
      <Navbar />
      <div className="result">
        {/* <div>
          <TestAnalysis resultData={resultData} />
        </div> */}

        <section id="TestAnalysis" className="test-analysis-container">
          <div className="test-analysis">
            <h3 className="test-title">Test Analysis {resultData.test.name}</h3>
            <div
              className="scorecard"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div className="score-item" style={{ flex: "1 1 30%" }}>
                <h1>Score</h1>
                <h2>
                  {resultData.score}/{resultData.test.maximun_score}
                </h2>
              </div>
              <div className="score-item" style={{ flex: "1 1 30%" }}>
                <h1>Total Questions</h1>
                <h2>{resultData.question_attempts.length}</h2>
              </div>
              <div className="score-item" style={{ flex: "1 1 30%" }}>
                <h1>Total Attempted</h1>
                <h2>{totalAttempted}</h2>
              </div>
              <div className="score-item" style={{ flex: "1 1 30%" }}>
                <h1>Correct Answers</h1>
                <h2>{resultData.correct}</h2>
              </div>
              <div className="score-item" style={{ flex: "1 1 30%" }}>
                <h1>Skipped</h1>
                <h2> {skippedCount} </h2>
              </div>
              <div className="score-item" style={{ flex: "1 1 30%" }}>
                <h1>Incorrect Answers</h1>
                <h2>{resultData.incorrect}</h2>
              </div>
            </div>
            <div className="question-analysis">
              <div className="questions">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Question</th>
                      <th scope="col">Selected Option</th>
                      <th scope="col">Correct Answer</th>
                      <th scope="col">Status</th>
                      <th scope="col">Time Taken</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultData.question_attempts.map((question, index) => (
                      <tr
                        className={
                          question.is_correct ? "table-success" : "table-danger"
                        }
                      >
                        <td scope="row"><b>{index + 1}</b></td>
                        <td>
                          {question.question_image && (
                            <img
                              src={"https://vjn-prod-s3.s3.amazonaws.com/media/temp_20241222191851_dbeca525a8974bf096aca11f9463d1b2/jee%20main%20test%205/Q25.JPG"}
                              alt={`Question ${index + 1}`}
                              className="question-image"
                            />
                          )}
                        </td>
                        <td>
                          {question.selected_answer !== null ? (
                            <span className="selected-option">
                              {question.selected_answer}
                            </span>
                          ) 
                          // : question.selected_answer !== null ? (
                          //   <span className="selected-option">
                          //     {question.selected_answer}2
                          //   </span>
                          // ) 
                          : (
                            <span className="skipped">Skipped</span>
                          )}
                            {/* if (question.selected_option != null) {
                              <span className="selected-option">
                                {question.selected_option}
                              </span>
                            } else if (question.selected_answer != null) {
                              <span className="selected-option">
                                {question.selected_answer}
                              </span>
                            } else {
                              <span className="skipped">Skipped</span>
                            } */}
                        </td>
                        <td className="selected-option">
                          {question.correct_answer}
                        </td>
                        <td>{question.status}</td>
                        <td>{question.time_taken}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
