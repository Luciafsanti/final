import React, { useEffect, useState } from "react";
import Novedades from "../components/home/novedades";
//import ProductosSlide from '../components/home/productosSlide';
import useBooks from "../hooks/use-books";
import styled from "styled-components";
import BookContainer from "../components/books/books-container";
import BookCard from "../components/books/book-card";
import BodyContainer from "../components/body-container";
import Search from "../components/search";

const bookCard = styled.div`
  width: 90px;
  height: 30px;
  font-size: 5px;
  font-family: arial;
`;

const bookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  height: 50px;
  background-color: red;
`;

const Home = () => {
  const { books, loadind, filterBooks, filteredBooks } = useBooks();

  if (loadind) {
    return <h1>cargando</h1>;
  }
  return (
    <BodyContainer>
      <Search handleSearch={filterBooks} />
      <Novedades />
      <BookContainer>
        {filteredBooks.map((book) => (
          <BookCard book={book} key={book.id}></BookCard>
        ))}
      </BookContainer>
    </BodyContainer>
  );
};

export default Home;
