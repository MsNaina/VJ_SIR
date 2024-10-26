import React, { useEffect, useState } from "react";
import "./submit.css";
import {useNavigate } from "react-router-dom";
import config from "../../config.jsx";
export default function Submit() {
  const [answeredCount, setAnsweredCount] = useState(0);
  const [notAnsweredCount, setNotAnsweredCount] = useState(0);
  const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
  const [answeredAndMarkedForReview, setAnsweredAndMarkedForReview] = useState(0);
  const [notVisitedCount, setNotVisitedCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const token =localStorage.getItem("access_token")
  const testId= localStorage.getItem("test.id")
  const navigate=useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };
  const handleSubmit = async () => {
  console.log("Submitting test...");
  const structuredData = JSON.parse(localStorage.getItem("data"));
  try {
    const response = await fetch(`${config.BASE_URL}/api/mocktest/submit-test/${testId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(structuredData), 
    });

    if (!response.ok) {
      alert(response.message||" Test already submitted");
      localStorage.removeItem("data");
      localStorage.removeItem("endTime");
      navigate("/")
      throw new Error(`Error: ${response.message}`);
    }

    const result = await response.json();
    localStorage.removeItem(`structuredData-${testId}`);
    // localStorage.removeItem("data");
    localStorage.removeItem("endTime");
    navigate('/viewresult', { state: { totalQuestions } });

  } catch (error) {
    console.error("Error submitting test:", error); 
  }
};

useEffect(() => {
  const structuredData = JSON.parse(localStorage.getItem("data"));
  let answered = 0;
  let notAnswered = 0;
  let markedForReview = 0;
  let answeredMarkedForReview = 0;
  let notVisited = 0;
  let totalQuestionsCount = 0;
  
  structuredData?.sections.forEach((section, sectionIndex) => {
      section.questions.forEach((question, questionIndex) => {
          totalQuestionsCount++;

          const { status, marked_option, marked_answer } = question;
          if (status === "Attempted") {
              answered++;
          } else if (status === "Marked") {
              markedForReview++;
          } else if (status === "SaveMarked") {
              answeredMarkedForReview++;
          } else if (status === "Unattempted") {
            notAnswered++; //notVisited++;
          } else {
            notVisited++//notAnswered++;
          }
          // if ((marked_option || marked_answer) && status === "save-review") {

          //     answeredMarkedForReview++;
          // }
      });
  });

  setAnsweredCount(answered);
  setNotAnsweredCount(notAnswered);
  setMarkedForReviewCount(markedForReview);
  setAnsweredAndMarkedForReview(answeredMarkedForReview);
  setNotVisitedCount(notVisited);
  setTotalQuestions(totalQuestionsCount);
}, []);



  return (
    <>
     
      <section id="Submit">
        <div className="submit">
          <h1>Exam Summary</h1>
          <div className="submittest-data">
            <div className="usertestreport">
              <h2>No. of Questions</h2>
              <h3>{totalQuestions}</h3> 
            </div>
            <div className="usertestreport">
              <h2>Answered</h2>
              <h3>{answeredCount}</h3> 
            </div>
            <div className="usertestreport">
              <h2>Not Answered</h2>
              <h3>{notAnsweredCount}</h3> 
            </div>
            <div className="usertestreport">
              <h2>Marked for Review</h2>
              <h3>{markedForReviewCount}</h3> 
            </div>
            <div className="usertestreport">
              <h2>Answered & Marked for Review</h2>
              <h3>{answeredAndMarkedForReview}</h3> 
            </div>
            <div className="usertestreport">
              <h2>Not Visited</h2>
              <h3>{notVisitedCount}</h3> 
            </div>
          </div>

          <div className="submittestconfirmation">
            <p>
              Are you sure you want to submit for final marking?
              <br />
              No change will be allowed after submission.
            </p>
            <div>
              <button onClick={handleSubmit}>YES</button>
              <button onClick={handleGoBack}>NO</button>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
