import { IoMail, IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Icon from "./Icon/Icon";
import "./Header.css";
function Header() {
  return (
    <div className="header-container-parent" id="header">
      <div className="header-contacts">
        <HeaderContact Icon={<FaLocationDot />} text="kenya" />
        <HeaderContact Icon={<IoMail />} text="zarph-tours@outlook.com" />
        <HeaderContact Icon={<IoCall />} text="+254 71 2345 678" />
      </div>
      <div className="header-nav-elements">
        <HeaderNavigation />
      </div>
      <HamburgerMenu HamburgerMenuIcon={<FaAlignJustify />} />
    </div>
  );
}
function HeaderContact({ Icon, text }) {
  return (
    <div className="header-contact-container">
      {Icon}
      <p>{text}</p>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <div className="logo-container">
        <Icon />
      </div>
      <div className="navigation-links">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link link" : "link")}
          to="/Destination"
        >
          Destination
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link link" : "link")}
          to="/TripTypes"
        >
          Trip Types
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link link" : "link")}
          to="/Contact"
        >
          Contact Us
        </NavLink>
        <HeaderCTA />
      </div>
    </div>
  );
}

function HeaderCTA() {
  return (
    
      <button className="button-container-element">Book a Trip</button>
  
  );
}
function HamburgerMenu({ HamburgerMenuIcon }) {
  return <div className="hamburger-menu-container">{HamburgerMenuIcon}</div>;
}

export default Header;
