import "./TestimonialCard.css";
export default function TestimonialCard() {
  return (
    <>
      <div className="Testimonial-cards">
        <img src="\images\testimonial.png" alt="" />
        <div className="testimonial-content">
          <p>
            Achieving AIR Rank 1 in JEE was a dream come true, made possible by
            VJ sir's unparalleled guidance and dedication. His deep
            understanding and innovative teaching methods inspired and equipped
            me to excel beyond my expectations.
          </p>

          <img
            className=" testimonial-img"
            src="\images\testimonialimg.png"
            alt=""
          />
          <div className="testimonial-text">
            <h2>Chitraang Murdia</h2>
            <h3>-AIR 1, JEE ADVANCED 2014</h3>
          </div>
        </div>
      </div>
    </>
  );
}
