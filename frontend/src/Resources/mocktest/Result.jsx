import "./Result.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Result(){
const navigate=useNavigate()
const result = JSON.parse(localStorage.getItem("Results"));
const totalAttempted = result.data.correct + result.data.incorrect;

useEffect(() => {
    const handleBackButton = (event) => {
  event.preventDefault();
  navigate("/");
   localStorage.removeItem("Results")
};

window.history.pushState(null, null, window.location.href);
window.addEventListener("popstate", handleBackButton);

return () => {
  window.removeEventListener("popstate", handleBackButton);
};
}, [navigate]);    


return(
    <>
    <section id="Result">
        <div className="result">
           <div>
            <h3>Scorecard</h3>
            <div className="finalscore">
                
                <div>
                    <h1>Total Questions</h1>
                    <h2>{result.data.question_attempts.length}</h2>
                </div>
                <div>
                    <h1>Total Attempted</h1>
                    <h2>{totalAttempted}</h2>
                </div>
                <div>
                    <h1>Correct Answers</h1>
                    <h2>{result.data.correct}</h2>
                </div>
                <div>
                    <h1>Skipped</h1>
                    <h2>{result.data.skipped}</h2>
                </div>
                <div>
                    <h1>Incorrect Answers</h1>
                    <h2>{result.data.incorrect}</h2>
                </div>
                <div>
                    <h1>Score</h1>
                    <h2>{result.data.score}</h2>
                </div>
                
            </div>
            </div> 
        </div>
    </section>
    
    
    </>
)   
}