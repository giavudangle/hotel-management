const express = require('express');
const {createRoom,getListRooms} = require('../controllers/room.controller');
const router = express.Router()

router.get('/rooms',getListRooms);
router.post('/rooms',createRoom);

module.exports = router;