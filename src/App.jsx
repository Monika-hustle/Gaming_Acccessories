
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from './components/products';
import Footer from "./components/Footer";
import Signup from './components/Signup';
import Login from './components/login';
import Cart from './components/Cart';
import MyOrders from './components/MyOrders';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check token on load
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart/>} />
          { <Route path="/ordered" element={<MyOrders/>} /> }
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
