import "./privacy.css"
import Navbar from "../Mentorship/Navbar";
export default function Policy(){
    return (
      <>
        <section id="Privacy">
          <div className="privacy">
            <Navbar />
            <div className="privacy-header">
              <h1>Privacy Policy</h1>
              <p>
                Please read this agreement carefully, as it contains important
                information regarding your legal rights and remedies.
              </p>
            </div>
          </div>
          <div className="privacy-content">
            <p>
              The English version of legal agreements and policies is considered
              as the only current and valid version of this document. Any
              translated version is provided for your convenience only, to
              facilitate reading and understanding of the English version. Any
              translated versions are not legally binding and cannot replace the
              English versions. In the event of disagreement or conflict, the
              English language legal agreements and policies shall prevail.
            </p>
          </div>
        </section>
      </>
    );
}