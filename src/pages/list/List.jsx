import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          
            <SearchItem/>
            <SearchItem />
            <SearchItem />
            <SearchItem/>
            <SearchItem />
            <SearchItem /> 
            <SearchItem />
            <SearchItem />
    
        </div>
      </div>
    </div>
  );
};

export default List;
