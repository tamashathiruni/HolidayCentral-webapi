import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";

function BookingScreen({ match }) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState();

  const romid = match.params.roomid;
  const fromdate = moment(match.params.fromdate, "DD-MM-YYYY");
  const todate = moment(match.params.todate, "DD-MM-YYYY");

  // //no of days which booking
  const totaldays = moment.duration(todate.diff(fromdate)).asDays() + 1;

  useEffect(() => {
    async function senddata() {
      try {
        setloading(true);
        const data = (
          await axios.post("/api/rooms/getroombyid", {
            roomid: match.params.roomid,
          })
        ).data;

        setroom(data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    }
    // senddata();
  }, []);

  return (
    <div className="m-5">
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{room.name}</h1>
              <img src={room.imageUrls[0]} className="bigimg" alt="" />
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: `right` }}>
                <h1>Booking Details</h1>

                <hr />
                <p>Name : </p>
                <p>From Date : </p>
                <p>To Date : </p>
                <p>Max count :{room.maxcount} </p>
              </div>
              <div style={{ textAlign: `right` }}>
                <b>
                  <p>Total Days : </p>
                  <p>Rent per day : </p>
                  <p>Total Amount : </p>
                </b>
              </div>
              <div style={{ float: `right` }}>
                <button className="btn btn-primary">Pay now</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}

      {/* <h1>BookingScreen</h1>
      <h1>Room id={match.params.roomid}</h1> */}
    </div>
  );
}

export default BookingScreen;
