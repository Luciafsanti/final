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
  const { title, author, ISBN, price, stock, category_id, image_url, description } = req.body;
  const newBook = await Book.create({ title, author, ISBN, price, stock, category_id, image_url, description });
  res.json(newBook);
};

const updateBook = async (req, res) => {
  let { bookId: book_id } = req.params;
  let book = Book.findByPk(book_id);
  if (book) {
    let { newTitle, newAuthor, newISBN, newPrice, newStock, newCategory_id, newImage_url, newDescription } = req.body;
    console.log(newTitle, newAuthor, newISBN, newPrice, newStock, newCategory_id, newImage_url, newDescription);
    if (newTitle != undefined || newAuthor != undefined || newISBN != undefined || newPrice != undefined || newStock != undefined || newCategory_id != undefined || newImage_url != undefined || newDescription != undefined) {
      await Book.update({
        title: newTitle || book.title,
        author: newAuthor || book.author,
        ISBN: newISBN || book.ISBN,
        price: newPrice || book.price,
        stock: newStock || book.stock,
        category_id: newCategory_id || book.category_id,
        image_url: newImage_url || book.image_url,
        description: newDescription || book.description,
      }, {
        where: {
          book_id: book_id
        }
      });
      res.status(200).json({ message: `Book "${book_id}" updated successfully` });
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