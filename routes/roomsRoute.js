//api belongs to room

const express = require("express");
const router = express.Router();

const Room = require("../models/room");

//fetch all the details of the room
router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({}); //empty {} means zero condion
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getroombyid", async (req, res) => {
  const roomid = req.body.roomid;

  try {
    const room = await Room.findOne({ _id: roomid });
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
