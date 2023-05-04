import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { DatePicker, Space } from "antd";
import moment from "moment";
import Headerc from "../components/Header";
import Features from "../components/Features";
import Footer from "../components/Footer";

function HomeScreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const { RangePicker } = DatePicker;

  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();

  useEffect(() => {
    async function fetchdata() {
      try {
        setloading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;

        setrooms(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        console.log(error);
        setloading(false);
      }
    }
    // fetchdata();
  }, []);

  //filerby date function

  function filteByDate(dates) {
    setfromdate(moment(dates[0]).format("DD-MM-YYYY"));
    settodate(moment(dates[1]).format("DD-MM-YYYY"));
  }

  return (
    <div>
      <Headerc />
      <div className="container">
        <div className="container">
          <Features />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomeScreen;
