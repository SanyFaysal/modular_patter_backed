const express = require("express");
const { getAllBooks, createBook } = require("./book.controller");

const router = express.Router();

router.get("/", getAllBooks);

router.post('/', createBook)

module.exports = router;
