import styled from "styled-components";
import CartProducts from "../components/cart/cart-products";
import useCart from "../store/useCart";
import FormButton from "../components/form/formButton";
import { useNavigate } from "react-router-dom";
import ErrorSpan from "../components/form/error-span";
import { useEffect, useState } from "react";
import useLogin from "../store/useLogin";

const CartContainer = styled.div`
  margin: 1rem;
  display: grid;
  flex-direction: row;
  align-items: space-between;
  grid-template-areas: "p i";
`;

const ListContainer = styled.div`
  grid-area: p;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  marggin-left: 1rem;
`;

const InfoContainer = styled.div`
  grid-area: i;
  width: 30vw;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--WhiteSmoke);
  border-radius: 0.5rem;
`;

const Cart = (book) => {
  const { items, setTotalPrice, total } = useCart();
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
  let envio = subtotal > 15000 ? 0 : 1600;
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
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$ {subtotal}</td>
            </tr>
            <tr>
              <td>Envio</td>
              <td>$ {envio}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$ {total}</td>
            </tr>
          </tbody>
        </table>
        <FormButton onClick={handleOrder}>Comprar</FormButton>
      </InfoContainer>
    </CartContainer>
  );
};

export default Cart;
