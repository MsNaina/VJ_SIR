import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./PhQuePage.css"

export default function PhQues() {
  const { chapterId, topicIndex } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    // Fetch questions from backend
    fetch(`/api/questions/${chapterId}/${topicIndex}`)
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, [chapterId, topicIndex]);

  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleCheckClick = () => {
    setShowExplanation(true);
  };

  const handleNextClick = () => {
    setShowExplanation(false);
    setSelectedOption(null);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return (
    <>
      <Navbar />
      <section id="QuestionsPage">
        <div className="QuestionsPage">
          <div className="QuestionHeader">
            <h2>
              Question {currentQuestionIndex + 1}/{questions.length}
            </h2>
          </div>
          <div className="QuestionBody">
            <img src={currentQuestion.image} alt="Question" />
            <div className="Options">
              {["A", "B", "C", "D"].map((option, index) => (
                <div
                  key={index}
                  className={`Option ${
                    selectedOption === option ? "selected" : ""
                  } ${
                    showExplanation && currentQuestion.correctOption === option
                      ? "correct"
                      : showExplanation && selectedOption === option
                      ? "incorrect"
                      : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            <button className="Quebtn" onClick={handleCheckClick}>Check</button>
            {showExplanation && (
              <div className="Explanation">
                <img src={currentQuestion.explanation} alt="Explanation" />
              </div>
            )}
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </section>
    </>
  );
}
