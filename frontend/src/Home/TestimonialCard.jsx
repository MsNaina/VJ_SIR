import React from "react";
import "./TestimonialCard.css";
import Testimonialcard from "../assets/images/testimonial.png";

export default function TestimonialCard({
  testimonialText,

  name,
}) {
  return (
    <div className="Testimonial-cards">
      <img src={Testimonialcard} alt="" />
      <div className="testimonial-content">
        <p>{testimonialText}</p>

        <div className="testimonial-text">
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
}
