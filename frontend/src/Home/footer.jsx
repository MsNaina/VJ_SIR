import "./footer.css";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <section id="Footer">
        <div className="footer-content">
          <div className="footer-left">
            <h4>
              <NavLink to="/privacypolicy">Privacy Policy</NavLink>{" "}
            </h4>

            <h4>Terms of Use</h4>
            <h4>
              <NavLink to="/privacypolicy">Refund Policy</NavLink>{" "}
            </h4>
          </div>

          <div className="footer-right">
            All Right Reserved @VJ Nucleus Pvt. Ltd.com
          </div>
        </div>
      </section>
    </>
  );
}
