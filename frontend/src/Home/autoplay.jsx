import "./autoplay.css";
import IITR from "../assets/images/IITR-logo 2.png";
import IITBHU from "../assets/images/IITBHU-logo 2.png";
import JT from "../assets/images/JT-logo 2.png";
import TEDx from "../assets/images/TEDx.png";

export default function Autoplay() {
  return (
    <>
      <div className="header-slider">
        <div className="header-slide-track">
          <div className="header-slide">
            <img src={IITR} alt="" />
          </div>

          <div className="header-slide">
            <img src={IITBHU} alt="" />
          </div>

          <div className="header-slide">
            <img src={JT} alt="" />
          </div>

          <div className="header-slide">
            <img src={TEDx} alt="" />
          </div>

          <div className="header-slide">
            <img src={IITR} alt="" />
          </div>

          <div className="header-slide">
            <img src={IITBHU} alt="" />
          </div>

          <div className="header-slide">
            <img src={JT} alt="" />
          </div>

          <div className="header-slide">
            <img src={TEDx} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
