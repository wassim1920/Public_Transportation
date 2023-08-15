import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import { useContext, useState } from "react";
import { faBed, faPlug} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimePicker from "react-time-picker"; 
import "react-time-picker/dist/TimePicker.css";
import { AuthContext } from "../../context/AuthContext";


const List = () => {
  const [destination, setDestination] = useState("");
  const [selectedTime, setSelectedTime] = useState("00:00");
  const {user}=useContext(AuthContext); 
  const isAdmin = user && user.role === "true";
 
  return (
    <div>
      <Navbar />
      <div className="ListsSearch">
      <div className="ListsSearchItem">
          {isAdmin && (
            <button className="ListsBtn">
              <FontAwesomeIcon icon={faPlug} className="ListsIcon" />
            </button>
          )}
        </div>
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
        <TimePicker
          onChange={setSelectedTime}
          value={selectedTime}
          disableClock={true} 
          format="HH:mm"
          clearIcon={null} 
        />
      </div>
        <div className="ListsSearchItem">
          <button className="ListsBtn">Search</button>
        </div>
      </div>
      <div className="listContainer">
        <div className="listWrapper">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
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
