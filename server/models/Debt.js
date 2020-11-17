import mongoose from 'mongoose';

const DebtSchema = new mongoose.Schema({
    customer_id_debt: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer'
    },
    first_debt: {
        type: Number
    },
    arise: {
        type: Number
    },
    last_debt: {
        type: Number
    },
    date: {
        type: Date
    }

})

module.exports = mongoose.model('Debt', DebtSchema);