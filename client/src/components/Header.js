import {
  faCalendarDays,
  faHotel,
  faMapLocationDot,
  faPlane,
  faRoute,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Headerc = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headercontainer listMode" : "headercontainer"
        }
      >
        <div className="headerlist">
          <div className="headeritem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
          </div>
          <div className="headeritem">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <span>Tour Guid</span>
          </div>
          <div className="headeritem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Air Tickets</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Everlasting discounts? It's brilliant.
            </h1>
            <p className="hederpara">
              Get paid for your travels by activating instant discounts of 10%
              or more when you sign up for a free HolidayCentral account.
            </p>

            <div className="headersearch">
              <div className="headersrchitm">
                <FontAwesomeIcon icon={faRoute} className="headericon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headersrchinput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headersrchitm">
                <FontAwesomeIcon icon={faCalendarDays} className="headericon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headersrchtxt"
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
              <div className="headersrchitm">
                <FontAwesomeIcon icon={faUser} className="headericon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headersrchtxt"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionitm">
                      <span className="optionText">Adult</span>
                      <div className="optcounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optcounterbutton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optcounterbutton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionitm">
                      <span className="optionText">Children</span>
                      <div className="optcounter">
                        <button
                          disabled={options.children <= 0}
                          className="optcounterbutton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optcounterbutton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionitm">
                      <span className="optionText">Room</span>
                      <div className="optcounter">
                        <button
                          disabled={options.room <= 1}
                          className="optcounterbutton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optcounterbutton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headersrchitm">
                <button className="headerbutton" onClick={handleSearch}>
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Headerc;
