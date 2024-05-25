import "./slider.css";
export default function Slider() {
  $(document).ready(function () {
    $(".carousel").carousel({
      indicators: true,
    });
  });
  return (
    <>
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
    </>
  );
}
