const mongoose = require('mongoose');

const PromotionSchema = new mongoose.Schema({
    promotion_name:{
        type:String,
        required:[true,'Vui lòng nhập tên promotion']
    },
    promotion_range:{
        type:Number,
        validate: {
            validator:function(range){                     
                return range > 0
            },
            message:'Thời gian sử dụng promotion phải lớn hơn 0 ngày'
        },
        required:[true,'Vui lòng nhập thời hạn promotion']
    },
    promotion_value:{
        type:Number,
        validate:{
            validator: function(price) {
                return price > 0
            },
            message:'Giá trị promotion phải là số dương'
        },
        required:[true,'Vui lòng nhập giá trị promotion']
    },
    promotion_note:{
        type:String
    }
})

module.exports = mongoose.model('Promotion',PromotionSchema);