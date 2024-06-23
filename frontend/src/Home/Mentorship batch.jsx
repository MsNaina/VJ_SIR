import React, { useEffect, useRef, useState } from "react";
import "./Mentorship batch.css";
import Eyes from  "./eye.jsx"
import { Link } from "react-router-dom";
import Chitrang from "../assets/images/chitrang.png";
import Group8 from "../assets/images/Group 8.png";
import Himanshu from "../assets/images/himanshu.png";
import Discount from "../assets/images/discount.png";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Mentorship() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltax = mouseX - window.innerWidth / 2;
      let deltay = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <>
      {/* <Eyes/> */}
      <section id="Mentorship">
        <div className="Mentorship">

          <div className="mentorship-text">
            <h1>Mentorship Program</h1>
            <h2> JEE Main & Advanced </h2>
            <p>
              Welcome to the ultimate mentorship experience designed to elevate
              your JEE Main & Advance preparation journey. Join the exclusive VJ
              Sir’s Mentorship Batch and unlock the path to success in JEE.
            </p>
          </div>

          <div className="mentorship-imgs">

            {/* <div className="mentorship-img1"> */}
              <div className="mentorship-img1 mentorship-img">
                <img src={Chitrang} alt="" />
              </div>
            {/* </div> */}

            <div className="mentorship-img2 mentorship-img">
              <img src={Group8} alt="" />

              <div className="eyes w-full ">
                <div className=" relative w-full h-full bg-cover bg-center ">
                  <div className="absolute flex gap-10 top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                    <div className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white">
                      <div className=" relative w-2/3 h-2/3 rounded-full bg-black">
                        <div
                          style={{
                            transform: `translate(-50% ,-50%) rotate(${rotate}deg)`,
                          }}
                          className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                        >
                          <div className="w-[2.4vw] h-[2.4vw] rounded-full bg-white">
                            {" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-white">
                      <div className=" relative w-2/3 h-2/3 rounded-full bg-black">
                        <div
                          style={{
                            transform: `translate(-50% ,-50%) rotate(${rotate}deg)`,
                          }}
                          className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                        >
                          <div className="w-[2.4vw] h-[2.4vw] rounded-full bg-white">
                            {" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mentorship-price">
                <div className="price">
                  <h3>₹5,000/-</h3>
                  <div>
                    <h4>₹8,000</h4>
                    <h6>for 3 Months</h6>
                  </div>
                </div>

                <div className="discount">
                  <img src={Discount} alt="" />
                </div>
              </div>

              <div className="mentorship-btn">
                <button className="btn3" onClick={scrollToTop}>
                  <Link to="/Mentorship">Explore</Link>
                </button>
                <button className="btn4">Buy Now</button>
              </div>
            </div>

            {/* <div className="mentorship-img3"> */}
              <div className="mentorship-img3 mentorship-img">
                <img src={Himanshu} alt="" />
              </div>
            {/* </div> */}

          </div>
        </div>
      </section>
    </>
  );
}
