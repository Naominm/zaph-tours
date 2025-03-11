import { FaSearch } from "react-icons/fa";
import "./Search.css";

function SearchElement(){
return(
<div className="search-element-search">
<div className="search-contents">
<SearchElementContents/>
</div>
</div>
)
}

function SearchElementContents(){
return(
<div className="search-elements">
<div className="search-form-elements">
<div className="search-form-row">
<div className="label-select-container">
<label htmlFor="search">Search Destinations:</label>
<div className="search-input-container">
<input type="text" name="search" placeholder=" Search.."/>
<button className="search-btn">
<FaSearch />
</button>
</div>
</div>
</div>

<div className="label-select-container">
<label htmlFor="destination">Filter by Category:</label>
<select name="destination" className="destination-search">
<option value="">Select an option</option>
<option value="honeymoon">Honeymoon</option>
<option value="family">Family</option>
<option value="cultural tours">Cultural Tours</option>
<option value="wildlife safaris">Wildlife Safaris</option>
<option value="eco-tours">Eco-tours</option>
<option value="luxury vacations">Luxury Vacations</option>
<option value="beach holidays">Beach Holidays</option>
<option value="wellness retreats">Wellness Retreats</option>
<option value="culinary tours">Culinary Tours</option>
</select>
</div>
</div>
</div>
)
}

export default SearchElement;
