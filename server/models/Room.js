const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    room_name:{
        type:String,
        required:[true,'Vui lòng nhập tên phòng']
    },
    room_type:{
        type:String,
        validate: {
            validator:function(name){
               return (name === 'A' || name ==='B' || name ==='C')            
              
            },
            message:'Loại phòng phải là : A,B,C'
        },
        required:[true,'Vui lòng nhập loại phòng']
    },
    room_price:{
        type:Number,
        validate:{
            validator: function(price) {
                return price > 0
            },
            message:'Giá tiền phòng phải là số dương'
        },
        required:[true,'Vui lòng nhập giá phòng']
    },
    room_status:{
        type:Boolean,
        required:true
    },
    room_note:{
        type:String
    }
})

module.exports = mongoose.model('Room',RoomSchema);