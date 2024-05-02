const express = require("express");
const app = express();
const cors = require("cors");
const bookRoutes = require('./app/modules/book/book.routes')
const userRoutes = require('./app/modules/user/user.route');

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Route is working",
  });
});

app.use('/books', bookRoutes)
app.use('/users', userRoutes)



module.exports = app;