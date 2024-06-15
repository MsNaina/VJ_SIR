import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./pyq.css";

const MainsAdvancedQues = () => {
  const { id } = useParams(); // Current question ID
  const [question, setQuestion] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [integerAnswer, setIntegerAnswer] = useState("");
  const [isExplanationVisible, setIsExplanationVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isOptionLocked, setIsOptionLocked] = useState(false); // New state to lock options
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestion(id);
  }, [id]);

  const fetchQuestion = (questionId) => {
    axios
      .get(`http://127.0.0.1:8000/questions/id/${questionId}?format=json`)
      .then((response) => {
        console.log("Fetched question:", response.data);
        setQuestion(response.data);
        setIsExplanationVisible(false);
        setSelectedOptions([]);
        setIntegerAnswer("");
        setIsCorrect(null);
        setIsOptionLocked(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the question!", error);
      });
  };

  const handleOptionClick = (option) => {
    if (!isOptionLocked) {
      if (question.type === "single") {
        setSelectedOptions([option]);
      } else if (question.type === "multiple") {
        setSelectedOptions((prevSelectedOptions) =>
          prevSelectedOptions.includes(option)
            ? prevSelectedOptions.filter((opt) => opt !== option)
            : [...prevSelectedOptions, option]
        );
      }
    }
  };
  console.log("option is clicked");
  const handleIntegerChange = (e) => {
    if (!isOptionLocked) {
      setIntegerAnswer(e.target.value);
    }
  };

  const handleCheckClick = () => {
    let isCorrectAnswer = false;

    if (question.type === "single") {
      isCorrectAnswer = selectedOptions[0] === question.correctOptions[0];
    } else if (question.type === "multiple") {
      isCorrectAnswer =
        selectedOptions.sort().join(",") ===
        question.correctOptions.sort().join(",");
    } else if (question.type === "integer") {
      isCorrectAnswer =
        parseInt(integerAnswer, 10) ===
        parseInt(question.correctOptions[0], 10);
    }

    setIsCorrect(isCorrectAnswer);
    setIsExplanationVisible(true);
    setIsOptionLocked(true);
  };

  const handleNextQuestion = () => {
    const nextQuestionId = parseInt(id) + 1;
    navigate(`/pyq/question/${nextQuestionId}`);
  };

  const handlePrevQuestion = () => {
    const prevQuestionId = parseInt(id) - 1;
    navigate(`/pyq/question/${prevQuestionId}`);
  };

  return (
    <>
      <Navbar />
      <section id="question-page">
        <h1>Question</h1>
        <div className="question-page">
          {question ? (
            <>
              <div className="question-image-container">
                <img
                  src={`http://127.0.0.1:8000${question.question}`}
                  alt="Question"
                  className="question-image"
                />
              </div>

              <div className="options">
                {question.type !== "integer" &&
                  ["A", "B", "C", "D"].map((option, index) => (
                    <div
                      key={index}
                      className={`option-label ${
                        selectedOptions.includes(option)
                          ? isCorrect === null
                            ? "selected"
                            : question.correctOptions.includes(option)
                            ? "correct"
                            : "incorrect"
                          : ""
                      } ${isOptionLocked ? "locked" : ""}`}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}

                {question.type === "integer" && (
                  <input
                    type="number"
                    className="integer-input"
                    value={integerAnswer}
                    onChange={handleIntegerChange}
                    disabled={isOptionLocked}
                  />
                )}
              </div>
              <div className="controls">
                <button
                  className="prev-button"
                  onClick={handlePrevQuestion}
                  disabled={parseInt(id) <= 1}
                >
                  Previous
                </button>
                <div className="next-check">
                  <button
                    className="check-button"
                    onClick={handleCheckClick}
                    disabled={
                      (selectedOptions.length === 0 && integerAnswer === "") ||
                      isOptionLocked
                    }
                  >
                    Check
                  </button>

                  <button className="next-button" onClick={handleNextQuestion}>
                    Next
                  </button>
                </div>
              </div>
              {isExplanationVisible && question.answer && (
                <div className="explanation">
                  <h3>Explanation</h3>
                  <div className="explanation-image-container">
                    <img
                      src={`http://127.0.0.1:8000${question.answer}`}
                      alt="Explanation"
                      className="explanation-image"
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <p>Loading question...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default MainsAdvancedQues;
