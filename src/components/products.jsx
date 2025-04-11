import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: 1,
        }),
      });

      if (res.ok) {
        navigate("/cart");
      } else {
        const data = await res.json();
        alert(data.error || "Failed to add to cart");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-rating">⭐ {product.rating} ({product.reviews})</p>
            <p className="product-price">
              ₹{product.price} <span className="original-price">M.R.P: ₹{product.original_price}</span> ({product.discount}% off)
            </p>
            <p className="delivery">📦 Free delivery {product.delivery_date}</p>
            <p className="fast-delivery">🚀 Fastest delivery {product.fastest_delivery}</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(product.id)}> Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

