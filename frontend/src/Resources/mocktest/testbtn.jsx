import React, { useState, useEffect } from 'react';
import './testbtn.css';

const TestButtons = ({
  filteredQuestions,
  selectedAnswers,
  setSelectedAnswers,
  questionStatus,
  setQuestionStatus,
  submitTest,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) => {
  const [structuredData, setStructuredData] = useState({});
  const totalQuestions = filteredQuestions.length;
  const [startTime, setStartTime] = useState(Date.now());
  const [questionTime, setQuestionTime] = useState({});
  const [answeredCount, setAnsweredCount] = useState(0);
  const [markedForReviewCount, setMarkedForReviewCount] = useState(0);
  const [answeredAndMarkedForReview, setAnsweredAndMarkedForReview] = useState(0);

  const testId = localStorage.getItem("test.id");

  const getStructuredData = () => {
    if (!testId) return {};
    const storedData = localStorage.getItem("data");


    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return {};
    }
  };

  const saveStructuredData = (data) => {
    if (testId) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  };

  
  useEffect(() => {
    setStartTime(Date.now());
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    setAnsweredCount((prevCount) => prevCount + 1);
    setCurrentQuestionIndex((prev) => (prev + 1 < totalQuestions ? prev + 1 : prev));
  };

  const onlyNext = () => {
    const currentQuestionId = filteredQuestions[currentQuestionIndex]?.id;
      const timeTakenForCurrentQuestion = Math.round((Date.now() - startTime) / 1000); 
      const previousStructuredData = getStructuredData(); 
      const previousTimeString = previousStructuredData.sections.flatMap(section => 
      section.questions.filter(question => question.test_question === currentQuestionId)
    )[0]?.time_taken;
  
    const previousTime = previousTimeString === "00:00:00" ? 0 : (previousTimeString || 0);
      const updatedStructuredData = {
      ...previousStructuredData,
      sections: previousStructuredData.sections.map((section) => ({
        ...section,
        questions: section.questions.map((question) => {
          if (question.test_question === currentQuestionId) {
            return {
              ...question,
              status: "Unattempted", 
              time_taken: previousTime + timeTakenForCurrentQuestion, 
            };
          }
          return question;
        }),
      })),
    };
      localStorage.setItem("data", JSON.stringify(updatedStructuredData));

      setStructuredData(updatedStructuredData);
      setAnsweredCount((prevCount) => prevCount + 1);
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex + 1 < totalQuestions ? prevIndex + 1 : prevIndex
    );
  };

  const saveStatusAndTime = (status) => {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const timeTakenForCurrentQuestion = Math.round((Date.now() - startTime) / 1000);
    const previousTime = questionTime[currentQuestion.id] || 0;

    setQuestionStatus((prev) => ({
      ...prev,
      [currentQuestion.id]: status,
    }));

    setQuestionTime((prev) => ({
      ...prev,
      [currentQuestion.id]: previousTime + timeTakenForCurrentQuestion,
    }));

    const existingData = getStructuredData();
    const updatedData = {
      ...existingData,
      questionStatus: {
        ...existingData.questionStatus,
        [currentQuestion.id]: status,
      },
      questionTime: {
        ...existingData.questionTime,
        [currentQuestion.id]: previousTime + timeTakenForCurrentQuestion,
      },
    };

    saveStructuredData(updatedData);
  };


  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const saveAnswerAndProceed = (status) => {
    
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const questionType = currentQuestion.question.type;
    const selectedAnswer = selectedAnswers[currentQuestion.id];
    if(status === "SaveMarked" && !selectedAnswer){
      alert("Select atleast one option to save and mark for review");
      return;
    }
    if (questionType === 'SMCQ' && !selectedAnswer) {
      alert("Please select at least one option before proceeding.");
      return;
    }

    if (questionType === 'MMCQ' && (!selectedAnswer || selectedAnswer.length === 0)) {
      alert("Please select at least one option before proceeding.");
      return;
    }

    if (questionType === 'INT' && (!selectedAnswer || selectedAnswer[0] === '')) {
      alert("Please provide an integer value before proceeding.");
      return;
    }

    const timeTakenForCurrentQuestion = Math.round((Date.now() - startTime) / 1000);
    const previousTime = questionTime[currentQuestion.id] || 0;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedAnswer || '',
    }));

    setQuestionStatus((prev) => ({
      ...prev,
      [currentQuestion.id]: status,
    }));

    setQuestionTime((prev) => ({
      ...prev,
      [currentQuestion.id]: previousTime + timeTakenForCurrentQuestion,
    }));

    const existingData = getStructuredData();
    const updatedData = {
      ...existingData,
      selectedAnswers: {
        ...existingData.selectedAnswers,
        [currentQuestion.id]: selectedAnswer || '',
      },
      questionStatus: {
        ...existingData.questionStatus,
        [currentQuestion.id]: status,
      },
      questionTime: {
        ...existingData.questionTime,
        [currentQuestion.id]: previousTime + timeTakenForCurrentQuestion,
      },
    };

    saveStructuredData(updatedData);
    handleNextQuestion();
  };

  const handleOptionSelect = (questionId, optionIndex) => {
    setSelectedAnswers((prevAnswers) => {
      const currentAnswers = prevAnswers[questionId] || [false, false, false, false]; // Default to all false (no options selected)
      const updatedAnswers = currentAnswers.map((selected, index) =>
        index === optionIndex ? !selected : selected
      );

      const updatedData = {
        ...prevAnswers,
        [questionId]: updatedAnswers,
      };

      const existingStructuredData = getStructuredData();
      const updatedStructuredData = {
        ...existingStructuredData,
        selectedAnswers: updatedData,
      };

      saveStructuredData(updatedStructuredData);

      return updatedData;
    });
  };

  const handleMarkForReviewAndSave = () => {
     saveAnswerAndProceed('SaveMarked');
    setAnsweredAndMarkedForReview((prevCount) => prevCount + 1);
    check();
  };

  const handleSaveAndNext = () => {
    saveAnswerAndProceed('Attempted');
    setAnsweredCount((prevCount) => prevCount + 1);
    check();
  };

  const handleMarkForReviewAndNext = () => {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    if (!currentQuestion) return;
    const timeTakenForCurrentQuestion = Math.round((Date.now() - startTime) / 1000);
    const previousTime = questionTime[currentQuestion.id] || 0;
    updateQuestionData(currentQuestion.id, selectedAnswers[currentQuestion.id], 'Marked', timeTakenForCurrentQuestion + previousTime);
    setMarkedForReviewCount((prevCount) => prevCount + 1);
    handleNextQuestion();
    check();
  };

  const handleClearResponse = () => {
    
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    if (!currentQuestion) return;

    const timeTakenForCurrentQuestion = Math.round((Date.now() - startTime) / 1000);
    const previousTime = questionTime[currentQuestion.id] || 0;

    updateQuestionData(currentQuestion.id, " " , 'Unattempted', timeTakenForCurrentQuestion + previousTime);
    check();
  };

  const updateQuestionData = (questionId, newAnswer, newStatus, newTime) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: newAnswer || '',
    }));
  
    setQuestionStatus((prev) => ({
      ...prev,
      [questionId]: newStatus,
    }));
  
    setQuestionTime((prev) => ({
      ...prev,
      [questionId]: newTime,
    }));
  
    const existingData = getStructuredData();
    const updatedData = {
      ...existingData,
      selectedAnswers: {
        ...existingData.selectedAnswers,
        [questionId]: newAnswer || '',
      },
      questionStatus: {
        ...existingData.questionStatus,
        [questionId]: newStatus,
      },
      questionTime: {
        ...existingData.questionTime,
        [questionId]: newTime,
      },
    };
  
    saveStructuredData(updatedData);
  };
  
  const updateSections = (structuredData, selectedAnswers, questionStatus, questionTime) => {
    try {
        structuredData.sections.forEach(section => {
            section.questions.forEach(question => {
                try {
                    const questionId = question.test_question;
                    
                    // Update question status if present
                    if (questionStatus[questionId]) {
                        question.status = questionStatus[questionId];
                    }

                    // Update time taken if present
                    if (questionTime[questionId] !== undefined) {
                        question.time_taken = questionTime[questionId].toString(); 
                    }

                    // Update selected answers if present
                    if (selectedAnswers[questionId]) {
                        const selectedAnswer = selectedAnswers[questionId]; 

                        const isNumeric = Array.isArray(selectedAnswer)
                            ? selectedAnswer.every(answer => !isNaN(answer)) 
                            : !isNaN(selectedAnswer);

                        if (isNumeric) {
                            // Handle integer type questions
                            question.marked_answer = Array.isArray(selectedAnswer) ? selectedAnswer[0] : selectedAnswer;
                            question.marked_option = null;
                            // Reset all is_OX_marked fields to null
                            question.is_O1_marked = null;
                            question.is_O2_marked = null;
                            question.is_O3_marked = null;
                            question.is_O4_marked = null;
                        } else {
                            // Handle single or multiple correct answers
                            question.marked_answer = null; // Reset integer answer
                            
                            if (!Array.isArray(selectedAnswer)) {
                                // Single correct answer (e.g., "A")
                                question.marked_option = selectedAnswer;
                                // Set all is_OX_marked fields to false
                                question.is_O1_marked = false;
                                question.is_O2_marked = false;
                                question.is_O3_marked = false;
                                question.is_O4_marked = false;
                                
                                // Mark the correct option based on the selectedAnswer
                                const answerMapping = { "A": 1, "B": 2, "C": 3, "D": 4 };
                                const mappedAnswer = answerMapping[selectedAnswer]; // Get the numeric value
                                if (mappedAnswer) {
                                    question[`is_O${mappedAnswer}_marked`] = true; // Set the selected option to true
                                }
                            } else {
                                // Multiple correct answers
                                question.marked_option = selectedAnswer.join(", "); // Handle multiple answers
                                // Reset all is_OX_marked fields to false
                                question.is_O1_marked = false;
                                question.is_O2_marked = false;
                                question.is_O3_marked = false;
                                question.is_O4_marked = false;
                                
                                const selectedAnswerArray = Array.isArray(selectedAnswer) ? selectedAnswer : [selectedAnswer];
                                
                                // Mark the correct options for multiple correct answers
                                selectedAnswerArray.forEach(answer => {
                                    if (["A", "B", "C", "D"].includes(answer)) {
                                        const answerMapping = { "A": 1, "B": 2, "C": 3, "D": 4 };
                                        const mappedAnswer = answerMapping[answer]; // Get the numeric value
                                        question[`is_O${mappedAnswer}_marked`] = true; // Mark the selected option as true
                                    }
                                });
                            }
                        }
                    }
                } catch (questionError) {
                    console.error(`Error updating question ID ${question.test_question}:`, questionError);
                }
            });
        });
    } catch (sectionError) {
        console.error('Error updating sections:', sectionError);
    }
};
const check = () => {
  try {
    const savedData = getStructuredData();
    if (savedData && Object.keys(savedData).length > 0) {
      setStructuredData(savedData);
    }

    const { selectedAnswers, questionStatus, questionTime } = savedData;
    if (!selectedAnswers || !questionStatus || !questionTime) {
      console.error('Selected answers, question status, or question time is missing.');
      return;
    }
    updateSections(savedData, selectedAnswers, questionStatus, questionTime);

    saveDataToLocalStorage(savedData);
  } catch (error) {
    console.error('Error in check function:', error);
  }
};
const saveDataToLocalStorage = (data) => {
  try {
    localStorage.setItem("data", JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
};
// const clearTestData = () => {
//   const testId = localStorage.getItem("test.id");

//   if (testId) {
//       localStorage.removeItem("data");

//       for (const key in localStorage) {
//           if (key.startsWith("data")) {
//               localStorage.removeItem(key); 
//           }
//       }      
//       console.log(`Data for testId ${testId} cleared from localStorage.`);
//   } else {
//       console.log("No testId found in localStorage.");
//   }
// };

  return (
    <div id="mocktestchoiceactionbtn">
      <div className="mocktestchoiceactionbtn">
        <button className="save-next" onClick={handleSaveAndNext}  >
          SAVE & NEXT
        </button>
        <button className="SaveMarked" onClick={handleMarkForReviewAndSave}>
          SAVE & MARK FOR REVIEW
        </button>
        <button className="clear" onClick={handleClearResponse}>
          CLEAR RESPONSE
        </button>
        <button className="Marked" onClick={handleMarkForReviewAndNext}>
          MARK FOR REVIEW & NEXT
        </button>
        {/* <button className="clear_data" onClick={clearTestData}>
            clear data
        </button> */}
      </div>

      <div className="action-buttons">
        <div className="action-btn">
          <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          <button onClick={onlyNext} disabled={currentQuestionIndex === totalQuestions - 1}>
            Next
          </button>
        </div>
         <button className='submittest' onClick={submitTest}>
            Submit Test
          </button>
      </div>
    </div>
  );
};

export default TestButtons;