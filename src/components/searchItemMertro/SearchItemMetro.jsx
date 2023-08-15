import "./searchItemMetro.css";
import { Link} from "react-router-dom";
import { useState} from "react";

const SearchItemMetro = ({item}) => {


  return (
    <div className="searchItem">
      <img
        src="https://images.pexels.com/photos/2275288/pexels-photo-2275288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <h4 className="textPostion">Depart :<span className="siTaxiOp">{item.depart}</span></h4>
        <h4 className="textPostion">Destination : <span className="siTaxiOp1"> {item.destination}</span></h4>
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
      <Link to={`/details/${item.id}`}>
        <div className="siDetailTexts">
          <button className="siCheckButton">Details</button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default SearchItemMetro;
