import "./Mocktest.css";
import instruction from "../../assets/images/inst.png";
import { useState,useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import config from "../../config";
export default function Mocktest() {
  const [isChecked, setIsChecked] = useState(false);
  const [testDetails, setTestDetails] = useState(null);
  const { testId } = useParams();  
  const location = useLocation(); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const testData = location.state?.test;
        if (!testData) {
          const response = await axios.get(`${config.BASE_URL}/api/mocktest/${testId}`);
          setTestDetails(response.data);
        } else {
          setTestDetails(testData);
        }
      } catch (error) {
        console.error('Error fetching test details:', error);
      }
    };

    fetchTestDetails();
  }, [testId, location]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleStartClick = () => {
    if (isChecked) {
      navigate(`/test/${testId}`);
    } else {
      alert("Please read and agree to the instructions before starting.");
    }
  };

  if (!testDetails) {
    return <div>Loading...</div>;
  }


  return (
    <>
     <Helmet>
    <title>MockTest - VJ Nucleus</title>
  </Helmet>
      <section id="Mocktest-instructions">
        <div className="Mocktest-instructions">
          <div className="instruction-heading">
            <h2>GENERAL INSTRUCTIONS</h2>
            <h2>Medium - ENGLISH</h2>
          </div>

          <div className="instruction-bottom">
            <h3>Please read the instructions carefully</h3>

            <div className="general-instruction">
              <h2>General Instructions:</h2>
              <p>
                1. Total duration of Paper is {testDetails.duration}. <br />
                2. The clock will be set at the server. The countdown timer in
                the top right corner of screen will display the remaining time
                available for you to complete the examination. When the timer
                reaches zero, the examination will end by itself. You will not
                be required to end or submit your examination.
                <br /> 3. The Questions Palette displayed on the right side of
                screen will show the status of each question using one of the
                following symbols:
              </p>
              <img src={instruction} alt="" />
              <p>
                {" "}
                4. You can click on Page Down to navigate to the bottom and Page
                Up to navigate to top of the question are, without scrolling
              </p>
            </div>

            <div className="navigating">
              <h2>Navigating to a Question:</h2>
              <p> 5. To answer a question, do the following:</p>
              <div className="inner-points">
                <p>
                  1. Click on the question number in the Question Palette at the
                  right of your screen to go to that numbered question directly.
                  Note that using this option does NOT save your answer to the
                  current question. <br /> 2. Click on Save & Next to save your
                  answer for the current question and then go to the next
                  question. <br />
                  3. Click on Mark for Review & Next to save your answer for the
                  current question, mark it for review, and then go to the next
                  question.
                </p>
              </div>
            </div>

            <div className="answering">
              <h2>Answering a Question:</h2>
              <p>6. Procedure for answering a multiple choice type question:</p>
              <div className="inner-points">
                <p>
                  1. Procedure for answering a multiple choice type question:{" "}
                  <br /> 2. To select you answer, click on the button of one of
                  the options. <br /> 3. To deselect your chosen answer, click
                  on the button of the chosen option again or click on the Clear
                  Response button. <br />
                  4. To change your chosen answer, click on the button of
                  another option <br /> 5. To save your answer, you MUST click
                  on the Save & Next button. <br /> To mark the question for
                  review, click on the Mark for Review & Next button. <br />
                  6. To change your answer to a question that has already been
                  answered, first select that question for answering and then
                  follow the procedure for answering that type of question.
                </p>
              </div>
              <p>
                7. To change your answer to a question that has already been
                answered, first select that question for answering and then
                follow the procedure for answering that type of question.
              </p>
            </div>

            <div className="navigate-sections">
              <h2>Navigating through sections:</h2>
              <p>
                {" "}
                8. Sections in this question paper are displayed on the top bar
                of the screen. Questions in a section can be viewed by click on
                the section name. The section you are currently viewing is
                highlighted. <br />
                9. After click the Save & Next button on the last question for a
                section, you will automatically be taken to the first question
                of the next section. <br /> 10. You can shuffle between sections
                and questions anything during the examination as per your
                convenience only during the time stipulated. <br /> 11.
                Candidate can view the corresponding section summery as part of
                the legend that appears in every section above the question
                palette.
              </p>
            </div>

            <div className="mocktest-check-box">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p>
                I have read and understood the instructions. All computer
                hardware allotted to me are in proper working condition. I
                declare that I am not in possession of / not wearing / not
                carrying any prohibited gadget like mobile phone, bluetooth
                devices etc. /any prohibited material with me into the
                Examination Hall.I agree that in case of not adhering to the
                instructions, I shall be liable to be debarred from this Test
                and/or to disciplinary action, which may include ban from future
                Tests/Examinations
              </p>
            </div>

            <div className="mocktest-btn">
              <button onClick={handleStartClick}>START</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
