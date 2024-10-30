import "./Result.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import config from "../../config";

export default function Result() {
    const navigate = useNavigate();
    const [resultData, setResultData] = useState(null);
    const token = localStorage.getItem("access_token");
    const { testId } = useParams();

    useEffect(() => {
        const fetchTestDetails = async () => {
            try {
                const response = await fetch(`${config.BASE_URL}/api/mocktest/result/${testId}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        setResultData(result.data);
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
            navigate("/");
            localStorage.removeItem("Results")
        };

        window.history.pushState(null, null, window.location.href);
        window.addEventListener("popstate", handleBackButton);

        return () => {
            window.removeEventListener("popstate", handleBackButton);
        };
    }, [navigate]);
    if (!resultData) {
        return <div>Loading...</div>;
    }

    const totalAttempted = resultData.correct + resultData.incorrect;

    return (
        <section id="Result">
            <div className="result">
                <div>
                    <h3>Scorecard</h3>
                    <div className="finalscore">
                        <div>
                            <h1>Total Questions</h1>
                            <h2>{resultData.question_attempts.length}</h2>
                        </div>
                        <div>
                            <h1>Total Attempted</h1>
                            <h2>{totalAttempted}</h2>
                        </div>
                        <div>
                            <h1>Correct Answers</h1>
                            <h2>{resultData.correct}</h2>
                        </div>
                        <div>
                            <h1>Skipped</h1>
                            <h2>{resultData.skipped}</h2>
                        </div>
                        <div>
                            <h1>Incorrect Answers</h1>
                            <h2>{resultData.incorrect}</h2>
                        </div>
                        <div>
                            <h1>Score</h1>
                            <h2>{resultData.score}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
