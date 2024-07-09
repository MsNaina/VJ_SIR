import { useState } from "react"

import "./FAQ.css"
export default function FAQ(){

    const [selected , setSelected]=useState(null)
    const toggle =(i)=>{
        if(selected===i){
            return setSelected(null)
        }
       
        setSelected(i)
        }
    return (
      <>
        <section id="FAQ">
          
            <div className="FAQs">

              <div className="FAQ-left">
                <div className="faq">
                  <h2>
                    <span>Frequently</span>
                  </h2>
                  <h2>asked</h2>
                </div>
                <h2>questions.</h2>
              </div>

              <div className="FAQ-right wrapper">
                <div className="accordion">
                  {data.map((item, i) => (
                    <div className="item">
                      <div className="title" onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? "-" : "^"}</span>
                      </div>

                      <div
                        className={selected === i ? "content show" : "content"}
                      >
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
         
        </section>
      </>
    );
}
const data = [
  {
    question: "How will the mentorship benefit me?",
    answer:
      " Students benefit from personalized mentorship sessions with their assigned mentor every week, providing dedicated time for addressing queries, clarifying concepts, and setting goals.",
  },

  {
    question: "Are there any success stories from VJ Sir's previous students?",
    answer:
      "Yes, VJ Sir has mentored JEE Advanced 2014 AIR 1, Chitraang Murdia and you can find all the success stories in his YouTube channel itself.",
  },

  {
    question: "What sets VJ Sir’s mentorship apart?",
    answer:
      "Compatible Mentor for every Mentee and On-on-one session every week with the mentor where the would be tacking their progress throughout the week. The mentors would not only be solving general academic issues but also subject doubts.",
  },

  {
    question: "Can I interact with VJ sir directly?",
    answer:
      "Yes, every Sunday at 9 pm VJ Sir will be conducting a zoom session with thee students.",
  },

  {
    question: "What are the different batches available for mentorship?",
    answer:
      "There's no batch available, the mentorship will run in phases. Yu can join whenever you want.",
  },

  {
    question: "What will be the duration of the mentorship?",
    answer:
      " It's a yearlong mentorship program and you can join whenever you want.",
  },
];