import React from "react";
import "./TestimonialCard.css";
import Testimonialcard from "../assets/images/testimonial.png";

export default function TestimonialCard({ cardImage, testimonialText, personImage, name, designation }) {
  return (
    <div className="Testimonial-cards">
      <img src={Testimonialcard} alt="" />
      <div className="testimonial-content">
        <p>{testimonialText}</p>
        {/* <img className="testimonial-img" src={personImage} alt="" /> */}
        <div className="testimonial-text">
          <h2>{name}</h2>
          {/* <h3>{designation}</h3> */}
        </div>
      </div>
    </div>
  );
}

