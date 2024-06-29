import "./footer.css"
import { NavLink } from "react-router-dom"
export default function Footer(){
    return (
      <>
        <section id="Footer">
          <div className="footer-content">
            <div className="footer-left">
              <h4>
               
                <NavLink to="/privacypolicy">Privacy Policy</NavLink>{" "}
              </h4>
              <h4>Terms of Use</h4>
              <h4>Content Policy</h4>
            </div>

            <div className="footer-right">All Right Reserved @vjsir.com</div>
          </div>
        </section>
      </>
    );
}