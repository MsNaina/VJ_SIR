import "./privacy.css";
import Navbar from "../Mentorship/Navbar";
import Wavefooter from "./Wavefooter"
import Footer from "./footer"
export default function Terms(){
    return (
      <>
        <section id="Privacy">
          <div className="privacy">
            <Navbar />
            <div className="privacy-header">
              <h1>Terms & Conditions</h1>
              <p>
                Please read this agreement carefully, as it contains important
                information regarding your legal rights and remedies.
              </p>
            </div>
          </div>
          <div className="privacy-content">
            <div className="privacy-pera">
              <p>
                The English version of legal agreements and policies is
                considered as the only current and valid version of this
                document. Any translated version is provided for your
                convenience only, to facilitate reading and understanding of the
                English version. Any translated versions are not legally binding
                and cannot replace the English versions. In the event of
                disagreement or conflict, the English language legal agreements
                and policies shall prevail.
              </p>
            </div>

            <div className="main-content subinfo-privacy">
              <ul>
                <li>
                  <span>Voluntary Admission Acknowledgement:</span> By
                  enrolling, you acknowledge that your application for admission
                  is voluntary and driven by your own interest and accord.
                </li>
                <li>
                  <span>Publicity Rights: </span>In the event of your selection
                  for Medical/Engineering Entrance Exams/NTSE & Olympiads, the
                  institute reserves the right to utilize your name, photograph,
                  and other pertinent information for promotional purposes
                  across both print and electronic media platforms.
                </li>
                <li>
                  <span>Result Publication:</span> The institute retains the
                  authority to publicly disclose your competitive exam results
                  on various websites, social media channels, and other relevant
                  platforms.
                </li>
                <li>
                  <span>Communication Consent:</span> You consent to receiving
                  communications via email (including e-newsletters), SMS
                  alerts, WhatsApp messages (including text, images, videos, and
                  documents), and other forms of digital correspondence sent to
                  the contact details provided by you.
                </li>
                <li>
                  <span>Adherence to Instructions:</span> You affirm that you
                  have thoroughly reviewed and agree to abide by all
                  instructions stipulated in the Information Bulletin or
                  available through online resources pertaining to the admission
                  process.
                </li>
                <li>
                  <span>Enrollment Terms:</span> Once enrolled and following
                  complete payment, no modifications or cancellations to your
                  chosen package will be permitted. Additionally, no refunds
                  will be issued after enrollment is finalized.
                </li>
                <li>
                  <span>Program Duration:</span>
                  Your admission pertains specifically to the ongoing academic
                  year's three-month program duration.
                </li>
              </ul>
            </div>
          </div>

          <Wavefooter />
          <Footer />
        </section>
      </>
    );
}