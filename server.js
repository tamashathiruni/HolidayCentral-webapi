const express = require("express");

const app = express();

//import db.js
const dbConfig = require("./db");

//impport the roomsroute
const roomsRoute = require("./routes/roomsRoute");

const userRoute = require("./routes/usersRoute");
app.use(express.json());

app.use("/api/rooms", roomsRoute);
app.use("/api/users", userRoute);

const port = process.env.PORT || 5000; //automatic or default port number

app.listen(port, () => {
  console.log(`Server started....`);
});
