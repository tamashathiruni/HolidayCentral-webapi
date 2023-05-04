const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://cham:cha123@cluster0.nyvaihs.mongodb.net/mern-rooms";

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var connection = mongoose.connection;

//if the connection fail
connection.on("error", () => {
  console.log("mongo db connection failed");
});

//if the conection success
connection.on("connected", () => {
  console.log("mongo db connection successful");
});

module.exports = mongoose;
