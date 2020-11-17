import mongoose from 'mongoose';

const DetailRentSchema = new mongoose.Schema({
    room_id_detail_rent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    customer_name_detail_rent: {
        type: String
    },
    customer_type_detail_rent: {
        type: String
    },
    customer_person_id_detail_rent: {
        type: String
    },
    customer_address_detail_rent: {
        type: String
    }
})


const RentSchema = new mongoose.Schema({
    list_detail_rent: [DetailRentSchema],
    rent_date: {
        type: Date,
        required: true
    },
    deposit: {
        type: Number
    },
    customer_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer'
    }

})

module.exports = mongoose.model('Rent', RentSchema);