import "./searchItemTrain.css";
import { Link } from "react-router-dom";

const SearchItem = () => {
  return (
    
    <div className="searchItem" >
      <img
        src="https://images.pexels.com/photos/1793503/pexels-photo-1793503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
       <Link to="/details">
        <div className="siDetailTexts">
          <button className="siCheckButton">See availability</button>
        </div>
        </Link>
      </div>
    </div>
 
  );
};


export default SearchItem;
