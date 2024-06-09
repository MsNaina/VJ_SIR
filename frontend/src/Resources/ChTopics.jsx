import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import Chdata from "./chemistrydata.json";
import "./Phtopic.css";
import { Link } from "react-router-dom";

export default function ChTopicsPage() {
  const { id } = useParams();

  const chapter = Chdata.find((chapter) => chapter.id.toString() === id);
console.log("Received ID from params:", id);
console.log("Found Chapter:", chapter);

  console.log("Topics in Chapter:", chapter.topics);
  return (
    <>
      <Navbar />
      <section id="TopicPage">
        <div className="TopicsPage">
          <p>Modules</p>
          {chapter.topics && chapter.topics.length > 0 ? (
            <div className="Topics">
              {chapter.topics.map((topic, index) => (
                <li key={index} className={`topic-item topic-${index}`}>
                  <div className="topic-title">
                    <div className="Line"></div>
                    <h3>{topic.title}</h3>
                  </div>
                  <div className="Attempt">
                    <Link to={`/quiz/${topic.id}`}>
                      <button className="attempt-button">Attempt</button>
                    </Link>
                  </div>
                </li>
              ))}
            </div>
          ) : (
            <p>No topics available</p>
          )}
        </div>
      </section>
    </>
  );
}
