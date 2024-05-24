import "./signup.css"
import { Link } from "react-router-dom";
import React from "react";
export default function SignUp(){
    return(
        <>
        
        <section className="SignUp">
    
    <div className="signup-left">

<div className="signup-top">

<img src="src\images\logo.png" alt="" />

<h2>Start Your <span>Perfect</span></h2>
<h2>Preparation Today</h2>

<div className="signupWith">

    <img src="src\images\apple.png" alt="" />

    <img src="src\images\google.png" alt="" />

    <img src="src\images\FB.png" alt="" />


</div>

<h3>or</h3>

</div>

<div className="signup-bottom">

<input type="text" name="" id="input"required placeholder="Name"/>

<input type="email" name="" id="input"required placeholder="E-mail" />

<input type="Password" name="" id="input"required placeholder="Password" />


{/* <div className="remeber-forgot">
    <label> <input type="checkbox"/>Remember me</label>
    <a href="#">Forgot Password ?</a>
</div> */}

<button className="login-btn" type="submit">Log In</button>

<div className="login-link">

    <p>New to our website? <a href="">Sign UP</a></p>
</div>

</div>

   </div>
    
    <div className="signup-right">

<img src="src\images\L-VJ sir.png" alt="" />
   
<div className="signup-text1">

    <img src="src\images\LVJ SIR1.png" alt="" />

    <p>Get Your <br />
Perfect Mentor <br />
Today!!</p>
</div>

<div className="signup-text2">
    <p>Get Your DPPs 
Customized As Per
Your Need!!</p>
</div>

<div className="signup-text3">
    <p>Vishal Joshi VJ Sir</p>
</div>

<img className="signup-img" src="src\images\loginimg.png" alt="" />

    </div>
    
    
    
    </section>  
        
        
        </>
    )
}