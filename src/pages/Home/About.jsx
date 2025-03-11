import AboutImage from "../../assets/about-sec.jpg";
import Heading from "../../components/Header/Icon/Heading/Heading";
import "./About.css";
function AboutContainerElement() {
  return (
    <div className="about-container" id="About">
      <Heading />
      <AboutContainerItems
        Image={AboutImage}
        TextSection="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius minima, tempore ipsam alias eligendi laborum totam, praesentium quidem molestiae esse deserunt fugit expedita natus veritatis necessitatibus fugiat ipsum velit.
     molestiae esse deserunt fugit expedita natus veritatis necessitatibus fugiat ipsum velit
     molestiae esse deserunt fugit expedita natus veritatis necessitatibus fugiat ipsum velit
     molestiae esse deserunt fugit expedita natus veritatis necessitatibus fugiat ipsum velit"
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
