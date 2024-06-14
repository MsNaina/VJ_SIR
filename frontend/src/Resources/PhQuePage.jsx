import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./PhQuePage.css";

const PhQues = () => {
  const { id } = useParams(); // Current question ID
  const [question, setQuestion] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
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
        setIsCorrect(null); 
        setIsOptionLocked(false); 
      })
      .catch((error) => {
        console.error("There was an error fetching the question!", error);
      });
  };

  const handleOptionClick = (option) => {
    if (!isOptionLocked) {
      if (question.questionType === "single") {
        setSelectedOptions([option]);
      } else if (question.questionType === "multiple") {
        setSelectedOptions((prevSelectedOptions) =>
          prevSelectedOptions.includes(option)
            ? prevSelectedOptions.filter((opt) => opt !== option)
            : [...prevSelectedOptions, option]
        );
      }
    }
  };

  const handleCheckClick = () => {
    const isCorrectAnswer =
      question.questionType === "single"
        ? selectedOptions[0] === question.correctOptions[0]
        : selectedOptions.sort().join(",") ===
          question.correctOptions.sort().join(",");
    setIsCorrect(isCorrectAnswer);
    setIsExplanationVisible(true);
    setIsOptionLocked(true); 
  };

  const handleNextQuestion = () => {
    const nextQuestionId = parseInt(id) + 1;
    navigate(`/question/${nextQuestionId}`);
  };

  const handlePrevQuestion = () => {
    const prevQuestionId = parseInt(id) - 1;
    navigate(`/question/${prevQuestionId}`);
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
                  src={`http://127.0.0.1:8000${question.question}`} // Construct the full URL for the image
                  alt="Question"
                  className="question-image"
                />
              </div>

              <div className="options">
                {["A", "B", "C", "D"].map((option, index) => (
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
                    disabled={selectedOptions.length === 0 || isOptionLocked} // Disable if no option selected or options are locked
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
                      src={`http://127.0.0.1:8000${question.answer}`} // Assuming question.answer contains the explanation image path
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

export default PhQues;
