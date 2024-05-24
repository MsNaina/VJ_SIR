import React, { useRef, useState } from "react";
import "./Feature.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function Feature() {
  return (
    <>
      <section className="Features">
        <h2>Features</h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          //  pagination={{
          //    clickable: true,
          //  }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" features feature1">
              <img src="images\F1.png" alt="" />
              <h3>Personalized Matching</h3>
              <p>
                Utilizing advanced machine learning algorithms, we match each
                student with an IITian mentor based on their individual
                strengths and weaknesses, ensuring tailored guidance for optimal
                learning.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" features feature2">
              <img src="images\F2.png" alt="" />
              <h3>Continuous Monitoring</h3>
              <p>
                From the moment a student enrolls in the mentorship batch, their
                progress is closely monitored by their assigned mentor, ensuring
                accountability and timely intervention when needed.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" features feature3">
              <img src="images\F3.png" alt="" />
              <h3>Exclusive Sessions with VJ Sir</h3>
              <p>
                Every Sunday, students have the invaluable opportunity to
                participate in special mentorship sessions with the renowned
                educator, Mr. Vishal Joshi (VJ Sir), gaining insights and
                strategies directly from an expert in the field
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="features feature4">
              <img src="images\F4.png" alt="" />
              <h3>Weekly 1-on-1 Sessions</h3>
              <p>
                Students benefit from personalized mentorship sessions with
                their assigned mentor every week, providing dedicated time for
                addressing queries, clarifying concepts, and setting goals.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="features feature5">
              <img src="images\F5.png" alt="" />
              <h3>Customized DPPs</h3>
              <p>
                Leveraging AI/ML algorithms, custom DPPs are designed for each
                student based on their performance in recent mock tests. These
                DPPs focus more on the student's weak areas, providing targeted
                practice for improvement.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="features feature6">
              <img src="images\F6.png" alt="" />
              <h3>Rapid Doubt Resolution</h3>
              <p>
                With our 24-hour doubt-solving facility, students receive prompt
                assistance whenever they encounter challenges or have questions,
                ensuring uninterrupted progress in their preparation journey.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
