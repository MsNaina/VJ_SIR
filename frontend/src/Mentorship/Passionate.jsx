import "./passionate.css";
import CardsCollection from "./CardsCollection";
export default function Passionate() {
  return (
    <>
      <section id="Passionate">
        <div className=" passionate-heading">
          <h1>
            Passionate <span>Mentors</span>
          </h1>
          <h2>Dedicated To Help You</h2>

          <div className="passionate-pera">
            <div className="passionate-line"></div>
            <p>
              “A teacher’s job is to take a bunch of live wires abd see that
              they are well grounded. Teaching is the profession that teaches
              all the other professions.”
            </p>
          </div>
        </div>

        <div className="mentorship-footer">
          <div>
            <h1>
              Connect <br /> and <br />
              Grow.
            </h1>

            <div className="mentorship-footerimg">
              <img src="images\mentorship-footer.png" alt="" />

              <h2>Find your compatible mentor <span>G0!!</span></h2>
            </div>
          </div>

          <CardsCollection />
        </div>
      </section>
    </>
  );
}
