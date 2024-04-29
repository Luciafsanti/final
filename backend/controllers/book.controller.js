const Book = require('../models').books;

const getAllBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

async function getBookById(req, res) {
  const { bookId } = req.params;
  const book = await Book.findByPk(bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
}

const createBook = async (req, res) => {
  const { book, price, stock } = req.body;
  const newBook = await Book.create({ book, price, stock });
  res.json(newBook);
};

const updateBook = async (req, res) => {
  let { bookId } = req.params;
  let book = Book.findByPk(bookId);
  if (book) {
    let { newBookName, newPrice, newStock } = req.body;
    console.log(newBookName, newPrice, newStock);
    if (newBookName != undefined || newPrice != undefined || newStock != undefined) {
      await Book.update({
        book: newBookName || book.book,
        price: newPrice || book.price,
        stock: newStock || book.stock
      }, {
        where: {
          book_id: bookId
        }
      });
      res.status(200).json({ message: `Book "${bookId}" updated successfully` });
    } else {
      res.status(404).json({ message: `Faltan nuevos datos` });
    }
  } else {
    res.status(404).json({ message: `Book not found` });
  }
}

const deleteBook = async (req, res) => {
  let bookId = req.params.bookId;
  let book = await Book.findByPk(bookId);
  if (book) {
    await Book.destroy({
      where: {
        book_id: bookId
      }
    });
    res.status(200).json({ message: `Book "${bookId}" deleted successfully` });
  } else {
    res.status(404).json({ message: `Book not found` });
  }
};



module.exports = {
  getAllBooks: getAllBooks,
  getBookById: getBookById,
  createBook,
  updateBook,
  deleteBook
};