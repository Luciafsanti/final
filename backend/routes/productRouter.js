const express = require('express');
const router = express.Router();
const bookController = require("../controllers/book.controller");



router.route("/")
    .get(bookController.getAllBooks)
    .post(bookController.createBook);

router.route("/:bookId")
    .get(bookController.getBookById)
    .put(bookController.updateBook)
    .delete(bookController.deleteBook);

module.exports = router;