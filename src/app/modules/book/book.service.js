const Book = require("./book.model");


exports.getAllBooksService = async()=>{
   const result = await Book.find({})
   return result;
}
exports.createBookService = async(data)=>{
   const result = await Book.create(data)
   return result;
}