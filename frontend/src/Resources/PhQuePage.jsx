import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./QuestionPage.css";

const questionIds = [1, 2, 3, 4]; // Example question IDs, replace with actual IDs

const PhQues = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answerChecked, setAnswerChecked] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = [];
      for (let id of questionIds) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/${id}`);
          fetchedQuestions.push(response.data);
        } catch (error) {
          console.error(`Error fetching question with ID ${id}:`, error);
        }
      }
      setQuestions(fetchedQuestions);
      setLoading(false);
    };
    fetchQuestions();
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleCheckAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrectAnswer(isCorrect);
    setAnswerChecked(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedAnswer("");
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerChecked(false);
      setIsCorrectAnswer(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (questions.length === 0) {
    return <div>No questions available</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="question-page">
      <p className="question-number">
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>
      <h2 className="question-text">Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.questionText}</p>
      <ul className="options-list">
        {currentQuestion.options.map((option, index) => (
          <li key={index} className="option-item">
            <label className="option-label">
              <input
                type="radio"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleOptionSelect(option)}
                className="option-input"
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      {!answerChecked ? (
        <button
          onClick={handleCheckAnswer}
          className="check-answer-btn"
          disabled={!selectedAnswer}
        >
          Check Answer
        </button>
      ) : (
        <div>
          {isCorrectAnswer ? (
            <p>Correct!</p>
          ) : (
            <div>
              <p>Incorrect!</p>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}
          {currentQuestionIndex < questions.length - 1 && (
            <button onClick={handleNextQuestion} className="next-question-btn">
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PhQues;
