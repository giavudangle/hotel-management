require('dotenv').config({path:'.env'});

const mongoose = require('mongoose');
const app =require('./app')

const port = process.env.PORT || 5000

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_LOCAL_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
},(e) => {
    if(e) console.error(e.message);
    console.log('DATABASE connected successfully');
})

mongoose.connection.on('error',(e) => {
    console.log(`Database connection error -> ${e.message}`);
})


const server = app.listen(port,(e) => {
    if (e) console.log(e);
    console.log(`Server is running on PORT : ${server.address().port}`);
})