const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,     //to clear the white space around the data
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true    // only one email can added to the data base
    },
    password: {
        type: String, 
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date,
        immutable: true,    // once added you cannot change the data
    },
    mob: {
        type: Number,
        required: true,
    }

})

const userModel = mongoose.model('users', userSchema)
module.exports = userModel