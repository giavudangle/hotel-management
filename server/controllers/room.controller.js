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


const updateRoom = async (req,res) => {
    const roomId = req.params.id;

    Room.findByIdAndUpdate({_id:roomId},{$set:req.body}).exec()
    .then(data => {
        res.status(200).json({
            message:"Record has been updated",
            data
        })
    })
    .catch(e => {
        res.status(500).json({
            message:"Somethings went wrong => " + e.message
        })
    })
    
}

const deleteRoomById = async (req,res) => {
    const roomId = req.params.id;

    Room.deleteOne({_id:roomId}).exec()
    .then(() => {
        res.status(200).json({
            message:"Record has been deleted"
        })
    })
}

const getRoomById = (req,res) => {
    const roomId= req.params.id;
    Room.findById(roomId).exec()
    .then((data) => {
        if(data == null) {
            res.status(200).json({
                message:"Not Found",            
            })
        }
        else {
            res.status(200).json({
                message:"Found",
                data
            }) 
        }
       
    })
    .catch((e) => {
        res.status(500).json({
            message:"Something went wrong => " + e.message
        })
    }) 
}



module.exports = {getListRooms,createRoom,updateRoom,getRoomById,deleteRoomById};