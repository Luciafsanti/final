import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home.jsx";
import Login from "./pages/login";
import Register from "./pages/register";
import Footer from "./components/footer";
import Cart from "./pages/cart";
import BookDetail from "./pages/prod-detail";
import Logout from "./pages/logout";
import ConfirmOrder from "./pages/confirm-order";
import OrderDetail from "./pages/order-detail";
import Orders from "./pages/orders";
import Products from "./pages/products";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/libros/:book_id" element={<BookDetail />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/confirmar-compra" element={<ConfirmOrder />} />
        <Route path="/orders/" element={<Orders />} />
        <Route
          path="/orders/:order_id/order-detail"
          element={<OrderDetail />}
        />
        <Route path="/productos" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
