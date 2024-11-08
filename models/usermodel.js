const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        // required: true,
        trim: true // " to clear the white space between the data"
        // default: "No Name",
    },
    createdAt: {
        type: Date,
        default: new Date,
        immutable: true, // you cannot change the data once added 
    },
    status: {
        type: Boolean,
        // enum: ['active', 'inactive']
        default: true
    },
    email: {
        type: String,
        required: true,
        unique: true,       // only one email can be 
        // match: /^([a-zA-Z]+)/
    },
    // age: {
    //     type: Number,
    //     // min: 18, max: 80,
    // },
    password: {
        type: String,
        required: true
    },
    mob: {
        type: Number,
        required: true
    }
})

const userModel = mongoose.model('users', userSchema)
module.exports = userModel