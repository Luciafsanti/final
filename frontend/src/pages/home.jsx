import React, { useEffect, useState } from "react";
import Novedades from "../components/home/novedades";
//import ProductosSlide from '../components/home/productosSlide';
import useBooks from "../hooks/use-books";
import styled from "styled-components";

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
  const { books, loadind } = useBooks();

  if (loadind) {
    return <h1>cargando</h1>;
  }
  return (
    <div>
      <h1>Home</h1>
      <Novedades />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {books.map((book, index) => (
          <div key={"bookCard" + index}>
            <img
              src={book.image_url}
              style={{ height: "15rem", width: "10rem" }}
              alt=""
            />
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
