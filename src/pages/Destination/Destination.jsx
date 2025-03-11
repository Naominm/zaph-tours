import HeroImage from "../../assets/Destination-hero.jpg";
import featuredDestinations from "../../data/FeaturedDestinationData";
import FooterElement from "../../components/Footer/Footer";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import "./Destination.css";

function DestinationPage() {
  return (
    <div className="destination-page">
      <DestinationPageHeroElement
        DestinationHeroImage={HeroImage}
        Text="Travel Destination In East Africa"
      />
      <div className="travel-destination">
      {featuredDestinations.map((destination, index) => (
            <FeaturedDestinationElement
              key={index}
              Image={destination.image}
              Text={destination.name}
              Icon={<FaHeart />}
              Description={destination.description}
              Price={`Ksh${destination.individualCost}`}
              GroupPrice={`Ksh${destination.pricePerGroup}`}
            />
          ))}
      </div>
      <DestinationCallToAction/>
<FooterElement/>
    </div>
  );
}
 function DestinationCallToAction(){
  return(
    <div className="DstCall-toAction">
<button className="main-cta">View more Destinations</button>
</div>
  )
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
      <div className="Destination-sec">
        <h2> Major Travel Destinations</h2>
      </div>
    </div>
  );
}
function FeaturedDestinationElement({ Image, Text, Icon, Description, Price,GroupPrice }) {
  return (
    <div className="fdElements">
      <div className="featured-destinations">
        <div className="featuredContent">
          <div className="image-wrapper-container-featured">
            <div className="overlay-f"></div>
            <img src={Image} alt="major " />
            <div className="icon-container">{Icon}</div>
          </div>
        </div>
        <div className="content-featured">
          <p>{Text}</p>
        </div>
      </div>
      <div className="description-per-destination">
        <p>{Description}</p>
      </div>
      <div className="price-area-element">
      <div className="price-per-destination">
        <p><FaUser/></p><p>{Price}</p>
      </div>
      <div className="price-per-destination">
<FaUserFriends/><p>{GroupPrice}</p>
      </div>
      </div>
      <button className="destination-cta">view detail</button>
      
    </div>
  );
}
export default DestinationPage;
