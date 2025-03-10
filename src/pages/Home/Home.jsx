import HeroSection from "./Hero";
import AboutContainerElement from "./About";
import FeaturedDestination from "./FeaturedDestination";
import TestimonialSection from "../Testimonial";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import FooterElement from "../../components/Footer/Footer";
import ScrollToTop from "../../components/Scroll/Sroll";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutContainerElement />
      <FeaturedDestination />
      <TestimonialSection />
      <NewsLetter />
      <FooterElement />
      <ScrollToTop />
    </>
  );
}

export default Home;
