
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./AllChapterQues.css";
import Level from "./Level";
import config from "../config"
const AllPYQs = () => {
  const { chapterId, level } = useParams(); // Get both chapterId and level from the URL
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let url = "";
    if (level === "mains") {
      url = `${config.BASE_URL}/questions/MAIN/${chapterId}?format=json`;
    } else if (level === "advanced") {
      url = `${config.BASE_URL}/questions/adv/${chapterId}?format=json`;
    }
    if (url) {
      axios
        .get(url)
        .then((response) => {
         
          setQuestions(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the questions!", error);
        });
    }
  }, [chapterId, level]); // Fetch questions when chapterId or level changes

  const handleQuestionClick = (questionId) => {
    navigate(`/pyq/question/${questionId}`);
  };

  return (
    <>
      <Navbar />
      <section id="chapter-questions">
        <h1>PYQs - {level.charAt(0).toUpperCase() + level.slice(1)}</h1>{" "}
     
        <div className="questions-list">
          {questions.length > 0 ? (
            questions.map((question) => (
              <div
                key={question.id}
                className="question-item"
                onClick={() => handleQuestionClick(question.id)}
              >
                <img
                  src={`${config.BASE_URL}${question.question}`} // Construct the full URL for the image
                  alt={`Question ${question.id}`}
                  className="question-thumbnail"
                />
              </div>
            ))
          ) : (
            <p>No questions available for this chapter and level.</p>
          )}
        </div>
      </section>
    </>
  );
};
export default AllPYQs