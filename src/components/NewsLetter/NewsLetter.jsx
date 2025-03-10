import "./NewsLetter.css";
function NewsLetter(){
    return(
        <div className="news-letter-section">
<NewsletterFormElements/>
        </div>
    )
}

function NewsletterFormElements(){
    return(
        <div className="form-elements-container">
            <div className="text-container">
                <h2 className="newsletter-heading">Subscribe to our news letter</h2>
                <p className="newsLetter-subheading">
                    Recieve Weekly news On whats Trending in our services
                </p>
            </div>
            <div className="inputCTA">
                <input className="newsletter-input-element" type="email" placeholder="enter Your Email address" required />
                <button className="newsletter-button-element">submit</button>
            </div>
        </div>
    )
}

export default NewsLetter;