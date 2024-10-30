import "./submit.css"
import { useNavigate} from "react-router-dom"
import { useEffect } from "react";
export default function Viewresult(){

    const navigate= useNavigate();
    const testID=localStorage.getItem("test.id")

    const handleViewResult = () => {
        navigate(`/result/${testID}`); 
        localStorage.removeItem("data");
}

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