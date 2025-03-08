import iconImage from "../../../assets/icon.png";
import "./Icon.css";

function Icon() {
  return <IconElement Image={iconImage} text="zaphTours" />;
}

function IconElement({ Image, text }) {
  return (
    <div className="icon-container-element">
      <div className="image-container">
        <img src={Image} alt="" />
      </div>
      <div className="icon-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Icon;
