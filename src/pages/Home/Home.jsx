import HeroSection from "./Hero";
import AboutContainerElement from "./About";
import FeaturedDestination from "./FeaturedDestination";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

function Home(){
    return(
     <>
        <HeroSection/>
        <AboutContainerElement/>
        <FeaturedDestination/>
        <NewsLetter/>
        </>
    )
}

export default Home;