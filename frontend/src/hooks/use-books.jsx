import axios from "axios";
import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filteredBooks, setFilteredBooks] = useState([]);

  const filterBooks = (title) => {
    let newBooks = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(title.toLowerCase()) ||
        book.author.toLowerCase().includes(title.toLowerCase())
      );
    });
    setFilteredBooks(newBooks);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/libros").then((response) => {
      setBooks(response.data);
      setFilteredBooks(response.data);
    }, []);
  }, []);

  return { books, loading, filterBooks, filteredBooks };
};

export default useBooks;
