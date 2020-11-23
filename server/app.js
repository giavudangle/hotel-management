const express = require('express');
const app = express();
const cors = require('cors');


const roomRoute = require('./routes/room.route');
const roomController = require('./controllers/room.controller');

app.get('/',roomController.getListRooms);

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Expose-Headers", "X-Total-Count, Content-Range");
    next();
}

app.use(allowCrossDomain);

app.use(cors());
app.use(express.json());
app.use(roomRoute);

module.exports = app;