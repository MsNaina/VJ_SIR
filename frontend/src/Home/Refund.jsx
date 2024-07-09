import "./privacy.css"
import Navbar from "../Mentorship/Navbar";
import Wavefooter from "./Wavefooter";
import Footer from "./footer";
export default function Refund(){
    return (
      <>
        <section id="Privacy">
          <div className="privacy">
            <Navbar />
            <div className="privacy-header">
              <h1>Refund Policy</h1>
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
                  Please read the terms and conditions thoroughly before
                  subscribing to any plan. Once you have subscribed and made the
                  payment, the subscription is final. You cannot change or
                  cancel your subscription plan after subscribing. No
                  modifications will be allowed once the payment is complete,
                  and refunds are not available for any subscription plans.
                  Ensure you fully understand the terms before making a payment,
                  as your subscription will be locked in upon payment. Carefully
                  consider your choice, as it cannot be reversed. is voluntary
                  and driven by your own interest and accord.
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