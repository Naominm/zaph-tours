import Honeymoon1 from "../assets/honeymoon1.jpg";
import Honeymoon2 from "../assets/honeymoon2.jpg";
import Honeymoon3 from "../assets/honeymoon3.jpg";

import Family1 from "../assets/family1.jpg";
import Family2 from "../assets/family2.jpg";
import Family3 from "../assets/family3.jpg";

import Cultural1 from "../assets/cultural1.jpg";
import Cultural2 from "../assets/cultural2.jpg";
import Cultural3 from "../assets/cultural3.jpg";

import Safari1 from "../assets/Safari1.jpg";
import Safari2 from "../assets/Safari2.jpg";
import Safari3 from "../assets/Safari3.jpg";

import EcoTour1 from "../assets/EcoTour1.jpg";
import EcoTour2 from "../assets/EcoTour2.jpg";
import EcoTour3 from "../assets/EcoTour3.jpg";



const tripTypes = [
    {
      title: "Honeymoon",
      images: [Honeymoon1, Honeymoon2, Honeymoon3],
      description: "Romantic getaways to stunning destinations with luxury accommodations.",
      pricing: { startingFrom: 2000, groupDiscount: "10% off for 4+ people" }
    },
    {
      title: "Family",
      images: [Family1, Family2, Family3],
      description: "Memorable family vacations with fun activities for all ages.",
      pricing: { startingFrom: 1500, groupDiscount: "5% off for families" }
    },
    {
      title: "Cultural Tours",
      images: [Cultural1, Cultural2, Cultural3],
      description: "Immersive experiences exploring Kenya's rich heritage and traditions.",
      pricing: { startingFrom: 1300, groupDiscount: "Free tour guide for groups of 6+" }
    },
    {
      title: "Safari Tours",
      images: [Safari1, Safari2, Safari3],
      description: "Immersive experiences exploring Kenya's rich heritage and traditions.",
      pricing: { startingFrom: 1200, groupDiscount: "Free tour guide for groups of 6+" }
    },
    {
      title: "Eco-Tours",
      images: [EcoTour1, EcoTour2, EcoTour3],
      description: "Sustainable travel experiences with a focus on nature and conservation.",
      pricing: { startingFrom: 1500, groupDiscount: "Free tour guide for groups of 6+" }
    }

];
  
export default tripTypes;
