import AboutImage from "../../assets/about2.jpg";
import Heading from "../../components/Header/Icon/Heading/Heading";
import "./About.css";
function AboutContainerElement() {
  return (
    <div className="about-container" id="About">
      <Heading />
      <AboutContainerItems
        Image={AboutImage}
        TextSection="At Zaph Tours, we specialize in creating unforgettable travel experiences tailored to your unique preferences. Whether you're looking for an adventurous getaway, a relaxing beach vacation, or a cultural exploration, we offer a wide range of curated travel packages to suit every type of traveler. Our expert team works closely with you to craft personalized itineraries that ensure your journey is filled with lasting memories. From honeymoon escapes to wildlife safaris, we strive to provide exceptional service and unparalleled adventure, ensuring that each trip is nothing short of extraordinary. Let us help you discover the world with ease and excitement."
      />
    </div>
  );
}
function AboutContainerItems({ Image, TextSection }) {
  return (
    <div className="about-sec-elements">
      <div className="image-wrapper-container">
        <img src={Image} alt="company Image" />
      </div>
      <div className="about-text-section">
        <p> {TextSection}</p>
      </div>
    </div>
  );
}

export default AboutContainerElement;
