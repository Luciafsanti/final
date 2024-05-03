import styled from "styled-components";
import CartProducts from "../components/cart/cart-products";
import useCart from "../store/useCart";
import FormButton from "../components/form/formButton";
import { useNavigate } from "react-router-dom";
import ErrorSpan from "../components/form/error-span";
import { useEffect, useState } from "react";
import useLogin from "../store/useLogin";
import FormTitle from "../components/form/formTitle";

const CartContainer = styled.div`
  margin: 1rem;
  display: grid;
  flex-direction: row;
  align-items: space-between;
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
  const { items, setTotalPrice, total } = useCart();
  const navigate = useNavigate();
  const { username, user_id, acces_type } = useLogin();
  const [errors, setErrors] = useState({});

  console.log(acces_type);

  const handleOrder = (e) => {
    e.preventDefault();
    if (!username) {
      setErrors({ message: "Debes iniciar sesión para comprar" });
      console.log(errors);
    } else if (acces_type === "admin") {
      setErrors({ message: "El usuario andministrador no puede comprar" });
      console.log(errors);
    } else {
      navigate("/confirmar-compra", { total: subtotal + envio });
    }
  };

  useEffect(() => {
    setTotalPrice(subtotal + envio);
  }, [items]);

  let books = Object.values(items);
  let prices = books.map((book) => Number(book.price) * book.quantity);

  let subtotal = prices.reduce((a, b) => a + b, 0);
  let envio = subtotal > 25000 ? 0 : 1600;
  let totalPrice = subtotal + envio;

  return (
    <CartContainer>
      {/*JSON.stringify(items)*/}
      {/*books.map((book) => {
        return <h2>{book.title}</h2>;
      })*/}
      <ListContainer>
        {books.map((book) => {
          return <CartProducts book={book} />;
        })}
      </ListContainer>
      <InfoContainer>
        {errors && <ErrorSpan>{errors.message}</ErrorSpan>}
        {(Object.keys(items).length > 0 && (
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
