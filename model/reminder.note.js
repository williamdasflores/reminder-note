const mongoose = require('mongoose');
const { Schema } = mongoose;

const reminderSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    }, 
    description: {
        type: String,
        unique: false,
        required: false
    },
    dateInsertion: {
        type: Date,
        required: true
    }
});


module.exports = mongoose.model('notes', reminderSchema);