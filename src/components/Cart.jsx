import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const headers = token
        ? { Authorization: `Bearer ${token}` }
        : {};

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/`, {
        method: "GET",
        headers,
        credentials: "include", // ✅ Send cookies if needed
      });

      if (!res.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await res.json();
      setCartItems(data.cart_items || []);
    } catch (err) {
      console.error("Error loading cart", err);
      alert("Failed to load cart");
    }
  };

  const handleRemoveItem = async (productId) => {
    if (!token) {
      alert("Login required to modify cart.");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/remove/${productId}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include", // ✅ include here as well if cookie-based auth is used
      });

      if (res.ok) {
        fetchCartItems();
      } else {
        alert("Failed to remove item");
      }
    } catch (err) {
      console.error("Remove error:", err);
      alert("Something went wrong");
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.product.image} alt={item.product.name} />
              <div className="cart-info">
                <h3>{item.product.name}</h3>
                <p>Price: ₹{item.product.price}</p>
                <p>Qty: {item.quantity}</p>
                <p>Total: ₹{item.product.price * item.quantity}</p>
                <button
                  onClick={() => handleRemoveItem(item.product.id)}
                  disabled={!token}
                  title={!token ? "Login to modify cart" : ""}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <button
              className="checkout-btn"
              disabled={!token}
              title={!token ? "Login to checkout" : ""}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

