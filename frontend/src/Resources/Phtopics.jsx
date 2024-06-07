import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import data from "./Physicsdata.json";
import "./Phtopic.css";
import { Link } from "react-router-dom";

export default function TopicsPage() {
  const { id } = useParams();

  const chapter = data.find((chapter) => chapter.id.toString() === id);
  console.log("Topics in Chapter:", chapter.topics);

  return (
    <>
      <Navbar />
      <section id="TopicPage">
        <div
          className="TopicsPage
        "
        >
          {chapter.topics && chapter.topics.length > 0 ? (
            <div className="Topics">
              {chapter.topics.map((topic, index) => (
                <li key={index} className={`topic-item topic-${index}`}>
                  <div className="topic-title">
                    <div className="line"></div>
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
