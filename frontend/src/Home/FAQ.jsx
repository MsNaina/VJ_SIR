import { useState } from "react"

import "./FAQ.css"
export default function FAQ(){

    const [selected , setSelected]=useState(null)
    const toggle =(i)=>{
        if(selected==i){
            return setSelected(null)
        }
       
        setSelected(i)
        }
    return(
<>
  <section id="FAQ">     
  
  <div className="faq">

<div className="FAQs">
    <div className="FAQ-left">

        <h2><span>Frequently</span></h2>
        <h2>asked</h2>
        <h2>questions.</h2>
    </div>

<div className="FAQ-right wrapper">

<div className="accordion">

    {data.map((item,i)=>(
       
       <div className="item">

        <div className="title" onClick={()=> toggle(i)}>
    
            <h2>{item.question}</h2>
            <span>{selected ===i ? '-' : "^"}</span>
        </div>

        <div className={selected ===i ? 'content show' : "content"}>
            {item.answer}
        </div>

        </div>
    ))}
</div>

</div>

</div>

  </div>
  </section>       
</>
    )
}
const data =[

{
    question:"How will the mentorship benefit me?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis est esse sit similique quia placeat accusantium aliquam rem libero?"
},

{
    question:"Are there any success stories from VJ Sir's previous students?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ipsum?"
},

{
    question:"What sets VJ Sir’s mentorship apart?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ipsum?"
},

{
    question:"Can I interact with VJ sir directly?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ipsum?"
},

{
    question:"What are the different batches available for mentorship?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ipsum?"
},


{
    question:"What will be the duration of the mentorship?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, ipsum?"
},

]