import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./PhQuePage.css";

const PhQues = () => {
  const { id } = useParams(); // Current question ID
  const [question, setQuestion] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [integerAnswer, setIntegerAnswer] = useState("");
  const [isExplanationVisible, setIsExplanationVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isOptionLocked, setIsOptionLocked] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestionAndAnswer(id);
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/questions/count`)
      .then((response) => {
        setTotalQuestions(response.data.count);
      })
      .catch((error) => {
        console.error("Error fetching total number of questions:", error);
      });
  }, []);

  const fetchQuestionAndAnswer = async (questionId) => {
    try {
      const questionResponse = await axios.get(
        `http://127.0.0.1:8000/questions/id/${questionId}?format=json`
      );
      const answerResponse = await axios.get(
        `http://127.0.0.1:8000/questions/answer/${questionId}?format=json`
      );
      const questionData = questionResponse.data;
      const answerData = answerResponse.data;

      setQuestion({ ...questionData, ...answerData });
      setIsExplanationVisible(false);
      setSelectedOptions([]);
      setIsCorrect(null);
      setIsOptionLocked(false);
      setIntegerAnswer("");
    } catch (error) {
      console.error("Error fetching question and answer:", error);
    }
  };

  const handleOptionClick = (option) => {
    if (!isOptionLocked) {
      if (question.type === "MMCQ") {
        const updatedSelectedOptions = selectedOptions.includes(option)
          ? selectedOptions.filter((item) => item !== option)
          : [...selectedOptions, option];
        setSelectedOptions(updatedSelectedOptions);
      } else {
        setSelectedOptions([option]);
      }
    }
  };

  const handleIntegerInputChange = (event) => {
    setIntegerAnswer(event.target.value);
  };

  const handleCheckClick = () => {
    let isCorrectAnswer = false;

    switch (question.type) {
      case "SMCQ":
        isCorrectAnswer = selectedOptions[0] === question.correct_option;
        break;
      case "MMCQ":
        isCorrectAnswer = arraysEqual(
          selectedOptions.sort(),
          question.correct_option.sort()
        );
        break;
      case "INT":
        isCorrectAnswer =
          parseInt(integerAnswer) === parseInt(question.correct_option);
        break;
      case "SUBJ":
        isCorrectAnswer = true; // Always consider subjective questions correct
        break;
      default:
        break;
    }

    setIsCorrect(isCorrectAnswer);
    setIsExplanationVisible(true);
    setIsOptionLocked(true);
    console.log(`type of question is ${question.type}`)
  };

  const handleNextQuestion = () => {
    const nextQuestionId = parseInt(id) + 1;
    navigate(`/questions/id/${nextQuestionId}`);
  };

  const handlePrevQuestion = () => {
    const prevQuestionId = parseInt(id) - 1;
    navigate(`/questions/id/${prevQuestionId}`);
  };

  const arraysEqual = (a, b) => {
    return (
      a.length === b.length && a.every((value, index) => value === b[index])
    );
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

              {question.type === "SMCQ" || question.type === "MMCQ" ? (
                <div className="options">
                  {["A", "B", "C", "D"].map((option) => (
                    <div
                      key={option}
                      className={`option-label ${
                        selectedOptions.includes(option)
                          ? isCorrect === null
                            ? "selected"
                            : question.correct_option.includes(option)
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
              ) : null}

              {question.type === "INT" && (
                <div className="integer-input">
                  <input
                    type="number"
                    value={integerAnswer}
                    onChange={handleIntegerInputChange}
                    disabled={isOptionLocked}
                  />
                </div>
              )}

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
                      question.type === "INT"
                        ? integerAnswer === ""
                        : question.type === "SUBJ"
                        ? false
                        : selectedOptions.length === 0 || isOptionLocked
                    }
                  >
                    Check
                  </button>

                  <button className="next-button" onClick={handleNextQuestion}>
                    Next
                  </button>
                </div>
              </div>

              {isExplanationVisible && question.explanation && (
                <div className="explanation">
                  <h3>Explanation</h3>
                  <div className="explanation-image-container">
                    <img
                      src={`http://127.0.0.1:8000${question.explanation}`}
                      alt="Explanation"
                      className="explanation-image"
                    />
                  </div>
                </div>
              )}

              {isExplanationVisible && !question.explanation && (
                <div className="explanation">
                  <h3>Explanation</h3>
                  <p>No explanation available.</p>
                </div>
              )}

              {/* {question.type === "SUBJ" && (
                <div className="subjective-question">
                  <h3>Question</h3>
                  <div className="subjective-question-content">
                    <img
                      src={`http://127.0.0.1:8000${question.question}`}
                      alt="Question"
                      className="subjective-question-image"
                    />
                  </div>
                </div>
              )} */}
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
