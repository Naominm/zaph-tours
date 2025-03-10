import HeroSection from "./Hero";
import AboutContainerElement from "./About";
import FeaturedDestination from "./FeaturedDestination";
import TestimonialSection from "../Testimonial";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import FooterElement from "../../components/Footer/Footer";

function Home(){
    return(
     <>
        <HeroSection/>
        <AboutContainerElement/>
        <FeaturedDestination/>
        <TestimonialSection/>
        <NewsLetter/>
        <FooterElement/>
        </>
    )
}

export default Home;