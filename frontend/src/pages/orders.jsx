import React from "react";
import styled from "styled-components";
import useOrders from "../hooks/use-orders";
import BodyContainer from "../components/body-container";
import FormTitle from "../components/form/formTitle";
import { Link } from "react-router-dom";
import Table from "../components/table";
import useLogin from "../store/useLogin";

function Orders() {
  const { orders } = useOrders();
  const { user_id } = useLogin();

  // Encuentra la orden del usuario actual
  const order = orders.filter((order) => order.user_id === user_id);

  // Si no hay orden para el usuario actual, retorna null o muestra un mensaje
  if (!order) {
    return (
      <BodyContainer style={{ alignItems: "flex-start", margin: "1rem" }}>
        <FormTitle style={{ display: "flex", flexDirection: "column" }}>
          <h2>Mis compras</h2>
          <p>No hay compras realizadas.</p>
        </FormTitle>
      </BodyContainer>
    );
  }

  // Si hay orden, muestra los detalles
  return (
    <BodyContainer style={{ alignItems: "flex-start", margin: "1rem" }}>
      <FormTitle style={{ display: "flex", flexDirection: "column" }}>
        <h2>Mis compras</h2>
        <p>Seleccione para ver el detalle</p>
      </FormTitle>
      <Table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {order.map((order) => (
            <tr key={order.order_id}>
              <td>
                <Link to={`/orders/${order.order_id}/order-detail`}>
                  {order.date}
                </Link>
              </td>

              <td>$ {order.total_price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </BodyContainer>
  );
}

export default Orders;
