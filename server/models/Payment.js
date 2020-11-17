import mongoose from 'mongoose';

const DetailPaymentSchema = new mongoose.Schema({
    room_id_detail_payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    days_of_rent: {
        type: Number
    },
    room_price: {
        type: Number,
        ref: 'Room'
    },
    money_per_room_type: {
        type: Number
    }

})


const PaymentSchema = new mongoose.Schema({
    payment_date: {
        type: Date,
        required: true
    },
    total_money: {
        type: Number,
        required: true
    },
    rent_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Rent'
    },
    list_detail_payment: [DetailPaymentSchema]

})

module.exports = mongoose.model('Payment', PaymentSchema);