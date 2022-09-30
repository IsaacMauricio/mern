const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength:2,
        maxLength: 128,
    },
    // date: {
    //     type: Date,
    //     default: Date.now(),
    //     min: Date.now()
    // },
    content: {
        type: String,
        required: true,
        minLength: 2, 
        maxLength: 16384
    },
    deleted: {
        type: Boolean,
        default: false,

    }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);