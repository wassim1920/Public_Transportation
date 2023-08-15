import "./listMetro.css";
import Navbar from "../../components/navbar/Navbar";
import SearchItemMetro from "../../components/searchItemMertro/SearchItemMetro";
import { useContext, useState } from "react";
import { DateRange } from "@mui/icons-material";
import { format } from "date-fns";
import { faBed, faCalendarDays, faPlug } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/fetch";
import TimePicker from "react-time-picker"; 
import "react-time-picker/dist/TimePicker.css";
import { AuthContext } from "../../context/AuthContext";

const ListMetro = () => {
  const {user}=useContext(AuthContext); 
  const {data}=useFetch("http://127.0.0.1:8000/metros")
  const [destination, setDestination] = useState("");
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
        {data.map((item) => (
          <SearchItemMetro item={item} key={item._id}/>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default ListMetro;
