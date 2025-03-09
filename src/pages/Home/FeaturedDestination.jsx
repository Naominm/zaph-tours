import { FaHeart } from "react-icons/fa";
import FeaturedImage1 from "../../assets/mt-kenya.png";
import FeaturedImage2 from "../../assets/lake-nakuru.jpg";
import FeaturedImage3 from "../../assets/coastal-kenya.jpg";
import FeaturedImage4 from "../../assets/Nairobi-national-park.jpg";


import "./FeaturedDestination.css"
function FeaturedDestination(){
    return(
        <div className="main-feature-container">
            <h3>Featured Destination</h3>
        <div className="featured-destination-container">
       <FeaturedDestinationElement Image={FeaturedImage1} Text="Mt Kenya"Icon={<FaHeart />}/>
       <FeaturedDestinationElement Image={FeaturedImage2} Text="Lake Nakuru"Icon={<FaHeart />}/>
       <FeaturedDestinationElement Image={FeaturedImage3} Text="Coastal Kenya"Icon={<FaHeart />}/>
       <FeaturedDestinationElement Image={FeaturedImage4} Text="Nairobi N Park"Icon={<FaHeart />}/>
   
        </div>
        </div>
    )
}

function FeaturedDestinationElement({Image,Text, Icon}){
    return(
        <div className="fdElements">
            
        <div className="featured-destinations">
           <div className="heading">
            
           </div>
            <div className="featuredContent">
         
         <div className="image-wrapper-container-featured">
         <div className="overlay-f"></div>
            <img src={Image} alt="major parks in kenya" />
            <div className="icon-container">
         {Icon}
         </div>
         </div>
         
        
         </div>
         <div className="content-featured">
            <p>{Text}</p>
         </div>
        </div>
        </div>
    )
}

export default FeaturedDestination;