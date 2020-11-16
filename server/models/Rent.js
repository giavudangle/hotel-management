import mongoose from 'mongoose';

const DetailRentSchema = new mongoose.Schema({
    customer_name_detail_rent:{
        type:String
    },
    customer_type_detail_rent:{
        type:String
    },
    customer_person_id_detail_rent:{
        type:String
    },
    customer_address_detail_rent:{
        type:String
    }
})


const RentSchema = new mongoose.Schema({
    list_detail_rent:[DetailRentSchema],
    room_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Room'
    },
    rent_date:{
        type:Date,
    },
    deposit:{
        type:Number
    }

})

module.exports = mongoose.model('Rent',RentSchema);