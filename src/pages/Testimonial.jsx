import FirstReview from "../assets/user1.jpg";
import SecondReview from "../assets/user2.jpg";
import ThirdReview from "../assets/user3.jpg";

import "./Testimonial.css";

function TestimonialSection() {
  return (
    <div className="testimonial-section-container">
      <TestimonialHeader />
      <div className="testimony-elements">
        <CardsContent
          User={FirstReview}
          name="Will Smith"
          Description="Zaph Tours made our honeymoon unforgettable! Every detail was perfectly arranged."
        />

        <CardsContent
          User={SecondReview}
          name="Kai James"
          Description="Zaph Tours made our honeymoon unforgettable! Every detail was perfectly arranged."
        />
        <CardsContent
          User={ThirdReview}
          name="Jack Smith"
          Description="Incredible safari experience! We saw the Big Five up close, and the guides were amazing."
        />
      </div>
    </div>
  );
}
function TestimonialHeader() {
  return (
    <div className="testimonial-section-header">
      <h2>What People Say</h2>
      <p>
      Discover the experiences of our satisfied travelers and hear how Zaph Tours has made their journeys unforgettable.
      </p>
    </div>
  );
}

function CardsContent({ User, name, Description }) {
  return (
    <div className="parent-card">
      <div className="cards-content-container-Element">
        <div className="card-content">
          <div className="testimony-user-image-wrapper">
            <img src={User} alt="" />
          </div>
          <h3 className="user-name">{name}</h3>
          <p className="user-description">{Description}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
