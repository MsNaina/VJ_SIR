import "./Testimonial.css";
import "./TestimonialCard.jsx"
import TestimonialCard from "./TestimonialCard.jsx";
export default function Testimonial() {
  return (
    <>
      <section id="Testimonial">
        <h1>What Our Students Say?</h1>

        <div className="Testimonial-slider">
          <div className="Testimonial-slide-track">
            <div className="Testimonial-slide">
              <TestimonialCard />
            </div>

            <div className="Testimonial-slide">
              <TestimonialCard />
            </div>

            <div className="Testimonial-slide">
              <TestimonialCard />
            </div>

            <div className="Testimonial-slide">
              <TestimonialCard />
            </div>

            <div className="Testimonial-slide">
              <TestimonialCard />
            </div>

            <div className="Testimonial-slide">
              <TestimonialCard />
            </div>

            <div className="Testimonial-slide">
              <TestimonialCard />
            </div>

            <div className="Testimonial-slide">
              <TestimonialCard />
            </div>

            <div className="Testimonial-slide">
              <TestimonialCard />
            </div>

            <div className="Testimonial-slide">
              <TestimonialCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
