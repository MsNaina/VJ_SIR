import { useState } from "react";
import sneha from "/sneha.jpeg";
const cards = [
  {
    title: "Sneha Verma",
    image: sneha,
    college: "IIT Roorkee",
  },
  {
    title: "Sneha Verma",
    image: sneha,
    college: "IIT Roorkee",
  },
  {
    title: "Sneha Verma",
    image: sneha,
    college: "IIT Roorkee",
  },
  {
    title: "Sneha Verma",
    image: sneha,
    college: "IIT Roorkee",
  },
];

const CardsCollection = () => {
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
  // eslint-disable-next-line react/prop-types
  const { image, title, active, onClick, college } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        width: active ? "25rem" : "10rem",
      }}
      onClick={onClick}
      className="card"
    >
      <div style={{ opacity: active ? 0 : 1 }} className="card-overlay">
        <div className="card-title">{title}</div>
      </div>
      <div style={{ opacity: active ? 1 : 0 }} className="card-description">
        <span>{title}</span>
        <span className="card-college">-{college}</span>
      </div>
    </div>
  );
};

export default CardsCollection;