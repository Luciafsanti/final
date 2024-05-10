import React, { useEffect } from "react";
import useBooks from "../hooks/use-books";
import Table from "../components/table";
import styled from "styled-components";
import BodyContainer from "../components/body-container";
import FormTitle from "../components/form/formTitle";
import FormButton from "../components/form/formButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useCategories from "../hooks/use-categories";

const Container = styled.div`
  width: 80vw;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

function Products() {
  const { books } = useBooks();
  const navigate = useNavigate();
  const { categories } = useCategories();

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

  const categoriesNames = categories
    .sort((c1, c2) => c1.category_id - c2.category_id)
    .map((c) => c.category_name);

  console.log(categoriesNames);

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
                    <td>
                      {book.book_id}) Titulo: {book.title}
                    </td>
                    <td>Autor: {book.author}</td>
                    <td>ISBN: {book.ISBN}</td>
                    <tr>
                      <td>$ {book.price}</td>
                      <td>Stock: {book.stock}</td>
                      <td>Cat.: {categoriesNames[book.category_id - 1]}</td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        Descripcion: <br />
                        {book.description}
                      </td>
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
