const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const phoneSchema = new Schema({
    caller_name: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    }},
 {
    timestamps: true
});

const Phone = mongoose.model('Phone',phoneSchema);

module.exports = Phone;