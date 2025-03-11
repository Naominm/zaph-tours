import BgVideo from "../../assets/hero-video.mp4";

import "./Hero.css";

function HeroSection() {
  return (
    <div className="hero-section-container">
      <div className="main-content-container">
        <div className="overlay"> </div>
        <video src={BgVideo} autoPlay loop muted />
      </div>
      <div className="content">
        <h2>Best safaris and adventures</h2>
        <p>Karibu kenya</p>
        <button className="hero-cta-btn">Book a Trip with us</button>
      </div>
    </div>
  );
}
export default HeroSection;
