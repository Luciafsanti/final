import React from "react";
import styled from "styled-components";
import useCart from "../../store/useCart";

const Container = styled.div`
  background-color: var(--WhiteSmoke);
  width: 95vw;

  @media (min-width: 768px) {
    width: 30vw;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

const Detail = styled.div`
  display: grid;
  grid-template-areas:
    "b"
    "t"
    "d";
  margin: 2.5%;
  margin-bottom: 0px;
  margin-top: 0px;
  gap: 0px;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-areas: "b t d ";
  }
`;

const BookCover = styled(Container)`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  grid-area: b;
  border-radius: 0.5rem;

  && img {
    height: 350px;
  }

  @media (min-width: 768px) {
    margin-right: 1rem;

    && img {
      width: 25vw;
      max-width: 250px;
      height: 35vw;
      max-height: 350px;
    }
  }
`;

const BookTitle = styled(Container)`
  height: 450px;
  grid-area: t;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  && a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 768px) {
    border-radius: 0.5rem 0rem 0rem 0.5rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: 0px;
  border-radius: 0.25rem;
  background: var(--Reseda-green);
  color: whitesmoke;
  font-size: 1rem;
  font-weight: lighter;
  cursor: pointer;

  &&:hover {
    background-color: var(--Reseda-green-hover);
  }
`;

const BookDescription = styled(Container)`
  grid-area: d;
  height: 450px;
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 1rem;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    border-radius: 0rem 0.5rem 0.5rem 0rem;
  }
`;

const Title = styled.h2`
  color: black;
  font-weight: normal;
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: 5rem;
`;

const BookAuthor = styled.h3`
  color: black;
  font-weight: normal;
  text-decoration: none;
  font-size: 1rem;
`;

const BookPrice = styled.p`
  font-weight: bold;
  color: var(--Reseda-green);
  font-size: 1.2rem;
`;

const SelectedBook = ({ book }) => {
  const { addItem } = useCart();
  return (
    <Detail>
      <BookCover>
        <img src={book.image_url} alt={book.title} />
      </BookCover>
      <BookTitle>
        <Title>{book.title}</Title>
        <BookAuthor>{book.author}</BookAuthor>
        <BookPrice>{`$${book.price}`}</BookPrice>
        <Button
          onClick={() => {
            addItem(book);
          }}
        >
          Agregar al carrito
        </Button>
      </BookTitle>
      <BookDescription>
        <h2 style={{ margin: "5rem 1rem 0rem" }}>Descripción</h2>
        <p style={{ margin: "0px 1rem" }}>{book.description}</p>
        <h2 style={{ margin: "0px 1rem" }}>Detalles</h2>
        <table style={{ margin: "0px 1rem" }}>
          <tbody>
            {Object.keys(book)
              .filter(
                (detail) =>
                  ![
                    "book_id",
                    "image_url",
                    "category_id",
                    "createdAt",
                    "updatedAt",
                    "description",
                  ].includes(detail)
              )
              .map((detail) => (
                <tr key={detail}>
                  <td style={{ paddingTop: "0.2rem" }}>{detail}</td>
                  <td>{book[detail]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </BookDescription>
    </Detail>
  );
};

export default SelectedBook;
