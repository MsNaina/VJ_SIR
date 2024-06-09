import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionCard from "./QuestionCard";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/questions/")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  return (
    <div>
      <h2>Questions</h2>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionPage;
