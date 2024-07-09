import "./footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <>
      <section id="Footer">
        <div className="footer-content">
          <div className="footer-left">
            <h4>
              <NavLink to="/privacypolicy" onClick={scrollToTop}>
                Privacy Policy
              </NavLink>
            </h4>

            <h4>
              <NavLink to="/Terms&condition" onClick={scrollToTop}>
                Terms of Use
              </NavLink>
            </h4>
            <h4>
              <NavLink to="/RefundPolicy" onClick={scrollToTop}>
                Refund Policy
              </NavLink>
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
