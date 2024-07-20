import { Link } from "react-router-dom";
import Uppercoma from "../assets/images/upper coma.png"
import Downcoma from "../assets/images/down coma.png";
import JEE from "../assets/images/JEE.png";
import NEET1 from "../assets/images/NEET_I.png";
import NEET2 from "../assets/images/NEET_II.png";

import "./Books.css";
export default function Books() {
  $(document).ready(function () {
    $(".carousel").carousel({
      indicators: true,
    });
  });
  return (
    <>
      <section id="Books">
        <div className="Books">
          <div className="Books-text">
            <img className="Books-text-img1" src={Uppercoma} alt="" />

            <h1>Books Emporium</h1>

            <img className="Books-text-img2" src={Downcoma} alt="" />
          </div>

          <div className="carousel">
            <a href="#one" className="carousel-item">
              <img src={JEE} alt="" />
            </a>
            <a href="#two" className="carousel-item">
              <img src={NEET1} alt="" />
            </a>
            <a href="#three" className="carousel-item">
              <img src={NEET2} alt="" />
            </a>
            <a href="#four" className="carousel-item">
              <img src={JEE} alt="" />
            </a>
            <a href="#five" className="carousel-item">
              <img src={NEET1} alt="" />
            </a>
            <a href="#six" className="carousel-item">
              <img src={NEET2} alt="" />
            </a>
          </div>

          <div className="books-btn">
            <button>
              <Link to="https://amzn.in/d/fhOBX8f ">Buy Now</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
