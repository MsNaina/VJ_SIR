import "./map.css"
export default function Map(){
return (
  <>
    <section id="Map">
      <div className="map">
        
        <img className="map-img" src="images\map.png" alt="" />

        <div className="iits-location">
          <img className="IITB IIT" src="images\bombay.png" alt="" />
        </div>

        <div className="iits-location">
          <img className="IITD IIT" src="images\delhi.png" alt="" />
        </div>

        <div className="iits-location">
          <img className="IITR IIT" src="images\roorkee.png" alt="" />
        </div>

        <div className="iits-location">
          <img className="IITM IIT" src="images\madras.png" alt="" />
        </div>

        <div className="iits-location">
          <img className="IITK IIT" src="images\kanpur.png" alt="" />
        </div>

        <div className="iits-location">
          <img className="IITG IIT" src="images\guwahti.png" alt="" />
        </div>

        <div className="iits-location">
          <img className="IITKGP IIT" src="images\kgp.png" alt="" />
        </div>
      </div>
    </section>
  </>
);
}