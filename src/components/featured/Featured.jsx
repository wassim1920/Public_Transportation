import { Link, useNavigate } from "react-router-dom";
import "./featured.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Featured = () => {
  const {user}= useContext(AuthContext);
  const navigate = useNavigate()




  return (
    <div className="featured">
      <li>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Lamabooking account
      </li>
      <h6>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Lamabooking account
      </h6>
      
        <div className="featuredItem" onClick={handleClick}>
          <img
            src="https://thumbs.dreamstime.com/b/white-intercity-bus-rides-highway-271969260.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Bus</h1>
            <h2 className="Fnum">+ 123</h2>
          </div>
        </div>
      
      <h6>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Lamabooking account
      </h6>
      
        <div className="featuredItem" onClick={handleClick}>
          <img
            src="https://images.pexels.com/photos/2275288/pexels-photo-2275288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Metro</h1>
            <h2 className="Fnum">+ 533</h2>
          </div>
        </div>
     
      <h6>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Lamabooking account
      </h6>
      
        <div className="featuredItem" >
          
          <img
            src="https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Train</h1>
            <h2 className="Fnum">+ 532</h2>
          </div>
        </div>
        
    </div>
  );
};

export default Featured;
