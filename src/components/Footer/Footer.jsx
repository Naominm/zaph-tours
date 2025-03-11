import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";
import Icon from "../Header/Icon/Icon";
import "./Footer.css";
function FooterElement() {
  return (
    <div className="footer-container">
      <FooterContent />
    </div>
  );
}
function FooterContent() {
  return (
    <div className="footer-content-container">
      <div className="footerHeader">
        <div className="header-col">
          <Icon />
          <p className="column-text-sec">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            quos! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit, rem.
          </p>
        </div>
      </div>
      <div className="footerHeader">
        <div className="header-col">
          <h3>Trending Locations</h3>
      
            <ul>
              <li>
                <a href="./">Mt. Kenya Hike</a>
              </li>
              <li>
                <a href="./">Diani Beach Kenay</a>
              </li>
              <li>
                <a href="./">Hells Gate Walk KE</a>
              </li>
              <li>
                <a href="./">Tsavo National Park Safari</a>
              </li>
              <li>
                <a href="./">Lake Nakuru Famingo View</a>
              </li>
            </ul>
          
        </div>
      </div>
      <div className="footerHeader">
        <div className="header-col">
          <h3>Quick Links</h3>
          
            <ul>
              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="./Destination">Destination</a>
              </li>
              <li>
                <a href="./TripTypes">Trip types</a>
              </li>
              <li>
                <a href="./Contact">Contact Us</a>
              </li>
            </ul>
        
        </div>
      </div>
      <div className="footerHeader">
        <div className="header-col">
          <h3>Contact Us</h3>
          <FooterContacts
            FooterContactIcon={<FaLocationDot />}
            Text="Central-Building MoiAve KE"
          />
          <FooterContacts FooterContactIcon={<IoCall />} Text="Call Us" />
          <FooterContacts FooterContactIcon={<IoMail />} Text="Email Us" />
        </div>
      </div>
    </div>
  );
}
function FooterContacts({ FooterContactIcon, Text }) {
  return (
    <div className="footer-contacts-container">
      <div className="contacts-footer">
        {FooterContactIcon}
        <p>{Text}</p>
      </div>
    </div>
  );
}

export default FooterElement;
