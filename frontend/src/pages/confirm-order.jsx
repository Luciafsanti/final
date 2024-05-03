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

function ConfirmOrder() {
  const navigate = useNavigate();
  const { items, total } = useCart();
  const { username, user_id } = useLogin();

  let books = Object.values(items);

  const handleOrder = (e) => {
    e.preventDefault();

    // Primero, realizamos la solicitud para crear la orden
    axios
      .post("http://localhost:3000/orders", {
        user_id: user_id,
        total_price: total,
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

        navigate("/order-detail");
        alert("Compra realizada exitosamente");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <FormContainer>
      <FormTitle>
        <h2>¿Desea confirmar la compra?</h2>
      </FormTitle>
      <FormComponent>
        <FormButton onClick={handleOrder}>Confirmar compra</FormButton>
        <FormButton onClick={() => navigate("/cart")}>
          Volver al carrito
        </FormButton>
      </FormComponent>
    </FormContainer>
  );
}

export default ConfirmOrder;
