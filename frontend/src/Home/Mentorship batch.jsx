import React, { useEffect, useRef, useState } from "react";

import "./Mentorship batch.css";
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
            <div className="mentorship-img1 mentorship-img">
              <img src="images\chitrang.png" alt="" />
            </div>

            <div className="mentorship-img2 mentorship-img">
              <img src="images\Group 8.png" alt="" />

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
                          <div className="w-10 h-10 rounded-full bg-white">
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
                          <div className="w-10 h-10 rounded-full bg-white">
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
                  <h4>₹8,000</h4>
                </div>

                <div className="discount">
                  <img src="images\discount.png" alt="" />

                  <div className="Discount">
                    <img src="images\pencil.png" alt="" />
                    <p>Discount of 37.5% applied</p>
                  </div>
                </div>
              </div>

              <div className="mentorship-btn">
                <button className="btn3">Explore</button>
                <button className="btn4">Buy Now</button>
              </div>
            </div>

            <div className="mentorship-img3 mentorship-img">
              <img src="images\himanshu.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
