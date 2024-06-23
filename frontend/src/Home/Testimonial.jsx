import React from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard.jsx";
import Testimonialcard from "../assets/images/testimonial.png";


export default function Testimonial() {
  const testimonials = [
    {
      cardImage: Testimonialcard,
      testimonialText:
        "...Moreover getting connected felt so easy and I was able to discuss even the minutest problems and find the right approach to resolve them. But the best part about this is I have been able to discuss and get the most genuine suggestions for any other problems besides academics, which not only helps me stay motivated but has also helped me in getting more consistent and disciplined with my routine.",

      name: "Shriya",
      designation: "AIR 1, JEE ADVANCED 2014",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "..kya main apne dream ko pahunch paunga yeh sawal hamesha raheta tha aur jab maine Sneha didi ki jee story yt se dekhi toh I feel ki yaar meri problems toh inki problems ke saamne kuch hai hi nahi aur Sneha didi se zoom meetings and google meet pe baat karke ek fire chali ki nahi ab toh mai puri mhenat karunga, and from that day and with Sneha didi's mentorship talks I  started to study consistently. In Brief, She is an amazing mentor you can get from this mentorship batch.",

      name: "Sumeet Kumar",
      designation: "Topper, NEET 2020",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "..She makes my study planner and give me the solution of my distractions which is very helpful for me....She is very kind and helpful whenever I am in problem she gives me the best solution...My self study efficiency is increasing day by day and the number mistakes that I made in last days become less day by day..",

      name: "Kartavya Gupta",
      designation: "Topper, NEET 2020",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "..When I didn't take the mentorship than I  am not able to study properly at the start I was so distracted but when I take the mentorship then I attend the meeting with sneha didi and she motivates me and develops a confidence in me.THANK YOU DIDI",

      name: " Adarsh",
      designation: "Topper, NEET 2020",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "...Moreover getting connected felt so easy and I was able to discuss even the minutest problems and find the right approach to resolve them. But the best part about this is I have been able to discuss and get the most genuine suggestions for any other problems besides academics, which not only helps me stay motivated but has also helped me in getting more consistent and disciplined with my routine.",

      name: "Shriya",
      designation: "AIR 1, JEE ADVANCED 2014",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "..kya main apne dream ko pahunch paunga yeh sawal hamesha raheta tha aur jab maine Sneha didi ki jee story yt se dekhi toh I feel ki yaar meri problems toh inki problems ke saamne kuch hai hi nahi aur Sneha didi se zoom meetings and google meet pe baat karke ek fire chali ki nahi ab toh mai puri mhenat karunga, and from that day and with Sneha didi's mentorship talks I  started to study consistently. In Brief, She is an amazing mentor you can get from this mentorship batch.",

      name: "Sumeet Kumar",
      designation: "Topper, NEET 2020",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "..She makes my study planner and give me the solution of my distractions which is very helpful for me....She is very kind and helpful whenever I am in problem she gives me the best solution...My self study efficiency is increasing day by day and the number mistakes that I made in last days become less day by day..",

      name: "Kartavya Gupta",
      designation: "Topper, NEET 2020",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "..When I didn't take the mentorship than I  am not able to study properly at the start I was so distracted but when I take the mentorship then I attend the meeting with sneha didi and she motivates me and develops a confidence in me.THANK YOU DIDI",

      name: " Adarsh",
      designation: "Topper, NEET 2020",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "...Moreover getting connected felt so easy and I was able to discuss even the minutest problems and find the right approach to resolve them. But the best part about this is I have been able to discuss and get the most genuine suggestions for any other problems besides academics, which not only helps me stay motivated but has also helped me in getting more consistent and disciplined with my routine.",

      name: "Shriya",
      designation: "AIR 1, JEE ADVANCED 2014",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "..kya main apne dream ko pahunch paunga yeh sawal hamesha raheta tha aur jab maine Sneha didi ki jee story yt se dekhi toh I feel ki yaar meri problems toh inki problems ke saamne kuch hai hi nahi aur Sneha didi se zoom meetings and google meet pe baat karke ek fire chali ki nahi ab toh mai puri mhenat karunga, and from that day and with Sneha didi's mentorship talks I  started to study consistently. In Brief, She is an amazing mentor you can get from this mentorship batch.",

      name: "Sumeet Kumar",
      designation: "Topper, NEET 2020",
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="Testimonial">
      <h1>What Our Students Say?</h1>
      <div className="Testimonial-slider">
        <div className="Testimonial-slide-track">
          {testimonials.map((testimonial, index) => (
            <div className="Testimonial-slide" key={index}>
              <TestimonialCard
                cardImage={testimonial.cardImage}
                testimonialText={testimonial.testimonialText}
                // personImage={testimonial.personImage}
                name={testimonial.name}
                designation={testimonial.designation}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

