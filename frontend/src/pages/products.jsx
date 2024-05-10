import React from "react";
import useBooks from "../hooks/use-books";
import Table from "../components/table";
import styled from "styled-components";
import BodyContainer from "../components/body-container";
import FormTitle from "../components/form/formTitle";

const Container = styled.div`
  width: 80vw;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

function Products() {
  const { books } = useBooks();

  return (
    <BodyContainer>
      <Container>
        <FormTitle>
          <h2>Gestionar Productos</h2>
        </FormTitle>
        <Table style={{ maxWidht: "80vw" }}>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Autor</th>
              <th>ISBN</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoria</th>
              <th>Imagen</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => {
              return (
                <tr>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.ISBN}</td>
                  <td>{book.price}</td>
                  <td>{book.stock}</td>
                  <td>{book.category_id}</td>
                  <td>
                    <img
                      src={book.image_url}
                      alt=""
                      style={{ width: "5rem" }}
                    />
                  </td>
                  <td>{book.description}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </BodyContainer>
  );
}

export default Products;
