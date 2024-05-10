import React from "react";
import useBooks from "../hooks/use-books";
import Table from "../components/table";
import styled from "styled-components";
import BodyContainer from "../components/body-container";
import FormTitle from "../components/form/formTitle";
import FormButton from "../components/form/formButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width: 80vw;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

function Products() {
  const { books } = useBooks();
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (confirm("Eliminar producto id: " + id)) {
      axios
        .delete("http://localhost:3000/libros/" + id, {})
        .then(function (response) {
          console.log(response);
          window.location.reload();
          alert("Producto eliminado exitosamente");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const id = e.target.id;
    navigate("/editar-producto/" + id);
  };

  return (
    <BodyContainer>
      <Container>
        <FormTitle
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80vw",
            maxWidth: "80vw",
          }}
        >
          <h2>Gestionar Productos</h2>
          <FormButton
            style={{ width: "6rem" }}
            onClick={(e) => navigate("/nuevo-producto")}
          >
            Agregar
          </FormButton>
        </FormTitle>
        <Table style={{ maxWidht: "80vw" }}>
          <thead>
            <tr>
              <th>imagen</th>

              <th>Informacion</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => {
              return (
                <tr key={book.book_id}>
                  <td>
                    <img
                      src={book.image_url}
                      alt=""
                      style={{ width: "5rem" }}
                    />
                  </td>
                  <td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.ISBN}</td>
                    <tr>
                      <td>{book.price}</td>
                      <td>{book.stock}</td>
                      <td>{book.category_id}</td>
                    </tr>
                    <tr>
                      <td colSpan={6}>{book.description}</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <FormButton
                          style={{ width: "5rem", marginRight: "0.5rem" }}
                          onClick={handleUpdate}
                          id={book.book_id}
                        >
                          Editar
                        </FormButton>
                        <FormButton
                          style={{ width: "6rem" }}
                          onClick={handleDelete}
                          id={book.book_id}
                        >
                          Eliminar
                        </FormButton>
                      </td>
                    </tr>
                  </td>
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
