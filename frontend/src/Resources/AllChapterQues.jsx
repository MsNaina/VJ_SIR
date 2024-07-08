import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./AllChapterQues.css"
import config from "../config";
const AllChapterQues = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${config.BASE_URL}/api/questions/MODULE/${id}?format=json`)
      .then((response) => {
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
                  src={`${config.BASE_URL}${question.question}`}
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
