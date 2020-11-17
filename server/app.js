const express = require('express');
const app = express();
const cors = require('cors');

const roomRoute = require('./routes/room.route');

app.get('/',(req,res) => {
    res.send('hehe');
})

app.use(cors());
app.use(express.json());
app.use(roomRoute);

module.exports = app;