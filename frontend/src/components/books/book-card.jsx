import { Link } from "react-router-dom";
import styled from "styled-components";

const BookCardContainer = styled.div`
  gap: 3px;
  border: 0px;
  border-radius: 0.25rem;
  background: #f5f5f5;
  width: 158.509px;
  height: 230px;
  margin: 1rem;
  box-shadow: 0 1em 1em rgba(0, 0, 0, 0.1), 0.1em 0.1em 0.3em rgba(0, 0, 0, 0.3);
  display: flex;
  text-decoration: none;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &&:hover {
    background-color: #ededed;
  }
`;

const BookImg = styled(Link)`
  text-decoration: none;

  && img {
    width: 7rem;
    height: 10rem;
  }
`;

const BookTitle = styled(Link)`
  color: black;
  font-weight: normal;
  text-decoration: none;
  font-size: 15px;
`;

const BookAuthor = styled(Link)`
  color: black;
  font-weight: normal;
  text-decoration: none;
  font-size: 12px;
`;

const BookPrice = styled.p`
  font-weight: bold;
  color: var(--Reseda-green);
  font-size: 15px;
`;

const BookCard = ({ book }) => {
  return (
    <BookCardContainer>
      <BookImg to={"/libros/" + book.book_id}>
        <img src={book.image_url} />
      </BookImg>
      <BookTitle to={"/libros/" + book.book_id}>{book.title}</BookTitle>
      <BookAuthor to={"/autores/" + book.author}>{book.author}</BookAuthor>
      <BookPrice>{`$${book.price}`}</BookPrice>
    </BookCardContainer>
  );
};

export default BookCard;
