import MtKenya from "../assets/mt-kenya.png";
import LakeNakuru from "../assets/lake-nakuru.jpg";
import Tsavo from "../assets/tsavo-national-park.jpg";
import NairobiPark from "../assets/Nairobi-national-park.jpg";
import CoastalKenya from "../assets/coastal-kenya.jpg";
import MtRuwenzori from "../assets/coastalke.jpg";

const featuredDestinations = [
    {
      name: "Mt. Kenya",
      image: MtKenya,
      description: "A breathtaking trek to Kenya's highest peak, offering stunning landscapes and diverse wildlife.",
      pricePerGroup: 1500,
      individualCost: 300
    },
    {
      name: "Mt. Ruwenzori",
      image:MtRuwenzori,
      description: "An adventure into the legendary 'Mountains of the Moon', with glaciers, waterfalls, and unique flora.",
      pricePerGroup: 1800,
      individualCost: 350
    },
    {
      name: "Lake Nakuru",
      image:  LakeNakuru,
      description: "A famous Rift Valley lake, home to thousands of flamingos and diverse wildlife.",
      pricePerGroup: 1200,
      individualCost: 250
    },
    {
      name: "Tsavo National Park",
      image: Tsavo,
      description: "One of Kenya’s largest parks, known for its red elephants and breathtaking savannah.",
      pricePerGroup: 1700,
      individualCost: 320
    },
    {
      name: "Nairobi National Park",
      image: NairobiPark,
      description: "A unique safari experience near the city, home to lions, giraffes, and rhinos.",
      pricePerGroup: 1000,
      individualCost: 200
    },
    {
      name: "CoastalKenya" ,
      image: CoastalKenya,
      description: "Pristine white sandy beaches, rich Swahili culture, and luxury resorts.",
      pricePerGroup: 2000,
      individualCost: 400
    }
  ];
  
  export default featuredDestinations;
  