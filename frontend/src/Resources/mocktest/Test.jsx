import "./Test.css";
import Testheader from "./testheader/";
import React, { useState, useEffect } from "react";
import config from "../../config";
import { useParams, useNavigate } from "react-router-dom";
import colorcoding from "../../assets/images/colourcoding.jpeg";
import Questiongrid from "./Questiongrid";
import TestButtons from "./testbtn";

export default function Test() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [testData, setTestData] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questionStatus, setQuestionStatus] = useState({});
  const [physicsType, setPhysicsType] = useState('ALL');
  const [chemistryType, setChemistryType] = useState('ALL');
  const [mathType, setMathType] = useState('ALL');
  const [questionTime, setQuestionTime] = useState({});
  const [startTime, setStartTime] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("access_token"));

useEffect(() => {
  const fetchTestDetails = async () => {
    if (!token) {
      console.error("No token found. Redirecting to login...");
      return;
    }

    try {
      const response = await fetch(`${config.BASE_URL}/api/mocktest/start-test/${testId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setTestData(data.data);
          localStorage.setItem('test.id', data.data.test.id);
          
          const allQuestions = flattenQuestions(data.data.test.sections);
          setFilteredQuestions(allQuestions);
          setStartTime(new Date());
          const savedData = JSON.parse(localStorage.getItem("data")) || {};

          const structuredData = {
            sections: data.data.test.sections.map(section => ({
              id: section.id,
              title: section.title,
              order: section.order,
              test: section.test,
              questions: section.questions.map(question => {
                const questionId = question.id;
                const savedQuestion = savedData.sections?.find(savedSection => savedSection.id === section.id)?.questions?.find(savedQ => savedQ.test_question === questionId) || {};

                return {
                  test_question: questionId,
                  status: savedQuestion.status || "notVisited", 
                  time_taken: savedQuestion.time_taken || "00:00:00", 
                  is_O1_marked: savedQuestion.is_O1_marked || false,
                  is_O2_marked: savedQuestion.is_O2_marked || false,
                  is_O3_marked: savedQuestion.is_O3_marked || false,
                  is_O4_marked: savedQuestion.is_O4_marked || false,
                  marked_option: savedQuestion.marked_option || null,
                  marked_answer: savedQuestion.marked_answer || null,
                };
              }),
            })),
          };
          localStorage.setItem("data", JSON.stringify(structuredData));

           
          const mergedQuestionStatus = {};
          const mergedSelectedAnswers = {};
          structuredData.sections.forEach(section => {
            section.questions.forEach(question => {
              mergedQuestionStatus[question.test_question] = question.status;
              if (question.marked_option||question.marked_answer) {
                      mergedSelectedAnswers[question.test_question] = question.marked_option||question.marked_answer;
                    }

                    setSelectedAnswers(mergedSelectedAnswers)
                    setQuestionStatus(mergedQuestionStatus);
                  });
                });
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  fetchTestDetails();
}, [testId, token]);


useEffect(() => {
  const handleBackButton = (event) => {
event.preventDefault();
navigate("./testsubmit"); 
};

window.history.pushState(null, null, window.location.href);
window.addEventListener("popstate", handleBackButton);

return () => {
window.removeEventListener("popstate", handleBackButton);
};
}, [navigate]);

const flattenQuestions = (sections) => {
    return sections.flatMap(section => section.questions);
  };

  const filterQuestions = (selectedType, subject) => {
    return testData.test.sections.flatMap(section => 
      section.questions.filter(question => {
        const questionType = question.question.type; 
        const questionId = question.question.id; 
        const questionSubject = questionId.slice(0, 2); 
        const isSectionMatch = 
          (subject === 'Physics' && questionSubject === 'PH') ||
          (subject === 'Chemistry' && questionSubject === 'CH') ||
          (subject === 'Mathematics' && questionSubject === 'MA') ||
          (subject === 'ALL'); 

        const isTypeMatch = selectedType === 'ALL' || questionType === selectedType;

        return isSectionMatch && isTypeMatch;
      })
    );
  };
  const handleQuestionTypeChange = (e, subject) => {
    const selectedType = e.target.value;
    if (subject === 'Physics') {
      setPhysicsType(selectedType);
    } else if (subject === 'Chemistry') {
      setChemistryType(selectedType);
    } else if (subject === 'Mathematics') {
      setMathType(selectedType);
    }
    const updatedFilteredQuestions = filterQuestions(selectedType, subject);
  const intCount = updatedFilteredQuestions.filter(q => q.question.type === 'INT').length;

  // Ensure no more than 5 INT questions are selected for the subject
  if (intCount <= 5) {
    setFilteredQuestions(updatedFilteredQuestions); 
    setIntegerQuestionCount(prevCount => ({
      ...prevCount,
      [subject]: intCount,
    }));
  } else {
    alert("You can only select up to 5 INT questions for " + subject);
  }
    setCurrentQuestionIndex(0); 
  };


const handleSubmitTest =()=>{
 navigate("./testsubmit")
}
  const renderOptions = (question) => {
    const questionType = question.question.type; 
    const selectedAnswer = selectedAnswers[question.id] || [];

    switch (questionType) {
      case 'SMCQ':
   return (
    <div className="option">
      {['A', 'B', 'C', 'D'].map(option => (
        <label key={option} className="option-item">
          <input
            type="radio"
            name={question.id}
            value={option}
            checked={selectedAnswer === option}
            onChange={() => setSelectedAnswers(prev => ({
              ...prev,
              [question.id]: option,
            }))}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );


  case 'MMCQ':
    return (
      <div className="option">
        {['A', 'B', 'C', 'D'].map(option => (
          <label key={option} className="option-item">
            <input
              type="checkbox"
              name={`${question.id}`-`${option}`}
              value={option}
              checked={selectedAnswer.includes(option)}
              onChange={() => {
                setSelectedAnswers(prev => {
                  const updatedAnswers = prev[question.id] ? [...prev[question.id]] : [];
                  if (updatedAnswers.includes(option)) {
                    return {
                      ...prev,
                      [question.id]: updatedAnswers.filter(ans => ans !== option),
                    };
                  } else {
                    return {
                      ...prev,
                      [question.id]: [...updatedAnswers, option],
                    };
                  }
                });
              }}
            />
            <span>{option}</span> 
          </label>
        ))}
      </div>
    );
  

      case 'INT':
        return (
          <div className="option">
            <input
              type="number"
              value={selectedAnswer || null} 
              onChange={(e) => {
                const value = e.target.value;
                setSelectedAnswers(prev => ({
                  ...prev,
                  [question.id]: [parseFloat(value,10)], 
                }));
              }}
            />
          </div>
        );

      default:
        return null; 
    }
  };

  if (!testData) {
    return <p>Loading test...</p>;
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const calculateTimeTaken = () => {
    const currentTime = new Date();
    const timeTaken = Math.floor((currentTime - startTime) / 1000); // in seconds
    const minutes = Math.floor(timeTaken / 60).toString().padStart(2, '0');
    const seconds = (timeTaken % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <section id="Test">
      <div className="test">
        <Testheader />
        <div className="test-bottom">
          <div className="questions-left">
            <div className="test-list">
              {currentQuestion && (
                <div className="question">
                  <h4>Question {currentQuestionIndex + 1}:</h4>
                  <div className="testquestion">
                    <img
                      src={`${currentQuestion.question.question}`}
                      alt={`Question ${currentQuestionIndex + 1}`}
                    />
                    {renderOptions(currentQuestion)}
                  </div>
                </div>
              )}
            </div>
            <TestButtons
              filteredQuestions={filteredQuestions}
              selectedAnswers={selectedAnswers}
              setSelectedAnswers={setSelectedAnswers}
              setQuestionStatus={setQuestionStatus}
              submitTest={handleSubmitTest}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          </div>

          <div className="questions-right">
            <img src={colorcoding} alt="image" />
            <div className="question-filter">
              <div>
                <select id="physics-type" value={physicsType} onChange={(e) => handleQuestionTypeChange(e, 'Physics')}>
                  <option value="ALL">Physics</option>
                  <option value="SMCQ">SMCQ</option>
                  <option value="MMCQ">MMCQ</option>
                  <option value="INT">INT</option>
                </select>
              </div>
              <div>
                <select id="chemistry-type" value={chemistryType} onChange={(e) => handleQuestionTypeChange(e, 'Chemistry')}>
                  <option value="ALL">Chemistry</option>
                  <option value="SMCQ">SMCQ</option>
                  <option value="MMCQ">MMCQ</option>
                  <option value="INT">INT</option>
                </select>
              </div>
              <div>
                <select id="math-type" value={mathType} onChange={(e) => handleQuestionTypeChange(e, 'Mathematics')}>
                  <option value="ALL">Maths</option>
                  <option value="SMCQ">SMCQ</option>
                  <option value="MMCQ">MMCQ</option>
                  <option value="INT">INT</option>
                </select>
              </div>
            </div>
            <Questiongrid
              questions={filteredQuestions}
              questionStatus={questionStatus}
              onClickQuestion={(index) => setCurrentQuestionIndex(index)}
              currentQuestionIndex={currentQuestionIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 