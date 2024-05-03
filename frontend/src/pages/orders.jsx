import React from "react";
import styled from "styled-components";
import useOrders from "../hooks/use-orders";
import BodyContainer from "../components/body-container";
import FormTitle from "../components/form/formTitle";
import { Link } from "react-router-dom";
import Table from "../components/table";

function Orders() {
  const { orders } = useOrders();
  const orderArray = Object.values(orders);

  return (
    <BodyContainer style={{ alignItems: "flex-start", margin: "1rem" }}>
      <FormTitle style={{ display: "flex", flexDirection: "column" }}>
        {" "}
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
          {orderArray.map((order) => (
            <tr key={order.order_id}>
              <Link to={`/orders/${order.order_id}/order-detail`}>
                <td>{order.date}</td>
                <td>{order.total_price}</td>
              </Link>
            </tr>
          ))}
        </tbody>
      </Table>
    </BodyContainer>
  );
}

export default Orders;
