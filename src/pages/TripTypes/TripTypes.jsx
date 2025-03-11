import { FaCircle } from "react-icons/fa";
import TripTypeHeroImage from "../../assets/trip-types-hero.jpg";
import tripTypes from "../../data/tripTypes";
import SearchElement from "../../components/Search/Search";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import FooterElement from "../../components/Footer/Footer";

import "./TripTypes.css";

function TripTypes() {
  return (
    <div className="trip-types-page">
      <TriTypesHeroSection HeroImage={TripTypeHeroImage} HeroImageText="You are meant to travel"/>
      <SearchElement/>
      {tripTypes.map((tripType, index) => (
        
  <DestinationElement
    key={index}
    Title={tripType.title}
    ImageGallery={tripType.images} 
    Description={tripType.description}
    Pricing={`${tripType.pricing.startingFrom} USD - ${tripType.pricing.groupDiscount}`}
  />
))}
<NewsLetter/>
<FooterElement/>

    </div>
  );
}

function TriTypesHeroSection({HeroImage, HeroImageText, ButtonIcon}){
  return(
<div className="trip-types-hero-element">
<div className="heroImageWrapper">
  <div className="overlay"></div>
  <img src={HeroImage} alt="" />
  <div className="hero-content-text">
   <div className="left-text-container">
   <p>{HeroImageText}</p>
    <div className="hero-content-cta">
      <button className="trip-cta">Discover More{ButtonIcon} </button>
    </div>
   </div>
    
    <div className="small-image-wrapper">
      <img src={HeroImage} alt="" />
    </div>
  </div>
</div>
    </div>
  )

}

function DestinationElement({Title, ImageGallery, Description,Pricing}){
  return(
    <div className="travel-destination-Packages">
       <div className="travel-type-title">
      <h2> {Title}</h2>
       </div>
  <div className="travelTypesPackage">
   
    </div>
    <div className="travel-type-image-gallery">

   
    {ImageGallery.map((image, index) => (
            <img key={index} src={image}
             className="travel-type-image"/>
          ))}
     
    </div>
    <div className="circle-active-nav">
      <FaCircle/>
      <FaCircle  color="orange"/>
      <FaCircle />
    </div>
    <div className="travel-type-description">
      {Description}
    </div>
    <div className="travel-type-pricing">
      {Pricing}
    </div>
    <div className="button-cta">
    <button className="destination-cta">view more details</button>
    </div>
  
    </div>
  )
}

export default TripTypes;
