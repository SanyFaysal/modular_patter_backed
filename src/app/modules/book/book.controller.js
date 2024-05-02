// const Book = require("../../../../schemas/bookShcema");
const { getAllBooksService, createBookService } = require("./book.service");

exports.getAllBooks = async (req, res) => {
  try {
    const result = await getAllBooksService();

    return res.status(200).json({
      status: "Success",
      message: "Book fetched successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Something went wrong!!",
      error: error,
    });
  }
};
exports.createBook = async (req, res) => {
  try {

    const data = req.body;
    const result = await createBookService(data);

    return res.status(200).json({
      status: "Success",
      message: "Book created successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Something went wrong!!",
      error: error,
    });
  }
};
