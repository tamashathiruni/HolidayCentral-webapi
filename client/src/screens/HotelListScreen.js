import React from "react";

// import Headerc from '../components/Headerc'
import Footer from "../components/Footer";
// import List from '../components/List'
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import SearchHotel from "../components/SearchHotel";

const HotelListScreen = () => {
  // const [destination, setDestination] = useState("");
  // const [openDate, setOpenDate] = useState(false);
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);
  // const [option, setOption] = useState();

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(location.state.options);

  return (
    <div>
      <Navbar />

      <header type="list" />
      <div className="listcontainer">
        <div className="listwrap">
          <div className="listsearch">
            <h1 className="listtitle">Search</h1>
            <div className="listitem">
              <label htmlFor="text">Destination</label>
              <input type="text" placeholder="{`destination`}" />
            </div>
            <div className="listitem">
              <label htmlFor="text">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

              {/* calander set */}
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listitem">
              <label htmlFor="lowest">Options</label>
            </div>

            <div className="listoption">
              <div className="listoptitem">
                <span className="listoptlabel">
                  Lowest price <small>per night</small>
                </span>
                <input type="number" className="listoptinput" />
              </div>
            </div>

            <div className="listoption">
              <div className="listoptitem">
                <span className="listoptlabel">
                  Heightest price <small>per night</small>
                </span>
                <input type="number" className="listoptinput" />
              </div>
            </div>

            <div className="listoption">
              <div className="listoptitem">
                <span className="listoptlabel">Adults</span>
                <input
                  type="number"
                  min={1}
                  className="listoptinput"
                  placeholder={option.adult}
                />
              </div>
            </div>

            <div className="listoption">
              <div className="listoptitem">
                <span className="listoptlabel">Children</span>
                <input
                  type="number"
                  min={0}
                  className="listoptinput"
                  placeholder={option.childre}
                />
              </div>
            </div>
            <div className="listoption">
              <div className="listoptitem">
                <span className="listoptlabel">
                  Room <small>per night</small>
                </span>
                <input
                  type="number"
                  min={1}
                  className="listoptinput"
                  placeholder={option.room}
                />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listresult">
            <SearchHotel />
            <SearchHotel />
            <SearchHotel />
            <SearchHotel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelListScreen;
