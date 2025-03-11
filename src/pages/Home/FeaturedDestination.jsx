import { FaHeart } from "react-icons/fa";
import featuredDestinations from "../../data/FeaturedDestinationData";

import "./FeaturedDestination.css";
function FeaturedDestination() {
  return (
    <div className="main-feature-container">
      <h3>Featured Destination</h3>
      <div className="featured-destination-container">
        <div className="scroll-wrapper">
          {featuredDestinations.map((destination, index) => (
            <FeaturedDestinationElement
              key={index}
              Image={destination.image}
              Text={destination.name}
              Icon={<FaHeart />}
              Description={destination.description}
              Price={`Ksh${destination.individualCost}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedDestinationElement({ Image, Text, Icon, Description, Price }) {
  return (
    <div className="fdestinationElements">
      <div className="featured-destinations">
        <div className="featuredContent">
          <div className="image-wrapper-container-featured">
            <div className="overlay-f"></div>
            <img src={Image} alt="major " />
            <div className="icon-container">{Icon}</div>
          </div>
        </div>
        <div className="content-featured-featured">
          <p>{Text}</p>
        </div>
      </div>
      <div className="description-per-destination">
        <p>{Description}</p>
      </div>
      <div className="price-per-destination">
        <p>{Price}</p>
      </div>
    </div>
  );
}

export default FeaturedDestination;
