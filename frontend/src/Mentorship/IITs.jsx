import "./IITs.css";
import IITB from "../assets/images/IITB.png";
import IITD from "../assets/images/IITD.png";
import IITR from "../assets/images/IITR.png";
import IITK from "../assets/images/IITK.png";
import IITKGP from "../assets/images/IITKGP.png";
import IITM from "../assets/images/IITM.png";
import IITG from "../assets/images/IITG.png";

export default function IITs() {
  return (
    <>
      <section className="IITs-logo">
        <h2>India’s Top 1% IITian Mentors from</h2>

        <div className="iits-logo">
          <img src={IITB} alt="" />
          <img src={IITD} alt="" />
          <img src={IITR} alt="" />
          <img src={IITK} alt="" />
          <img src={IITKGP} alt="" />
          <img src={IITM} alt="" />
          <img src={IITG} alt="" />
        </div>
      </section>
    </>
  );
}
