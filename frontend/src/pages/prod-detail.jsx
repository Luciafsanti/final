import React, { useEffect, useState } from "react";
import useCategories from "../hooks/use-categories";
import useBooks from "../hooks/use-books";
import { Link, useParams } from "react-router-dom";
import SelectedBook from "../components/detail/selected-book";
import styled from "styled-components";

const BookCategory = styled(Link)`
  margin: 1rem;
  color: rgb(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    margin-left: 4rem;
  }
`;

const BookDetail = () => {
  const { books } = useBooks();
  const { categories } = useCategories();
  const { book_id } = useParams();
  const {categoryById, findCategoryById} = useCategories();

  const [bookId, setBookId] = useState("");
  const [book, setBook] = useState("");

  useEffect(() => {
    setBookId(book_id);
    const selectedBook = books.find((book) => book.book_id === Number(bookId));
    if (selectedBook) {
      setBook(selectedBook);
    }
    findCategoryById(book.category_id);
  }, [book_id, books, bookId]);
  return (
    <div>
      {categoryById && (
  <BookCategory to={"/libros/categorias/" + book.category_id}>
    {"> "}{categoryById.category_name}
  </BookCategory>
)}
      <SelectedBook book={book}></SelectedBook>
    </div>
  );
};

export default BookDetail;
