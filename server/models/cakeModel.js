const mongoose = require('mongoose');
require('../config/mongoose.js');

const CommentSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 0
    },
    comment: {
        type: String,
        default: ""
    },
}, {timestamps:true});

const CakeSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 2
    },
    image: {
        type: String,
        default:""
    },
    ratings: [CommentSchema],  
}, {timestamps:true});



module.exports = { 
    Cake: mongoose.model('Cake', CakeSchema)
}