import "./listMetro.css";
import Navbar from "../../components/navbar/Navbar";
import SearchItemMetro from "../../components/searchItemMertro/SearchItemMetro";
import { useState } from "react";
import { DateRange } from "@mui/icons-material";
import { format } from "date-fns";
import { faBed, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListMetro = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div>
      <Navbar />
      <div className="ListsSearch">
        <div className="ListsSearchItem">
          <FontAwesomeIcon icon={faBed} className="ListsIcon" />
          <input
            type="text"
            placeholder="From?"
            className="ListsSearchInput"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="ListsSearchItem">
          <FontAwesomeIcon icon={faBed} className="ListsIcon" />
          <input
            type="text"
            placeholder="To?"
            className="ListsSearchInput"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="ListsSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="ListsIcon" />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="ListsSearchText"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
          )}
        </div>
        <div className="ListsSearchItem">
          <button className="ListsBtn">Search</button>
        </div>
      </div>
      <div className="listContainer">
        <div className="listWrapper">
          <SearchItemMetro />
          <SearchItemMetro />
          <SearchItemMetro />
          <SearchItemMetro />
          <SearchItemMetro />
          <SearchItemMetro />
          <SearchItemMetro />
          <SearchItemMetro />
        </div>
      </div>
    </div>
  );
};

export default ListMetro;
