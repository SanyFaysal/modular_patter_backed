const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type:String,
        required: true,
    },
    mobileNumber: {
        type:String
    }
})



const User = mongoose.model('User', userSchema);


module.exports = User;