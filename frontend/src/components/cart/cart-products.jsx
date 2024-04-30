import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListContainer = styled.div`
  grid-area: p;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CartCard = styled.div`
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  height: 105px;
  justify-content: space-around;
  align-content: flex-start;
  align-items: center;
  margin: 0px;
`;

const ProductImage = styled.image`
  margin: 2.5px 1rem 0 1rem;
  height: 100px;
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
  const [quantity, setQuantity] = useState(0);

  const addOne = () => {
    setQuantity(quantity + 1);
  };

  useEffect((e) => addOne());

  return (
    <ListContainer>
      <CartCard>
        <ProductImage src={book.image_url} />
        <BookTitle to={"/libros/" + book.book_id}>{book.title}</BookTitle>
        <ProductPrice>{book.price}</ProductPrice>
        <ProductNumber
          key={book.book_id}
          type="number"
          value={quantity}
          onChange={addOne}
        />
      </CartCard>
    </ListContainer>
  );
};

export default CartProducts;
