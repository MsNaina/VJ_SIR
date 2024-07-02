import "./payment.css";
import Navbar from "../Mentorship/Navbar";
export default function Payment() {
  return (
    <>
      <section id="Payment">
        <Navbar />
        <div className="payment">
          <div className="payment-left"></div>
          <div className="payment-right">
            <div className="payment1">
              <p>
                Choose the <span> PAY NOW</span> option to continue with
                checkout. You will still have a chance to review and edit your
                order before it is finalized.
              </p>
            </div>

            <div className="Payment2">
              <h1>Order Summary</h1>

              <div className="payment211">
                <div className="payment21">
                  <h2>Item Name</h2>
                  <h3>Mentorship Session'25</h3>
                </div>

                <div className="payment22">
                  <h2>Price</h2>
                  <h3>₹5,000</h3>
                </div>
              </div>
            </div>
            <div className="payment3">
              <h2>Order Total</h2>
              <h3>₹5,000</h3>
            </div>

            <div className="payment-btn">
              <button>PAY NOW</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
