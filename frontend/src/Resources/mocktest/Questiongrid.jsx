import React from 'react';
import './QuestionGrid.css';
const Questiongrid = ({ questions, questionStatus,  onClickQuestion, currentQuestionIndex }) =>
  {
  
  return (
    <div className="gridContainer">
      {questions.map((question, index) => {
       
        const status = questionStatus[question.id] || 'Unattempted'; 
            
        const isSelected = currentQuestionIndex === index;
       
        return (
          <div
            key={question.id}
            className={`gridItem ${isSelected ? 'selected' : ''} ${status}`}
            onClick={() => onClickQuestion(index)}
          >
            {index + 1} 
          </div>
        );
      })}
    </div>
  );
};

export default Questiongrid; 

