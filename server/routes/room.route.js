const express = require('express');
const {getListRooms,createRoom,updateRoom,getRoomById,deleteRoomById, deleteAllRooms} = require('../controllers/room.controller');
const router = express.Router()

router.get('/rooms',getListRooms);
router.get('/rooms/:id',getRoomById);
router.post('/rooms',createRoom);
router.put('/rooms/:id',updateRoom);
router.delete('/rooms/:id',deleteRoomById)
router.delete('/rooms',deleteAllRooms);
module.exports = router;