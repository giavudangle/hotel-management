import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    customer_username: {
        type: String,
        required: true
    },
    customer_password: {
        type: String,
        required: true
    },
    customer_email: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Customer', CustomerSchema);