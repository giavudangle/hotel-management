const Room = require('../models/Room');
const mongoose = require('mongoose');
const { request } = require('../app');
const db = mongoose.connection;



const getListRooms = async (req, res) => {
    const rooms = await Room.find().exec();
    
    let roomMaps = [];

    rooms.forEach(function(room){
        roomMaps.push({
            id: room._id,
            room_name:room.room_name,
            room_type:room.room_type,
            room_price:room.room_price,
            room_status:room.room_status,
            room_note:room.room_note,
        })
    })
    res.setHeader('Content-Range',roomMaps.length)
    res.json(roomMaps);
}

const createRoom =  (req, res) => {
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


const updateRoom =  (req,res) => {
    const roomId = req.params.id;
    Room.findByIdAndUpdate({_id:roomId},{$set:req.body}).exec()
    .then(data => {
        let newRoom = {
            id:data._id,
            room_name:data.room_name,
            room_type:data.room_type,
            room_price:data.room_price,
            room_status:data.room_status,
            room_note:data.room_note,
        }
        res.status(200).json(newRoom)
    })
    .catch(e => {
        res.status(500).json({
            message:"Somethings went wrong => " + e.message
        })
    })
    
}

const deleteRoomById =   async (req,res) => {
    const roomId = req.params.id;
    Room.findOneAndDelete({_id:roomId}).exec()
    .then(a=> {
       res.json(a);
    })
    .catch(e => {
        res.status(500).json({
            message:"Somethings went wrong => " + e.message
        })
    })
}



const deleteAllRooms = async (req,res) => {
    try {
        await Room.deleteMany();
        res.send('Deleted all recors')
    }catch{
        console.log(err)
    }
}

const getRoomById =async  (req,res) => {
    const roomId= req.params.id;
    Room.findById({_id:roomId}).exec()
    .then((temp) => {
        if(temp == null) {
            res.status(200).json({
                message:"Not Found",            
            })
        }
        else {              
            let data = {
                id:temp._id,
                room_name:temp.room_name,
                room_type:temp.room_type,
                room_price:temp.room_price,
                room_status:temp.room_status,
                room_note:temp.room_note,
            }
            res.status(200).json(data) 
        }       
    })
    .catch((e) => {
        res.status(500).json({
            message:"Something went wrong => " + e.message
        })
    }) 
}




module.exports = {getListRooms,createRoom,updateRoom,getRoomById,deleteRoomById,deleteAllRooms};