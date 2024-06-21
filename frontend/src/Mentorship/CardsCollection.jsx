import { useState } from "react";
import "./CardCollection.css"
import Aayushi from "../assets/images/Aayushi IITR.jpg"
import Nikhil from "../assets/images/Nikhil Upadhyay IITB.jpg";
import Aakash from "../assets/images/Akash IITM.jpg";
import Vrutika from "../assets/images/Vrutika Rao IITK.jpg";
const cards = [
  {
    title: "Nikhil Upadhyay",
    image:  Nikhil ,
    college: "IIT Bombay",
  },
  {
    title: "Aayushi",
    image: Aayushi,
    college: "IIT Roorkee",
  },
  {
    title: "Aakash Pal",
    image: Aakash,
    college: "IIT Delhi",
  },
  {
    title: "Vrutika",
    image: Vrutika,
    college: "IIT Kanpur",
  },
]
export default function CardsCollection () {
  const [activeCard, setActiveCard] = useState(0);
  return (

    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={"card" + index}
          title={card.title}
          image={card.image}
          active={index === activeCard}
          college={card.college}
          onClick={() => setActiveCard(index)}
        />
      ))}
    </div>
  );
};

const Card = (props) => {
  const { image, title, active, onClick, college } = props;
  return (
    <>

     <div
       style={{
        backgroundImage: `url(${image})`,
      }}
      onClick={onClick}
      className={`card ${active ? "active" : ""}`}
    >
      <div style={{ opacity: active ? 0 : 1 }} className="card-overlay">
        <div className="card-title">{title}</div>
      </div>
      <div style={{ opacity: active ? 1 : 0 }} className="card-description">
        <span>{title}</span>
        <span className="card-college">-{college}</span>
      </div>
    </div>
</>
  );
};
