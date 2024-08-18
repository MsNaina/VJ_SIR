import React from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard.jsx";
import Testimonialcard from "../assets/images/testimonial.png";

export default function Testimonial() {
  const testimonials = [
    {
      cardImage: Testimonialcard,
      testimonialText:
        "I'm a dropper and I follow your lectures...sir your explanation of every concept , even theory ...is beyond everything . you've helped a lot",
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
      "Sir Love from Bihar Sir aapse IOC padhne Ke Baad Mujhe kota Factory Wale IOC ke teacher ki baat glt Ig rhi hai Sach me sir aap se padhne ke pehle Ques phle baar baar atakte the lekin aapse padhne ke baad mere IOC bahut aachi hi ho gayi. Bas Thora yaad nhi rhta hai Lekin samjh sb aata h kuch ratna nhi prta hai Really sir You are Great Daily aapko dekhta hu Me lekin Daily nhi milta nhi hu sochta hu ki result ke baad milunga Tab Milne me Aur aacha Igega ",


      name: "",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "Really thank you Sir. Aab mera koi bhi backlog nahi baccha hua hai Sir. They way you told how cover backlogs really helped me sir. Being, a NEET student apne jis tarah mujhe time management karne ke liye kaha it really helped me sir. Mera jo ek major problem tha ki ek question ke picche main jyada time detaa tha, woh bhi abhi dhire dhire sudhar raha hauin Sir. Really your mentorship will help me get AIR sir.",
      name: "",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "Good morning sir; i would like to appreciate your idea of making a platform of mentors like this i got a mentor named Nikhil Upadhyay from IIT Bombay and it was very nice to meet him i felt like i am talking to my self from future his journey and my journey are almost same and i think he can guide me the best in future pros: no of students are divided at very good ration among mentor and mentors are high quality and are very compatible for me to guide in my journey",
      name: "",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "Sir i am Kartavya and mai starting se mentorship me hun... My improvement- sir pehle meri self study hoti hi nahi thi but apke session me samjhane ke bad maine apna usko improve Kiya and classes ke alawa 4 hrs self study ke ho jate hai...And sir my second improvement is apne jo timetable Diya tha uske upar mera full command hai means 11 Tak so jata hun and 5.50 and 6 morning Tak uth jata hun..",
      name: "Kartavya",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "Pranam Sir I have got Computer Engineering in top state college of Uttarakhand i.e. College of Technology, Pantnagar. Sir I am very grateful and blessed 6 that I was mentored by you. I think I could have got better rank if this mentorship would have started in the starting of the session. But whatever the situation was you made the path easier.Once again thanks a lot Sir! ",
      name: "",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "our mentorship program, sir mere mentor kishan sing bhaiya hai from iit roorkee..I am very thankful to you, because of you I got him as a mentor, he is literally awesome mentor, mai ek dropper student hu, jab 12th me mai preperation karta tha mujhe ek chez ki kami mehsus hota tha..kyuki mujhe guide karne wala koi nhi tha..ab mujhe samajh aa rha hai ki kyu preperation me ek mentor ki jarurat hai.....unse milne ke baad mere productivity bohot badh gaya hai.....and abhi mere andar confidence develop ho gaya.....agle saal jee jarur phodenge sir",
      name: "",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "I am writing to express my sincere gratitude for the free mentorship sessions you have been providing. Your guidance has been immensely helpful for students like me who are preparing for JEE on their own. I kindly request you to continue these sessions until JEE 2026. Your guidance is invaluable, and I believe it will make a significant difference in our preparation. I eagerly anticipate your reply.Thank you for your time and consideration",
      name: "Sujay",
    },

    {
      cardImage: Testimonialcard,
      testimonialText:
      "Good evening sir.. Sir IIT Mandi mil gyi Thankyou so much sir for all your blessings and support...!! Aapke constant motivation or guidance se finally IIT mil gyi sir... Aap ko jitta bhi thankyou bolu kam Pr literally Thankyou so much sir.....ur every effort made a lasting change in me.",
      name: "",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "Hello sir! Myself Vidhi Sachan from N*2 batch (2020 jee batch). I was watching Kota Factory Season 3 and I really found that series very relatable and true. Jeetu bhaiya reminded me of you sir. You have helped me in so many ways that even you might not be aware of. But i want to say THANK YOU from all my heart. Whenever i think or talk about Kota, there is not a single discussion where your name 'VJ Sir' doesn't come.",     
      name: "Vidhi",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "I am writing to express my sincere gratitude for the free mentorship sessions you have been providing. Your guidance has been immensely helpful for students like me who are preparing for JEE on their own. I kindly request you to continue these sessions until JEE 2026. Your guidance is invaluable, and I believe it will make a significant difference in our preparation. I eagerly anticipate your reply.Thank you for your time and consideration",
      name: "Sujay",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "I am writing to express my sincere gratitude for the free mentorship sessions you have been providing. Your guidance has been immensely helpful for students like me who are preparing for JEE on their own. I kindly request you to continue these sessions until JEE 2026. Your guidance is invaluable, and I believe it will make a significant difference in our preparation. I eagerly anticipate your reply.Thank you for your time and consideration",
      name: "Sujay",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "I am writing to express my sincere gratitude for the free mentorship sessions you have been providing. Your guidance has been immensely helpful for students like me who are preparing for JEE on their own. I kindly request you to continue these sessions until JEE 2026. Your guidance is invaluable, and I believe it will make a significant difference in our preparation. I eagerly anticipate your reply.Thank you for your time and consideration",
      name: "Sujay",
    },
    {
      cardImage: Testimonialcard,
      testimonialText:
      "I am writing to express my sincere gratitude for the free mentorship sessions you have been providing. Your guidance has been immensely helpful for students like me who are preparing for JEE on their own. I kindly request you to continue these sessions until JEE 2026. Your guidance is invaluable, and I believe it will make a significant difference in our preparation. I eagerly anticipate your reply.Thank you for your time and consideration",
      name: "Sujay",
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
