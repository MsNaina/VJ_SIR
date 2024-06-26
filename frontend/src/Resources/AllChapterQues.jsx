import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./AllChapterQues.css"

const AllChapterQues = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/questions/MODULE/${id}?format=json`)
      .then((response) => {
        console.log("Fetched questions:", response.data); // Log the response data
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the questions!", error);
      });
  }, [id]);

  const handleQuestionClick = (questionId) => {
    navigate(`/question/${questionId}`);
  };

  return (
    <>
      <Navbar />

      <section id="chapter-questions">
        <h1>Modules</h1>
        <div className="questions-list">
          {questions.length > 0 ? (
            questions.map((question) => (
              <div
                key={question.id}
                className="question-item"
                onClick={() => handleQuestionClick(question.id)}
              >
                <img
                  src={`http://127.0.0.1:8000${question.question}`} // Construct the full URL for the image
                  alt={`Question ${question.id}`}
                  className="question-thumbnail"
                />
               
              </div>
            ))
          ) : (
            <p>No questions available for this chapter.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default AllChapterQues;
