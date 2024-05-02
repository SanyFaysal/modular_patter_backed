const { default: mongoose } = require("mongoose");

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type:String,
        required: true,
    },
    description: {
        type:String
    }
})



const Book = mongoose.model('Book', bookSchema);


module.exports = Book;