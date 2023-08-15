import "./listTrain.css";
import Navbar from "../../components/navbar/Navbar";
import SearchItemTrain from "../../components/searchItemTrain/SearchItemTrain";
import { useContext, useState } from "react";
import { DateRange } from "@mui/icons-material";
import { format } from "date-fns";
import { faBed, faCalendarDays, faPlug } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimePicker from "react-time-picker"; 
import "react-time-picker/dist/TimePicker.css";
import { AuthContext } from "../../context/AuthContext";

const ListTrain = () => {
  const {user}=useContext(AuthContext); 
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [selectedTime, setSelectedTime] = useState("00:00");
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
        
        <TimePicker
          onChange={setSelectedTime}
          value={selectedTime}
          disableClock={true} 
          format="HH:mm"
          clearIcon={null} 
        />
        <div className="ListsSearchItem">
          <button className="ListsBtn">Search</button>
        </div>
      </div>
      <div className="listContainer">
        <div className="listWrapper">
          <SearchItemTrain />
          <SearchItemTrain />
          <SearchItemTrain />
          <SearchItemTrain />
          <SearchItemTrain />
          <SearchItemTrain />
          <SearchItemTrain />
          <SearchItemTrain />
        </div>
      </div>
    </div>
  );
};

export default ListTrain;
