// require('colors');
require("dotenv").config();
const mongoose = require("mongoose");
const app = require('./app');
const config = require("./config");
const port = process.env.PORT || 5000;


async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${config.db_user}:${config.db_password}@cluster0.cltnhsn.mongodb.net/book-store`
    );
    console.log('MongoDB is connected')
    app.listen(port, () => {
      console.log("Live Server: http://localhost:5000");
    });
  } catch (error) {
    console.log("Error :", error);
  }
}
main();

// app.get("/books", async (req, res) => {
 
//   const result = await Book.find();

//   return res.status(200).json({
//     status: "Success",
//     message: "Book fetched successful",
//     data: result,
//   });

// });

// //hello
// app.post("/books", async (req, res) => {
//   const data = req.body;
//   // const { id } = req.params;
//   // const query = req.query;

//   // const isExist = await Book.findOne({_id:id})
//   const result = await Book.create(data);

//   return res.status(200).json({
//     status: "Success",
//     message: "Book created successful",
//     data: result,
//   });
// });


