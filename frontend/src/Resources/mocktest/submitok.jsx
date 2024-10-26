import "./submit.css"
import { useNavigate , useLocation} from "react-router-dom"
import { useEffect } from "react";
import config from "../../config";
export default function Viewresult(){

    const navigate= useNavigate();
    const token= localStorage.getItem("access_token")
    const testID=localStorage.getItem("test.id")
    const location = useLocation();
    const { totalQuestions } = location.state || {};

    const handleViewResult = () => {
        const url = `${config.BASE_URL}/api/mocktest/result/${testID}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            localStorage.setItem(`Results`, JSON.stringify(data));       
            
            navigate("/result", { state: { totalQuestions  } }); 
            localStorage.removeItem("data");
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };

    useEffect(() => {    
        const handleBackButton = (event) => {
          event.preventDefault();
          navigate("/");
          
        };
        window.history.pushState(null, null, window.location.href);
        window.addEventListener("popstate", handleBackButton);
    
        return () => {
          window.removeEventListener("popstate", handleBackButton);
        };
      }, [navigate]);

    return(
        <>
        <div className="submittestconfirmation viewresult">
            <p>Thank You,Test Submitted Successfully.</p>
            <button onClick={handleViewResult}>VIEW RESULT</button>
        </div>
        
        </>
    )
}