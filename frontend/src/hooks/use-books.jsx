import axios from "axios";
import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filteredBooks, setFilteredBooks] = useState([]);

  const filterBooks = (title, price, category, order) => {
    let newBooks = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(title.toLowerCase()) ||
        book.author.toLowerCase().includes(title.toLowerCase())
      );
    });
    if (price > 0) {
      newBooks = newBooks.filter((book) => {
        return book.price <= Number(price);
      });
    }
    if (category != "") {
      newBooks = newBooks.filter((book) => {
        return book.category_id === Number(category);
      });
    }
    switch (order) {
      case "menor-mayor-precio":
        console.log(order);
        newBooks = newBooks.sort((a, b) => a.price - b.price);
        break;
      case "mayor-menor-precio":
        newBooks = newBooks.sort((a, b) => b.price - a.price);
        break;
      case "A-Z":
        newBooks = newBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        newBooks = newBooks.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        newBooks = newBooks.sort((a, b) => a.book_id - b.book_id);
        break;
    }
    setFilteredBooks(newBooks);
  };

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/libros").then((response) => {
      setBooks(response.data);
      setFilteredBooks(response.data);
      setLoading(false);
    }, []);
  }, []);

  return { books, loading, filterBooks, filteredBooks };
};

export default useBooks;
