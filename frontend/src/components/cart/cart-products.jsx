import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useCart from "../../store/useCart";

const CartCard = styled.div`
  width: 95vw;
  display: flex;
  background-color: var(--WhiteSmoke);
  flex-direction: row;
  flex-wrap: wrap;
  height: 120px;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin: 0px;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const ProductImage = styled.img`
  height: auto;
  max-height: 110px;
  display: flex;
`;

const ProductNumber = styled.input`
  width: 2.5rem;
`;

const BookTitle = styled(Link)`
  color: black;
  font-weight: normal;
  text-decoration: none;
  font-size: 15px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: var(--Reseda-green);
  font-size: 15px;
`;

const CartProducts = ({ book }) => {
  const { changeQuantity, deleteItem } = useCart();

  const handleQuantityChange = (e) => {
    e.preventDefault();

    if (book.quantity !== e.target.value) {
      changeQuantity(book.book_id, e.target.value);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteItem(book.book_id);
  };

  return (
    <CartCard>
      <ProductImage src={book.image_url} />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <BookTitle to={"/libros/" + book.book_id}>{book.title}</BookTitle>
        <ProductPrice>{book.quantity + "x $" + book.price}</ProductPrice>
      </div>
      <ProductNumber
        key={book.book_id}
        type="number"
        defaultValue={book.quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handleDelete}>Eliminar</button>
    </CartCard>
  );
};

export default CartProducts;
