import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home.jsx";
import Login from "./pages/login";
import Register from "./pages/register";
import Footer from "./components/footer";
import Cart from "./pages/cart";
import BookDetail from "./pages/prod-detail";

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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
