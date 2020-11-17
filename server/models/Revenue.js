import mongoose from 'mongoose';


const RevenueSchema = new mongoose.Schema({
    room_id_revenue: {
        type: mongoose.Types.ObjectId,
        ref: 'Room'
    },
    ratio: {
        type: Number
    },
    date: {
        type: Number
    },
    revenue: {
        type: Number,
    },
});

module.exports = mongoose.model('Revenue', RevenueSchema);