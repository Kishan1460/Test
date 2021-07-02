const mongoose = require('mongoose');
const validator = require('validator');

const userScheama = new mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    address: {
        type: String,
        required: true
    },
    firstRound: {
        type: Number,
        required: true,
        validate(value){
            if (value<0 || value>10) {
                throw new Error('Number must be between 0 to 10')
            }
        }
    },
    secondRound: {
        type: Number,
        required: true,
        validate(value){
            if (value<0 || value>10) {
                throw new Error('Number must be between 0 to 10')
            }
        }
    },
    thirdRound: {
        type: Number,
        required: true,
        validate(value){
            if (value<0 || value>10) {
                throw new Error('Number must be between 0 to 10')
            }
        }
    },
    avgScore: {
        type: Number,
        required: true
    }
},{ timestamps: true });

const User = mongoose.model('User', userScheama);

module.exports = User;