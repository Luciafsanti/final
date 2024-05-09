import React from "react";
import FormTitle from "../components/form/formTitle";
import FormContainer from "../components/form/formContainer";
import FormInput from "../components/form/formInput";
import FormButton from "../components/form/formButton";
import FormLink from "../components/form/formLink";
import FormComponent from "../components/form/form";
import { useNavigate } from "react-router-dom";
import useOrders from "../hooks/use-orders";
import axios from "axios";
import useLogin from "../store/useLogin";
import useCart from "../store/useCart";
import Table from "../components/table";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "d"
    "e"
    "c";
  justify-items: center;
  align-items: center;
  align-content: center;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;

  && #shipping-detail {
    grid-area: e;
  }
  && #confirm-order {
    width: 75vw;
    margin-bottom: 1rem;
  }

  @media (min-width: 800px) {
    padding: 2rem;
    grid-template-areas:
      "d c"
      "e c";

    && #confirm-order {
      width: 40vw;
    }
  }
`;

const DetailContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--WhiteSmoke);
  border-radius: 0.5rem;
  gap: 1.5rem;
  align-items: center;
  width: 75vw;
  margin-bottom: 1rem;
  padding: 3rem 1rem;
  @media (min-width: 800px) {
    max-width: 40vw;
  }
`;

function ConfirmOrder() {
  const navigate = useNavigate();
  const { items, total, cleanCart, shippingAdress, shippingZIP, shippingCost } =
    useCart();
  console.log(shippingAdress, shippingZIP, shippingCost);
  const { username, user_id } = useLogin();

  let books = Object.values(items);

  const handleOrder = (e) => {
    e.preventDefault();

    // Primero, realizamos la solicitud para crear la orden
    if (shippingAdress !== "" && shippingZIP !== "") {
      axios
        .post("http://localhost:3000/orders", {
          user_id: user_id,
          total_price: total,
          adress: shippingAdress,
          zipcode: shippingZIP,
        })
        .then(function (orderResponse) {
          console.log(orderResponse);
          const orderId = orderResponse.data.order_id;

          // Una vez que se ha creado la orden, recorremos los libros
          // y enviamos los detalles de cada libro en la orden
          Object.values(items).forEach((book) => {
            axios
              .post(`http://localhost:3000/orders/${orderId}/order-detail`, {
                order_id: orderId,
                book_id: book.book_id,
                quantity: book.quantity,
                total_detail: book.price * book.quantity,
              })
              .then(function (bookResponse) {
                console.log(bookResponse);
              })
              .catch(function (error) {
                console.log(error);
              });
          });

          navigate(`/orders/${orderId}/order-detail`);
          alert("Compra realizada exitosamente");
        })
        .catch(function (error) {
          console.log(error);
        });
      cleanCart();
    }
  };

  return (
    <Container>
      <DetailContainer>
        <FormTitle>
          <h2>Detalles de compra</h2>
        </FormTitle>
        <Table>
          <thead>
            <tr>
              <th>Libro</th>
              <th>Precio unitario</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.book_id}>
                <td>{book.title}</td>
                <td>$ {book.price}</td>
                <td>{book.quantity}</td>
                <td>$ {book.price * book.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </DetailContainer>
      <DetailContainer id="shipping-detail">
        <FormTitle>
          <h2>Detalles de envio</h2>
        </FormTitle>
        <Table>
          <thead>
            <tr>
              <th>Direccion</th>
              <th>Codigo postal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{shippingAdress}</td>
              <td>{shippingZIP}</td>
            </tr>
            <tr>
              <td>Costo de envio</td>
              <td>$ {shippingCost}</td>
            </tr>
          </tbody>
        </Table>
      </DetailContainer>
      <FormComponent id="confirm-order">
        <FormTitle>
          <h2>¿Desea confirmar la compra?</h2>
        </FormTitle>
        <h3>Total: $ {total}</h3>
        <FormButton onClick={handleOrder}>Confirmar compra</FormButton>
        <FormButton onClick={() => navigate("/cart")}>
          Volver al carrito
        </FormButton>
      </FormComponent>
    </Container>
  );
}

export default ConfirmOrder;
