import styled from "styled-components";
import CartProducts from "../components/cart/cart-products";
import useCart from "../store/useCart";
import FormButton from "../components/form/formButton";
import { useNavigate } from "react-router-dom";
import ErrorSpan from "../components/form/error-span";
import React, { useEffect, useState } from "react";
import useLogin from "../store/useLogin";
import FormTitle from "../components/form/formTitle";
import FormInput from "../components/form/formInput";

const CartContainer = styled.div`
  margin: 1rem;
  display: grid;
  flex-direction: row;
  align-items: space-between;
  height: 100%;
  grid-template-areas:
    "p"
    "i";

  @media (min-width: 768px) {
    grid-template-areas: "p i";
  }
`;

const ListContainer = styled.div`
  grid-area: p;
  width: 90vw;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  marggin-left: 1rem;

  @media (min-width: 768px) {
    width: 60vw;
  }
`;

const InfoContainer = styled.div`
  grid-area: i;
  width: 90vw;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--WhiteSmoke);
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    width: 30vw;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 8px;
  text-align: center; /* Center text horizontally */
`;

const TableBold = styled.td`
  font-weight: bold;
  padding: 8px;
  text-align: center; /* Center text horizontally */
`;

const Cart = (book) => {
  const {
    items,
    setTotalPrice,
    total,
    setAdress,
    setZIP,
    shippingAdress,
    shippingZIP,
    setShippingCost,
  } = useCart();
  const navigate = useNavigate();
  const { username, user_id, acces_type } = useLogin();
  const [errors, setErrors] = useState({});

  const handleOrder = (e) => {
    e.preventDefault();
    if (!username) {
      setErrors({ message: "Debes iniciar sesión para comprar" });
      console.log(errors);
    } else if (acces_type === "admin") {
      setErrors({ message: "El usuario andministrador no puede comprar" });
      console.log(errors);
    } else if (shippingAdress === "" || shippingZIP === 0) {
      setErrors({
        message: "Debe ingresar una direccion y codigo postal para el envio",
      });
      console.log(errors);
    } else {
      navigate("/confirmar-compra", { total: subtotal + envio });
    }
  };

  let books = Object.values(items);
  let prices = books.map((book) => Number(book.price) * book.quantity);

  let subtotal = prices.reduce((a, b) => a + b, 0);
  let envio = subtotal > 25000 ? 0 : 1600;

  useEffect(() => {
    setTotalPrice(subtotal + envio);
    setShippingCost(envio);
  }, [items]);
  return (
    <CartContainer>
      <ListContainer>
        {books.map((book) => {
          return <CartProducts book={book} />;
        })}
      </ListContainer>
      <InfoContainer>
        {errors && <ErrorSpan>{errors.message}</ErrorSpan>}
        {(Object.keys(items).length > 0 && (
          <div>
            <FormTitle>
              <h2 style={{ fontSize: "15px" }}>
                Datos de envío (dirección: calle, numero)
              </h2>
            </FormTitle>
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
            >
              <FormInput
                placeholder="Direccion"
                type="text"
                defaultValue={shippingAdress}
                onChange={(e) => setAdress(e.target.value)}
                style={{ maxWidth: "18rem" }}
              />
              <FormInput
                placeholder="Codigo postal"
                type="number"
                defaultValue={shippingZIP}
                style={{ maxWidth: "6rem" }}
                onChange={(e) => setZIP(e.target.value)}
              />
            </div>
            <Table>
              <tbody>
                <TableRow>
                  <TableData>Subtotal</TableData>
                  <TableBold>$ {subtotal}</TableBold>
                </TableRow>
                <TableRow>
                  <TableData>Envío</TableData>
                  <TableBold>$ {envio}</TableBold>
                </TableRow>
                <TableRow>
                  <TableBold>TOTAL</TableBold>
                  <TableBold>$ {total}</TableBold>
                </TableRow>
              </tbody>
            </Table>
          </div>
        )) || (
          <FormTitle
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <h2>Carrito vacio</h2>
          </FormTitle>
        )}
        {Object.keys(items).length > 0 && (
          <FormButton onClick={handleOrder}>Comprar</FormButton>
        )}
      </InfoContainer>
    </CartContainer>
  );
};

export default Cart;
