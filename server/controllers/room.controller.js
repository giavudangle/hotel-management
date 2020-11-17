const Room = require('../models/Room');
const mongoose = require('mongoose');
const db = mongoose.connection;

const getListRooms = async (req, res) => {
    const listRooms = await Room.find().exec();
    res.json(listRooms);
}

const createRoom = async (req, res) => {
    const { room_name, room_type, room_price, room_status, room_note } = req.body;
    const room = new Room({
        room_name, room_type, room_price, room_status, room_note
    })
    room.save()
    .then((data) => {
        res.status(200).json({
            data
        })
    })
    .catch((e) => {
       res.status(500).json({
           message:'Somethings went wrongs => ' + e.message
       })
    })
}

module.exports = {getListRooms,createRoom};