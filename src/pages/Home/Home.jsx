import HeroSection from "./Hero";
import AboutContainerElement from "./About";
import FeaturedDestination from "./FeaturedDestination";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import FooterElement from "../../components/Footer/Footer";

function Home(){
    return(
     <>
        <HeroSection/>
        <AboutContainerElement/>
        <FeaturedDestination/>
        <NewsLetter/>
        <FooterElement/>
        </>
    )
}

export default Home;