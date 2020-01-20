const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    gender:{
        type:String
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);