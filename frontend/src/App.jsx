import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home.jsx';
import Login from './pages/login';
import Register from './pages/register';
import Footer from './components/footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App