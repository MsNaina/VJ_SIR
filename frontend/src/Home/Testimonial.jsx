import React from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard.jsx";
import Testimonialcard from "../assets/images/testimonial.png";

export default function Testimonial() {
  const testimonials = [
    {
      cardImage: Testimonialcard,
      testimonialText:
        "I'm a dropper from RELIABLE INSTITUTE... I follow your lectures from APNI KAKSHA ...sir your explanation of every concept , even theory ...is beyond everything . you've helped a lot",

      name: "Harshita",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        " I am feeling very thankful for your help and kindness and you proved that you are giving a very good thing to students as like aapne mujhe call kiya or guidence di thank you so much sir ...",

      name: "Adarsh Singh",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "I'm your student of NLP bactch 2019-20 , last friday ek company ka exam tha, 250 me 84 ke aas pass chune , unka coding round hua unme se 20 ko chune phir unme se 5 ka placement hua , aur me unme se ek hu . sir me IIT to nahi clear kar paya par sir kota aa kar mehnat karna sikh gaya .",

      name: "Ujjwal",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        " Sir plz aaap bass coordination chemistry ka bhi one shot lelo ...apni kaksha per chemical bonding jesa....VJ sir rocks Duniya socks #vj_army",

      name: "Aman",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "I'm a dropper from RELIABLE INSTITUTE... I follow your lectures from APNI KAKSHA ...sir your explanation of every concept , even theory ...is beyond everything . you've helped a lot",

      name: "Harshita",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        " I am feeling very thankful for your help and kindness and you proved that you are giving a very good thing to students as like aapne mujhe call kiya or guidence di thank you so much sir ...",

      name: "Adarsh Singh",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "I'm your student of NLP bactch 2019-20 , last friday ek company ka exam tha, 250 me 84 ke aas pass chune , unka coding round hua unme se 20 ko chune phir unme se 5 ka placement hua , aur me unme se ek hu . sir me IIT to nahi clear kar paya par sir kota aa kar mehnat karna sikh gaya .",

      name: "Ujjwal",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        " Sir plz aaap bass coordination chemistry ka bhi one shot lelo ...apni kaksha per chemical bonding jesa....VJ sir rocks Duniya socks #vj_army",

      name: "Aman",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        "I'm a dropper from RELIABLE INSTITUTE... I follow your lectures from APNI KAKSHA ...sir your explanation of every concept , even theory ...is beyond everything . you've helped a lot",

      name: "Harshita",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
        " I am feeling very thankful for your help and kindness and you proved that you are giving a very good thing to students as like aapne mujhe call kiya or guidence di thank you so much sir ...",

      name: "Adarsh Singh",
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
