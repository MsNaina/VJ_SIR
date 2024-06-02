import React, { useRef, useState } from "react";

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
            <img
              className="Books-text-img1"
              src="images\upper coma.png"
              alt=""
            />

            <h1>Books Emporium</h1>

            <img
              className="Books-text-img2"
              src="images\down coma.png"
              alt=""
            />
          </div>

          <div className="carousel">
            <a href="#one" className="carousel-item">
              <img src="images\JEE.png" alt="" />
            </a>
            <a href="#two" className="carousel-item">
              <img src="images\NEET_I.png" alt="" />
            </a>
            <a href="#three" className="carousel-item">
              <img src="images\NEET_II.png" alt="" />
            </a>
            <a href="#four" className="carousel-item">
              <img src="images\JEE.png" alt="" />
            </a>
            <a href="#five" className="carousel-item">
              <img src="images\NEET_I.png" alt="" />
            </a>
            <a href="#six" className="carousel-item">
              <img src="images\NEET_II.png" alt="" />
            </a>
          </div>

          <div className="books-btn">
            <button>Buy Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
