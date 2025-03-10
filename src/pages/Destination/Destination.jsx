import HeroImage from "../../assets/Destination-hero.jpg";

import "./Destination.css";
function DestinationPage() {
  return (
    <div className="destination-page">
      <DestinationPageHeroElement
        DestinationHeroImage={HeroImage}
        Text="Travel Destination In East Africa"
      />
    </div>
  );
}

function DestinationPageHeroElement({ DestinationHeroImage, Text }) {
  return (
    <div className="destinationPageHeroSection">
      <div className="destination-hero-section">
        <div className="overlay"></div>
        <img src={DestinationHeroImage} alt="" />
        <div className="DestinationContent">
          <p>{Text}</p>
        </div>
      </div>
    </div>
  );
}
export default DestinationPage;
