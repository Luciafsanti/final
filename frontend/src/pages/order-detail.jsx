import React, { useEffect } from "react";
import styled from "styled-components";
import useOrders from "../hooks/use-orders";
import BodyContainer from "../components/body-container";
import Table from "../components/table";
import useBooks from "../hooks/use-books";
import { useParams } from "react-router-dom";
import FormTitle from "../components/form/formTitle";

const OrderContainer = styled.div`
  background-color: var(--WhiteSmoke);
  width: 80vw;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

function OrderDetail() {
  const { findOrderDetailByOrderID, orderDetailByOrderID } = useOrders();
  const { order_id } = useParams();
  const { books } = useBooks();
  console.log(order_id);

  useEffect(() => {
    findOrderDetailByOrderID(order_id);
  }, [order_id]);

  console.log(orderDetailByOrderID);

  const titlesId = orderDetailByOrderID.map((detail) => detail.book_id);
  const titles = titlesId.map((id) =>
    books.find((book) => book.book_id === id)
  );

  const bookTitles = titles.map((book) => (book ? book.title : ""));

  console.log(bookTitles);

  const prices = titles.map((book) => (book ? book.price : ""));

  console.log(prices);

  return (
    <BodyContainer>
      <OrderContainer style={{ alignItems: "flex-start", padding: "1rem" }}>
        <FormTitle style={{ display: "flex", flexDirection: "column" }}>
          <h2>Detalle de orden N° {order_id}</h2>
        </FormTitle>
        <Table>
          <thead>
            <tr>
              <th>Libro</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Importe</th>
            </tr>
          </thead>
          <tbody>
            {orderDetailByOrderID ? (
              orderDetailByOrderID.map((detail, index) => (
                <tr key={detail.detail_id}>
                  <td>{bookTitles[index]}</td>
                  <td>{detail.quantity}</td>
                  <td>$ {prices[index]}</td>
                  <td>$ {detail.total_detail}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Cargando...</td>
              </tr>
            )}
          </tbody>
        </Table>
      </OrderContainer>
    </BodyContainer>
  );
}

export default OrderDetail;
